import React from "react";
import { Resend } from "resend";
import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import CustomerConfirmationEmail from "@/emails/CustomerConfirmation";
import ClinicNotificationEmail from "@/emails/ClinicNotification";

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  return apiKey ? new Resend(apiKey) : null;
};

const getGmailTransporter = () => {
  const user = process.env.GMAIL_USER || "rameswar.builds@gmail.com";
  const pass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS;

  if (user && pass) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });
  }
  return null;
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
  const gmailTransporter = getGmailTransporter();
  const resend = getResendClient();
  const fromEmail = process.env.FROM_EMAIL || "Solène Studio <rameswar.builds@gmail.com>";

  try {
    const html = await render(
      React.createElement(CustomerConfirmationEmail, params)
    );

    // 1. If Gmail App Password is configured, send via Gmail SMTP directly from rameswar.builds@gmail.com
    if (gmailTransporter) {
      console.log(`[Email Engine] Sending confirmation via Gmail SMTP to ${params.email}...`);
      const info = await gmailTransporter.sendMail({
        from: fromEmail,
        to: params.email,
        subject: "Appointment Confirmed | Solène Aesthetic Medicine Studio",
        html,
      });

      return { success: true, data: info };
    }

    // 2. Otherwise send via Resend API
    if (resend) {
      console.log(`[Email Engine] Sending confirmation via Resend API to ${params.email}...`);
      
      // Resend requires onboarding@resend.dev unless custom domain is verified
      let resendFrom = fromEmail;
      if (resendFrom.includes("@gmail.com")) {
        resendFrom = "Solène Studio <onboarding@resend.dev>";
      }

      let data = await resend.emails.send({
        from: resendFrom,
        to: params.email,
        subject: "Appointment Confirmed | Solène Aesthetic Medicine Studio",
        html,
      });

      // Handle Resend Onboarding restrictions for testing email addresses
      if (
        data.error &&
        (data.error.name === "validation_error" || data.error.statusCode === 422)
      ) {
        const fallbackRecipient = process.env.ADMIN_EMAIL || "rameswar.builds@gmail.com";
        console.warn(
          `[Resend Sandbox] Recipient ${params.email} restricted by Resend. Redirecting luxury test HTML email to ${fallbackRecipient}.`
        );
        data = await resend.emails.send({
          from: resendFrom,
          to: fallbackRecipient,
          subject: `[Client Copy for ${params.fullName}] Appointment Confirmed | Solène Studio`,
          html,
        });
      }

      if (data.error) {
        console.error("[Email Engine] Resend Customer Email Error:", data.error);
        return { success: false, error: data.error.message };
      }

      return { success: true, data };
    }

    console.warn("[Email Engine] No email service configured (missing GMAIL_APP_PASSWORD and RESEND_API_KEY).");
    return { success: false, error: "No email provider available." };
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
  const gmailTransporter = getGmailTransporter();
  const resend = getResendClient();
  const fromEmail = process.env.FROM_EMAIL || "Solène Studio <rameswar.builds@gmail.com>";
  const adminEmail = process.env.ADMIN_EMAIL || "rameswar.builds@gmail.com";

  try {
    const html = await render(
      React.createElement(ClinicNotificationEmail, params)
    );

    // 1. Send via Gmail SMTP if available
    if (gmailTransporter) {
      console.log(`[Email Engine] Sending clinic notification via Gmail SMTP to ${adminEmail}...`);
      const info = await gmailTransporter.sendMail({
        from: fromEmail,
        to: adminEmail,
        subject: `New Booking Alert: ${params.fullName} - ${params.treatment}`,
        html,
      });

      return { success: true, data: info };
    }

    // 2. Send via Resend API
    if (resend) {
      console.log(`[Email Engine] Sending clinic notification via Resend API to ${adminEmail}...`);
      let resendFrom = fromEmail;
      if (resendFrom.includes("@gmail.com")) {
        resendFrom = "Solène Studio <onboarding@resend.dev>";
      }

      const data = await resend.emails.send({
        from: resendFrom,
        to: adminEmail,
        subject: `New Booking Alert: ${params.fullName} - ${params.treatment}`,
        html,
      });

      if (data.error) {
        console.error("[Email Engine] Resend Clinic Email Error:", data.error);
        return { success: false, error: data.error.message };
      }

      return { success: true, data };
    }

    return { success: false, error: "No email provider available." };
  } catch (error) {
    console.error("Failed to send clinic notification email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown email error",
    };
  }
}
