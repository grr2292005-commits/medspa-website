import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validation";
import { getSupabaseAdminClient } from "@/lib/supabase";
import {
  sendCustomerConfirmationEmail,
  sendClinicNotificationEmail,
} from "@/lib/resend";
import type { ApiResponse } from "@/types/appointment";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Zod Input Validation
    const validationResult = appointmentSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string[]> = {};
      validationResult.error.issues.forEach((issue) => {
        const field = issue.path.join(".");
        if (!fieldErrors[field]) {
          fieldErrors[field] = [];
        }
        fieldErrors[field].push(issue.message);
      });

      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: "Invalid appointment form submission.",
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 2. Database Insert into Supabase
    const supabase = getSupabaseAdminClient();

    if (!supabase) {
      console.error(
        "[Appointments API] Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment variables."
      );
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error:
            "Database configuration error: Please add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel Project Settings ➔ Environment Variables.",
        },
        { status: 500 }
      );
    }

    const { data: appointment, error: dbError } = await supabase
      .from("appointments")
      .insert({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone || null,
        treatment: data.treatment,
        appointment_date: data.date,
        appointment_time: data.time,
        message: data.message || null,
        status: "pending",
        email_sent: false,
        admin_notified: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (dbError || !appointment) {
      console.error("[Appointments API] Supabase Insert Failure:", dbError);
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: "Failed to reserve appointment in our database. Please try again.",
        },
        { status: 500 }
      );
    }

    let customerEmailSent = false;
    let clinicEmailNotified = false;

    // 3. Send Customer Confirmation Email
    const customerEmailResult = await sendCustomerConfirmationEmail({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      treatment: data.treatment,
      date: data.date,
      time: data.time,
    });

    if (customerEmailResult.success) {
      customerEmailSent = true;
      await supabase
        .from("appointments")
        .update({ email_sent: true, updated_at: new Date().toISOString() })
        .eq("id", appointment.id);
    } else {
      console.error(
        "[Appointments API] Customer Confirmation Email Failed:",
        customerEmailResult.error
      );
    }

    // 4. Send Clinic Notification Email
    const clinicEmailResult = await sendClinicNotificationEmail({
      appointmentId: appointment.id,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      treatment: data.treatment,
      date: data.date,
      time: data.time,
      message: data.message,
      submittedAt: appointment.created_at,
    });

    if (clinicEmailResult.success) {
      clinicEmailNotified = true;
      await supabase
        .from("appointments")
        .update({ admin_notified: true, updated_at: new Date().toISOString() })
        .eq("id", appointment.id);
    } else {
      console.error(
        "[Appointments API] Clinic Notification Email Failed:",
        clinicEmailResult.error
      );
    }

    // 5. Structured Success Response
    return NextResponse.json<ApiResponse>(
      {
        success: true,
        data: {
          appointmentId: appointment.id,
          message: "Appointment successfully reserved.",
          customerEmailSent,
          clinicEmailNotified,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Appointments API] Unexpected Server Error:", error);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: "An unexpected server error occurred while processing your reservation.",
      },
      { status: 500 }
    );
  }
}
