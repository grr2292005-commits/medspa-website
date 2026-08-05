import React from "react";

function safeJsonStringify(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

/* ==========================================================================
   1. Organization & MedicalClinic & LocalBusiness & ContactPoint JSON-LD
   ========================================================================== */
const CLINIC_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "LocalBusiness", "HealthAndBeautyBusiness"],
      "@id": "https://solenestudio.com/#clinic",
      name: "Solène Aesthetic Medicine Studio",
      legalName: "Solène Studio Beverly Hills Inc.",
      url: "https://solenestudio.com",
      logo: {
        "@type": "ImageObject",
        url: "https://solenestudio.com/assets/svg/ic_our_logo.svg",
        width: 112,
        height: 176,
      },
      image: "https://solenestudio.com/assets/Home%20Hero%20Section.png",
      description:
        "Solène pairs board-certified medical expertise with bespoke, non-invasive therapies in a calm Beverly Hills studio environment.",
      telephone: "+13105550192",
      email: "concierge@solenestudio.com",
      priceRange: "$$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Credit Card, Cash, Financing",
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
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+13105550192",
        contactType: "customer service",
        email: "concierge@solenestudio.com",
        availableLanguage: ["English"],
        areaServed: "Beverly Hills, CA",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "128",
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [
        "https://instagram.com",
        "https://facebook.com",
        "https://x.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://solenestudio.com/#website",
      url: "https://solenestudio.com",
      name: "Solène Aesthetic Medicine Studio",
      publisher: { "@id": "https://solenestudio.com/#clinic" },
      inLanguage: "en-US",
    },
  ],
} as const;

export const MedicalClinicJsonLd: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(CLINIC_SCHEMA) }}
    />
  );
};

/* ==========================================================================
   2. WebPage JSON-LD Component
   ========================================================================== */
export interface WebPageJsonLdProps {
  name: string;
  description: string;
  url: string;
}

export const WebPageJsonLd: React.FC<WebPageJsonLdProps> = ({
  name,
  description,
  url,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://solenestudio.com${url}#webpage`,
    url: `https://solenestudio.com${url}`,
    name,
    description,
    isPartOf: { "@id": "https://solenestudio.com/#website" },
    about: { "@id": "https://solenestudio.com/#clinic" },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(schema) }}
    />
  );
};

/* ==========================================================================
   3. Physician & Medical Team JSON-LD
   ========================================================================== */
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
        "Board-certified physician specializing in natural facial architecture and conservative rejuvenation.",
      knowsAbout: [
        "Facial Architecture",
        "Micro-Dosed Neuromodulators",
        "Collagen Remodeling",
      ],
    },
    {
      "@type": "Physician",
      "@id": "https://solenestudio.com/#dr-sterling",
      name: "Dr. Marcus Sterling, MD",
      jobTitle: "Laser & Cellular Rejuvenation Specialist",
      worksFor: { "@id": "https://solenestudio.com/#clinic" },
      medicalSpecialty: "Laser & Energy Therapies",
      description:
        "Board-certified physician expert in fractional radiofrequency and dermal remodeling.",
      knowsAbout: [
        "Morpheus8 RF Microneedling",
        "IPL Photofacials",
        "Subdermal Remodeling",
      ],
    },
  ],
} as const;

export const PhysicianJsonLd: React.FC = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(PHYSICIAN_SCHEMA) }}
    />
  );
};

/* ==========================================================================
   4. MedicalProcedure & Service JSON-LD
   ========================================================================== */
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
    "@graph": [
      {
        "@type": "MedicalProcedure",
        name,
        description,
        bodyLocation,
        procedureType,
        relevantSpecialty: "Aesthetic Medicine",
        howPerformed: "Doctor-administered non-invasive medical therapy.",
        performer: { "@id": "https://solenestudio.com/#clinic" },
      },
      {
        "@type": "Service",
        name,
        description,
        provider: { "@id": "https://solenestudio.com/#clinic" },
        areaServed: "Beverly Hills, CA",
        serviceType: "Aesthetic Medical Therapy",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(schema) }}
    />
  );
};

/* ==========================================================================
   5. BreadcrumbList JSON-LD Component
   ========================================================================== */
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

/* ==========================================================================
   6. FAQPage JSON-LD Component
   ========================================================================== */
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQPageJsonLdProps {
  mainEntity: FAQItem[];
}

export const FAQPageJsonLd: React.FC<FAQPageJsonLdProps> = ({ mainEntity }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mainEntity.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(schema) }}
    />
  );
};

/* ==========================================================================
   7. Review & Testimonials JSON-LD Component
   ========================================================================== */
export interface ReviewItem {
  author: string;
  reviewBody: string;
  ratingValue: number;
}

export interface ReviewJsonLdProps {
  reviews: ReviewItem[];
}

export const ReviewJsonLd: React.FC<ReviewJsonLdProps> = ({ reviews }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://solenestudio.com/#clinic",
    name: "Solène Aesthetic Medicine Studio",
    review: reviews.map((rev) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: rev.author,
      },
      reviewBody: rev.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: rev.ratingValue,
        bestRating: 5,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(schema) }}
    />
  );
};
