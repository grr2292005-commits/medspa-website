import React from "react";
import { Resend } from "resend";
import { BrevoClient } from "@getbrevo/brevo";
import { render } from "@react-email/components";
import CustomerConfirmationEmail from "@/emails/CustomerConfirmation";
import ClinicNotificationEmail from "@/emails/ClinicNotification";

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  return apiKey ? new Resend(apiKey) : null;
};

const getBrevoClient = () => {
  const apiKey = process.env.BREVO_API_KEY;
  return apiKey ? new BrevoClient({ apiKey }) : null;
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

export interface EmailResult {
  success: boolean;
  data?: unknown;
  error?: string;
}

async function sendViaBrevoSDK(
  toEmail: string,
  toName: string,
  subject: string,
  htmlContent: string
): Promise<EmailResult | null> {
  const brevo = getBrevoClient();
  if (!brevo) return null;

  try {
    const res = await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        name: "Solène Studio",
        email: "grr2292005@gmail.com",
      },
      to: [
        {
          email: toEmail,
          name: toName || toEmail,
        },
      ],
      subject,
      htmlContent,
    });

    if (res && res.messageId) {
      console.log(`[Brevo SDK Success] Message ID: ${res.messageId} to ${toEmail}`);
      return { success: true, data: res };
    }

    return { success: false, error: "Brevo delivery failed" };
  } catch (err) {
    console.error("[Brevo SDK Exception]", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Brevo error",
    };
  }
}

export async function sendCustomerConfirmationEmail(
  params: SendCustomerConfirmationParams
): Promise<EmailResult> {
  try {
    // Render full luxury React Email HTML template
    const html = await render(
      React.createElement(CustomerConfirmationEmail, params)
    );

    // 1. Try Brevo SDK (Allows sending to ANY customer email worldwide)
    const brevoResult = await sendViaBrevoSDK(
      params.email,
      params.fullName,
      "Appointment Confirmed | Solène Aesthetic Medicine Studio",
      html
    );

    if (brevoResult && brevoResult.success) {
      return brevoResult;
    }

    // 2. Fallback to Resend API
    const resend = getResendClient();
    if (resend) {
      const fromEmail = "Solène Studio <onboarding@resend.dev>";
      let data = await resend.emails.send({
        from: fromEmail,
        to: params.email,
        subject: "Appointment Confirmed | Solène Aesthetic Medicine Studio",
        html,
      });

      if (
        data.error &&
        (data.error.name === "validation_error" ||
          data.error.statusCode === 422 ||
          data.error.statusCode === 403 ||
          data.error.message?.includes("testing"))
      ) {
        const adminRecipient = getAdminRecipient();
        data = await resend.emails.send({
          from: fromEmail,
          to: adminRecipient,
          subject: `[Client Confirmation Copy for ${params.fullName}] Solène Studio`,
          html,
        });
      }

      if (data.error) {
        return { success: false, error: data.error.message };
      }

      return { success: true, data };
    }

    return {
      success: false,
      error: brevoResult?.error || "No email provider available.",
    };
  } catch (err) {
    console.error(`Failed to send customer confirmation email to (${params.email}):`, err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown email error",
    };
  }
}

export async function sendClinicNotificationEmail(
  params: SendClinicNotificationParams
): Promise<EmailResult> {
  const adminRecipient = getAdminRecipient();

  try {
    // Render full staff alert React Email HTML template
    const html = await render(
      React.createElement(ClinicNotificationEmail, params)
    );

    // 1. Try Brevo SDK
    const brevoResult = await sendViaBrevoSDK(
      adminRecipient,
      "Solène Concierge",
      `New Booking Alert: ${params.fullName} - ${params.treatment}`,
      html
    );

    if (brevoResult && brevoResult.success) {
      return brevoResult;
    }

    // 2. Fallback to Resend API
    const resend = getResendClient();
    if (resend) {
      const fromEmail = "Solène Studio <onboarding@resend.dev>";
      const data = await resend.emails.send({
        from: fromEmail,
        to: adminRecipient,
        subject: `New Booking Alert: ${params.fullName} - ${params.treatment}`,
        html,
      });

      if (data.error) {
        return { success: false, error: data.error.message };
      }

      return { success: true, data };
    }

    return {
      success: false,
      error: brevoResult?.error || "No email provider available.",
    };
  } catch (err) {
    console.error(`Failed to send clinic notification email to (${adminRecipient}):`, err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown email error",
    };
  }
}
