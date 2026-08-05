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

interface CustomerConfirmationEmailProps {
  fullName: string;
  treatment: string;
  date: string;
  time: string;
  email: string;
  phone?: string;
}

export const CustomerConfirmationEmail: React.FC<CustomerConfirmationEmailProps> = ({
  fullName = "Valued Client",
  treatment = "Consultation & Procedure",
  date = "2026-08-15",
  time = "10:00 AM",
  phone = "+1 (310) 555-0192",
}) => {
  return (
    <Html lang="en">
      <Head />
      <Body style={mainStyle}>
        <Container style={containerStyle}>
          {/* Header Branding */}
          <Section style={headerStyle}>
            <Text style={logoText}>Solène</Text>
            <Text style={subHeaderStyle}>AESTHETIC MEDICINE STUDIO • BEVERLY HILLS</Text>
          </Section>

          <Hr style={dividerStyle} />

          {/* Main Body Content */}
          <Section style={contentStyle}>
            <Heading style={headingStyle}>Your Consultation is Confirmed</Heading>

            <Text style={paragraphStyle}>
              Dear {fullName},
            </Text>

            <Text style={paragraphStyle}>
              Thank you for reserving your session with Solène Aesthetic Medicine Studio. Our board-certified clinical team is looking forward to welcoming you to our Beverly Hills sanctuary.
            </Text>

            {/* Appointment Details Box */}
            <Section style={detailsBoxStyle}>
              <Text style={boxTitleStyle}>APPOINTMENT DETAILS</Text>

              <Text style={detailRowStyle}>
                <strong>Client Name:</strong> {fullName}
              </Text>
              <Text style={detailRowStyle}>
                <strong>Treatment:</strong> {treatment}
              </Text>
              <Text style={detailRowStyle}>
                <strong>Date:</strong> {date}
              </Text>
              <Text style={detailRowStyle}>
                <strong>Time:</strong> {time}
              </Text>

              {phone && (
                <Text style={detailRowStyle}>
                  <strong>Contact Phone:</strong> {phone}
                </Text>
              )}
            </Section>

            {/* Location & Guidelines */}
            <Section style={infoBoxStyle}>
              <Text style={infoTitleStyle}>STUDIO LOCATION & ARRIVAL</Text>
              <Text style={infoTextStyle}>
                📍 1044 Heritage Way, Suite 200, Beverly Hills, CA 90210
              </Text>
              <Text style={infoTextStyle}>
                📞 Concierge Line: <Link href="tel:+13105550192" style={linkStyle}>+1 (310) 555-0192</Link>
              </Text>
              <Text style={infoTextStyle}>
                ⏱ Please arrive 10 minutes prior to your scheduled time to enjoy our quiet tea lounge and complete your personalized health intake.
              </Text>
            </Section>

            <Text style={paragraphStyle}>
              If you need to reschedule or have any specific pre-procedure questions, please reach out to our concierge team at <Link href="mailto:concierge@solenestudio.com" style={linkStyle}>concierge@solenestudio.com</Link>.
            </Text>
          </Section>

          <Hr style={dividerStyle} />

          {/* Footer */}
          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              © {new Date().getFullYear()} Solène Aesthetic Medicine Studio. All rights reserved.
            </Text>
            <Text style={footerAddressStyle}>
              1044 Heritage Way, Suite 200, Beverly Hills, California 90210
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default CustomerConfirmationEmail;

// Luxury Styling Tokens
const mainStyle = {
  backgroundColor: "#FAF7F2",
  fontFamily: '"Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  margin: "0 auto",
  padding: "40px 0",
};

const containerStyle = {
  backgroundColor: "#FFFFFF",
  border: "1px solid #E8DFD1",
  borderRadius: "16px",
  margin: "0 auto",
  maxWidth: "580px",
  padding: "40px 32px",
};

const headerStyle = {
  textAlign: "center" as const,
  marginBottom: "24px",
};

const logoText = {
  color: "#1C1C1C",
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: "32px",
  fontWeight: "600",
  letterSpacing: "-0.5px",
  margin: "0 0 4px 0",
};

const subHeaderStyle = {
  color: "#526071",
  fontSize: "11px",
  fontWeight: "600",
  letterSpacing: "1.5px",
  margin: "0",
};

const dividerStyle = {
  borderColor: "#E8DFD1",
  margin: "24px 0",
};

const contentStyle = {
  padding: "0",
};

const headingStyle = {
  color: "#1C1C1C",
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontSize: "24px",
  fontWeight: "500",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
};

const paragraphStyle = {
  color: "#4A4630",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 16px 0",
};

const detailsBoxStyle = {
  backgroundColor: "#F5EFE6",
  border: "1px solid #E8DFD1",
  borderRadius: "12px",
  padding: "20px 24px",
  margin: "24px 0",
};

const boxTitleStyle = {
  color: "#3C4233",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "1px",
  margin: "0 0 12px 0",
};

const detailRowStyle = {
  color: "#1C1C1C",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "4px 0",
};

const infoBoxStyle = {
  backgroundColor: "#FAF7F2",
  borderLeft: "4px solid #3C4233",
  borderRadius: "4px",
  padding: "16px 20px",
  margin: "24px 0",
};

const infoTitleStyle = {
  color: "#1C1C1C",
  fontSize: "12px",
  fontWeight: "700",
  letterSpacing: "1px",
  margin: "0 0 8px 0",
};

const infoTextStyle = {
  color: "#4A4630",
  fontSize: "13px",
  lineHeight: "1.5",
  margin: "4px 0",
};

const linkStyle = {
  color: "#3C4233",
  textDecoration: "underline",
};

const footerStyle = {
  textAlign: "center" as const,
  paddingTop: "12px",
};

const footerTextStyle = {
  color: "#526071",
  fontSize: "12px",
  margin: "0 0 4px 0",
};

const footerAddressStyle = {
  color: "#64748b",
  fontSize: "11px",
  margin: "0",
};
