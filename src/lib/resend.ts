import React from "react";
import { Resend } from "resend";
import { render } from "@react-email/components";
import CustomerConfirmationEmail from "@/emails/CustomerConfirmation";
import ClinicNotificationEmail from "@/emails/ClinicNotification";

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  return apiKey ? new Resend(apiKey) : null;
};

const getAdminRecipient = () => {
  const envAdmin = process.env.ADMIN_EMAIL;
  if (envAdmin && !envAdmin.includes("solene.com") && !envAdmin.includes("example.com")) {
    return envAdmin;
  }
  return "grr2292005@gmail.com";
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
  const fromEmail = "Solène Studio <onboarding@resend.dev>";
  const adminRecipient = getAdminRecipient();

  if (!resend) {
    console.warn("Resend API Key is missing. Skipping customer confirmation email.");
    return { success: false, error: "Resend API Key missing" };
  }

  try {
    // Render full luxury React Email HTML template
    const html = await render(
      React.createElement(CustomerConfirmationEmail, params)
    );

    let data = await resend.emails.send({
      from: fromEmail,
      to: params.email,
      subject: "Appointment Confirmed | Solène Aesthetic Medicine Studio",
      html,
    });

    // Handle Resend testing sandbox restrictions (if client recipient email is unverified)
    if (
      data.error &&
      (data.error.name === "validation_error" ||
        data.error.statusCode === 422 ||
        data.error.statusCode === 403 ||
        data.error.message?.includes("testing") ||
        data.error.message?.includes("domain"))
    ) {
      console.warn(
        `[Resend Sandbox] Recipient ${params.email} is restricted by Resend free tier. Sending luxury HTML confirmation copy to ${adminRecipient}.`
      );
      data = await resend.emails.send({
        from: fromEmail,
        to: adminRecipient,
        subject: `[Client Confirmation Copy for ${params.fullName}] Solène Studio`,
        html,
      });
    }

    if (data.error) {
      console.error("[Resend API Error] Customer Email:", data.error);
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
  const fromEmail = "Solène Studio <onboarding@resend.dev>";
  const adminRecipient = getAdminRecipient();

  if (!resend) {
    console.warn("Resend API Key is missing. Skipping clinic notification email.");
    return { success: false, error: "Resend API Key missing" };
  }

  try {
    // Render full staff alert React Email HTML template
    const html = await render(
      React.createElement(ClinicNotificationEmail, params)
    );

    let data = await resend.emails.send({
      from: fromEmail,
      to: adminRecipient,
      subject: `New Booking Alert: ${params.fullName} - ${params.treatment}`,
      html,
    });

    // Fallback if adminRecipient was rejected by sandbox
    if (
      data.error &&
      (data.error.statusCode === 403 || data.error.statusCode === 422)
    ) {
      data = await resend.emails.send({
        from: fromEmail,
        to: "grr2292005@gmail.com",
        subject: `New Booking Alert: ${params.fullName} - ${params.treatment}`,
        html,
      });
    }

    if (data.error) {
      console.error("[Resend API Error] Clinic Notification Email:", data.error);
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
