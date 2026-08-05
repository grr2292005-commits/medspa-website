import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Link,
} from "@react-email/components";

interface ClinicNotificationEmailProps {
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

export const ClinicNotificationEmail: React.FC<ClinicNotificationEmailProps> = ({
  appointmentId = "APP-1001",
  fullName = "Jane Doe",
  email = "jane.doe@example.com",
  phone = "+1 (310) 555-0192",
  treatment = "Injectables & Sculpting",
  date = "2026-08-15",
  time = "10:00 AM",
  message = "Interested in subtle lip architecture and collagen remodeling consultation.",
  submittedAt = new Date().toISOString(),
}) => {
  return (
    <Html lang="en">
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Section style={headerStyle}>
            <Text style={badgeStyle}>NEW APPOINTMENT RESERVATION</Text>
            <Heading style={headingStyle}>Solène Clinic Alert</Heading>
            <Text style={subHeaderStyle}>ID: {appointmentId}</Text>
          </Section>

          <Hr style={dividerStyle} />

          {/* Client & Booking Summary Card */}
          <Section style={cardStyle}>
            <Text style={cardTitleStyle}>CLIENT INFORMATION</Text>

            <Text style={rowStyle}>
              <strong>Full Name:</strong> {fullName}
            </Text>
            <Text style={rowStyle}>
              <strong>Email Address:</strong> <Link href={`mailto:${email}`} style={linkStyle}>{email}</Link>
            </Text>
            <Text style={rowStyle}>
              <strong>Phone Number:</strong> {phone ? <Link href={`tel:${phone}`} style={linkStyle}>{phone}</Link> : "Not Provided"}
            </Text>
          </Section>

          <Section style={cardStyle}>
            <Text style={cardTitleStyle}>RESERVATION DETAILS</Text>

            <Text style={rowStyle}>
              <strong>Requested Treatment:</strong> {treatment}
            </Text>
            <Text style={rowStyle}>
              <strong>Requested Date:</strong> {date}
            </Text>
            <Text style={rowStyle}>
              <strong>Requested Time:</strong> {time}
            </Text>
            <Text style={rowStyle}>
              <strong>Submission Time:</strong> {submittedAt}
            </Text>
          </Section>

          {message && (
            <Section style={notesCardStyle}>
              <Text style={cardTitleStyle}>CLIENT NOTES & SPECIAL REQUESTS</Text>
              <Text style={notesTextStyle}>{message}</Text>
            </Section>
          )}

          <Hr style={dividerStyle} />

          {/* Action Reminder for Staff */}
          <Section style={actionBoxStyle}>
            <Text style={actionTextStyle}>
              ⚡ <strong>Staff Action Required:</strong> Please verify calendar availability and contact the client via telephone or email to confirm their appointment slot.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              Solène Aesthetic Medicine Concierge Notification System
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ClinicNotificationEmail;

// Staff Email Styling Tokens
const mainStyle = {
  backgroundColor: "#F4F5F7",
  fontFamily: '"Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  margin: "0 auto",
  padding: "32px 0",
};

const containerStyle = {
  backgroundColor: "#FFFFFF",
  border: "1px solid #D5CDC1",
  borderRadius: "12px",
  margin: "0 auto",
  maxWidth: "580px",
  padding: "36px 32px",
};

const headerStyle = {
  textAlign: "center" as const,
  marginBottom: "16px",
};

const badgeStyle = {
  backgroundColor: "#3C4233",
  color: "#FFFFFF",
  display: "inline-block",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "1.2px",
  padding: "4px 12px",
  borderRadius: "20px",
  margin: "0 0 12px 0",
};

const headingStyle = {
  color: "#1C1C1C",
  fontSize: "24px",
  fontWeight: "600",
  margin: "0 0 4px 0",
};

const subHeaderStyle = {
  color: "#526071",
  fontSize: "13px",
  margin: "0",
};

const dividerStyle = {
  borderColor: "#E8DFD1",
  margin: "20px 0",
};

const cardStyle = {
  backgroundColor: "#FAF7F2",
  border: "1px solid #E8DFD1",
  borderRadius: "8px",
  padding: "16px 20px",
  margin: "14px 0",
};

const notesCardStyle = {
  backgroundColor: "#FFFBEB",
  border: "1px solid #FCD34D",
  borderRadius: "8px",
  padding: "16px 20px",
  margin: "14px 0",
};

const cardTitleStyle = {
  color: "#3C4233",
  fontSize: "11px",
  fontWeight: "700",
  letterSpacing: "1px",
  margin: "0 0 10px 0",
};

const rowStyle = {
  color: "#1C1C1C",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "4px 0",
};

const notesTextStyle = {
  color: "#78350F",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "0",
  fontStyle: "italic",
};

const linkStyle = {
  color: "#2563EB",
  textDecoration: "underline",
};

const actionBoxStyle = {
  backgroundColor: "#EFF6FF",
  borderLeft: "4px solid #2563EB",
  borderRadius: "4px",
  padding: "14px 16px",
  margin: "20px 0",
};

const actionTextStyle = {
  color: "#1E40AF",
  fontSize: "13px",
  lineHeight: "1.5",
  margin: "0",
};

const footerStyle = {
  textAlign: "center" as const,
  paddingTop: "12px",
};

const footerTextStyle = {
  color: "#526071",
  fontSize: "12px",
  margin: "0",
};
