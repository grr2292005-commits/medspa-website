import React from "react";
import { Resend } from "resend";
import { render } from "@react-email/components";
import CustomerConfirmationEmail from "@/emails/CustomerConfirmation";
import ClinicNotificationEmail from "@/emails/ClinicNotification";

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  return apiKey ? new Resend(apiKey) : null;
};

const getBrevoKey = () => {
  return process.env.BREVO_API_KEY;
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

async function sendViaBrevo(
  toEmail: string,
  toName: string,
  subject: string,
  htmlContent: string
) {
  const brevoKey = getBrevoKey();
  if (!brevoKey) return null;

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": brevoKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => null);
      console.warn("[Brevo API Delivery Issue]", errData);
      return {
        success: false,
        error: errData?.message || `Brevo delivery failed (${res.status})`,
      };
    }

    const data = await res.json();
    return { success: true, data };
  } catch (err) {
    console.error("[Brevo Exception]", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Brevo error",
    };
  }
}

export async function sendCustomerConfirmationEmail(
  params: SendCustomerConfirmationParams
) {
  try {
    // Render full luxury React Email HTML template
    const html = await render(
      React.createElement(CustomerConfirmationEmail, params)
    );

    // 1. Try Brevo API (Allows sending to ANY customer email worldwide)
    const brevoResult = await sendViaBrevo(
      params.email,
      params.fullName,
      "Appointment Confirmed | Solène Aesthetic Medicine Studio",
      html
    );

    if (brevoResult && brevoResult.success) {
      console.log(`[Email Engine] Customer confirmation sent via Brevo to ${params.email}`);
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
  } catch (error) {
    console.error(`Failed to send customer confirmation email to (${params.email}):`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown email error",
    };
  }
}

export async function sendClinicNotificationEmail(
  params: SendClinicNotificationParams
) {
  const adminRecipient = getAdminRecipient();

  try {
    // Render full staff alert React Email HTML template
    const html = await render(
      React.createElement(ClinicNotificationEmail, params)
    );

    // 1. Try Brevo API
    const brevoResult = await sendViaBrevo(
      adminRecipient,
      "Solène Concierge",
      `New Booking Alert: ${params.fullName} - ${params.treatment}`,
      html
    );

    if (brevoResult && brevoResult.success) {
      console.log(`[Email Engine] Clinic notification sent via Brevo to ${adminRecipient}`);
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
  } catch (error) {
    console.error(`Failed to send clinic notification email to (${adminRecipient}):`, error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown email error",
    };
  }
}
