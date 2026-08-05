import React from "react";

const CLINIC_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://solenestudio.com/#clinic",
  name: "Solène Aesthetic Medicine Studio",
  legalName: "Solène Studio Beverly Hills Inc.",
  url: "https://solenestudio.com",
  logo: "https://solenestudio.com/assets/svg/ic_our_logo.svg",
  image: "https://solenestudio.com/assets/Home%20Hero%20Section.png",
  description:
    "Solène pairs board-certified medical expertise with bespoke, non-invasive therapies in a calm studio environment.",
  telephone: "+13105550192",
  email: "concierge@solenestudio.com",
  priceRange: "$$$",
  medicalSpecialty: [
    "Dermatology",
    "Aesthetic Medicine",
    "Facial Architecture",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1044 Heritage Way, Suite 200",
    addressLocality: "Beverly Hills",
    addressRegion: "CA",
    postalCode: "90210",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0736,
    longitude: -118.4004,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  sameAs: ["https://instagram.com", "https://facebook.com", "https://x.com"],
} as const;

const PHYSICIAN_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://solenestudio.com/#dr-vance",
      name: "Dr. Elena Vance, MD",
      jobTitle: "Founder and Lead Medical Director",
      worksFor: { "@id": "https://solenestudio.com/#clinic" },
      medicalSpecialty: "Aesthetic Dermatology",
      description:
        "Specializing in facial architecture and conservative rejuvenation.",
    },
    {
      "@type": "Physician",
      "@id": "https://solenestudio.com/#dr-sterling",
      name: "Dr. Marcus Sterling, MD",
      jobTitle: "Laser & Cellular Rejuvenation Specialist",
      worksFor: { "@id": "https://solenestudio.com/#clinic" },
      medicalSpecialty: "Laser & Energy Therapies",
      description:
        "Expert in fractional radiofrequency and dermal remodeling.",
    },
  ],
} as const;

function safeJsonStringify(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export const MedicalClinicJsonLd: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(CLINIC_SCHEMA) }}
    />
  );
};

export const PhysicianJsonLd: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(PHYSICIAN_SCHEMA) }}
    />
  );
};

export interface MedicalProcedureJsonLdProps {
  name: string;
  description: string;
  bodyLocation: string;
  procedureType: string;
}

export const MedicalProcedureJsonLd: React.FC<MedicalProcedureJsonLdProps> = ({
  name,
  description,
  bodyLocation,
  procedureType,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    bodyLocation,
    procedureType,
    relevantSpecialty: "Aesthetic Medicine",
    howPerformed: "Doctor-administered non-invasive medical therapy.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(schema) }}
    />
  );
};

export interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[];
}

export const BreadcrumbJsonLd: React.FC<BreadcrumbJsonLdProps> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://solenestudio.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(schema) }}
    />
  );
};
