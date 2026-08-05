import React from "react";
import { Resend } from "resend";
import { render } from "@react-email/components";
import CustomerConfirmationEmail from "@/emails/CustomerConfirmation";
import ClinicNotificationEmail from "@/emails/ClinicNotification";

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  return apiKey ? new Resend(apiKey) : null;
};

interface SendCustomerConfirmationParams {
  fullName: string;
  email: string;
  phone?: string;
  treatment: string;
  date: string;
  time: string;
}

interface SendClinicNotificationParams {
  appointmentId: string;
  fullName: string;
  email: string;
  phone?: string;
  treatment: string;
  date: string;
  time: string;
  message?: string;
  submittedAt: string;
}

export async function sendCustomerConfirmationEmail(
  params: SendCustomerConfirmationParams
) {
  const resend = getResendClient();
  const fromEmail = process.env.FROM_EMAIL || "Solène Studio <onboarding@resend.dev>";

  if (!resend) {
    console.warn("Resend API Key is missing. Skipping customer confirmation email.");
    return { success: false, error: "Resend API Key missing" };
  }

  try {
    const html = await render(
      React.createElement(CustomerConfirmationEmail, params)
    );

    const data = await resend.emails.send({
      from: fromEmail,
      to: params.email,
      subject: "Appointment Confirmed | Solène Aesthetic Medicine Studio",
      html,
    });

    if (data.error) {
      console.error("Resend Customer Email Error:", data.error);
      return { success: false, error: data.error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send customer confirmation email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown email error",
    };
  }
}

export async function sendClinicNotificationEmail(
  params: SendClinicNotificationParams
) {
  const resend = getResendClient();
  const fromEmail = process.env.FROM_EMAIL || "Solène Studio <onboarding@resend.dev>";
  const adminEmail = process.env.ADMIN_EMAIL || "hello@solene.com";

  if (!resend) {
    console.warn("Resend API Key is missing. Skipping clinic notification email.");
    return { success: false, error: "Resend API Key missing" };
  }

  try {
    const html = await render(
      React.createElement(ClinicNotificationEmail, params)
    );

    const data = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Booking Alert: ${params.fullName} - ${params.treatment}`,
      html,
    });

    if (data.error) {
      console.error("Resend Clinic Email Error:", data.error);
      return { success: false, error: data.error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send clinic notification email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown email error",
    };
  }
}
