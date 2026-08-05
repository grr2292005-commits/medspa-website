"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";

export type Language = "EN" | "FR" | "DE";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  EN: {
    // Nav
    nav_about: "About",
    nav_treatments: "Treatments",
    nav_results: "Results",
    nav_journal: "Journal",
    nav_contact: "Contact",
    nav_book: "Book Consultation",

    // Hero
    hero_kicker: "AESTHETIC MEDICINE STUDIO",
    hero_title_1: "Aesthetic Medicine,",
    hero_title_2: "Refined for",
    hero_title_3: "Natural",
    hero_title_4: "Radiance",
    hero_subtitle:
      "Solène pairs board-certified medical expertise with bespoke, non-invasive therapies in a calm studio environment.",
    hero_cta: "Book Consultation",

    // Services
    services_kicker: "OUR SERVICES",
    services_heading_1: "Enhance Your Natural",
    services_heading_2: "Radiance",
    services_heading_3: "and Well Being",
    service_1_title: "Injectables",
    service_1_sub: "Precision sculpting for natural, subtle results",
    service_2_title: "Facials and Skin",
    service_2_sub: "Deep medical hydration for cellular renewal",
    service_3_title: "Laser and Light",
    service_3_sub: "Targeted light therapy for skin clarity",
    service_4_title: "Body and Wellness",
    service_4_sub: "Advanced body contouring and holistic wellness",

    // About Section
    about_kicker: "ABOUT US",
    about_heading_1: "A Studio Designed Around Calm,",
    about_heading_2: "Not Quotes",
    about_diff_title_1: "The",
    about_diff_title_2: "Difference",
    about_diff_desc:
      "Solène was founded to redefine aesthetic medicine. We sit between cold, clinical offices and rushed medspa chains, delivering board certified expertise in an unhurried, sanctuary like environment.",
    about_point_1_title: "Board Certified Care:",
    about_point_1_desc: "Every treatment is administered or directly supervised by licensed medical doctors.",
    about_point_2_title: "Conservative Enhancement:",
    about_point_2_desc: "We specialize in subtle, undetectable adjustments that keep you looking like yourself.",
    about_point_3_title: "Transparent Consultation:",
    about_point_3_desc: "No unexpected fees or aggressive upsells. Every visit begins with upfront pricing.",

    // Origin Story
    origin_kicker: "THE ORIGIN STORY",
    origin_heading_1: "Redefining Aesthetic Care",
    origin_heading_2: "Inside Out.",
    origin_quote_1:
      "“Solène sits between cold, sterile clinical offices and rushed medspa chains. We are an unhurried sanctuary offering bespoke, doctor-led care that values authenticity over aggression.”",
    origin_quote_2:
      "“True aesthetic care should slow down. It should never alter your facial signature, but rather refine the features that make you, you.”",
    origin_author: "Dr. Elena Vance, MD",
    origin_role: "Founder & Lead Medical Director",

    // Results Section
    results_kicker: "CLINICAL OUTCOMES",
    results_heading_1: "Undetectable Adjustments,",
    results_heading_2: "Unmistakable",
    results_heading_3: "Radiance",
    results_cta: "View Full Case Studies",

    // Clinical Direction
    team_kicker: "CLINICAL DIRECTION",
    team_heading: "Guided by Board Certified Precision",
    doc_1_name: "Dr. Elena Vance, MD",
    doc_1_role: "Founder & Lead Medical Director",
    doc_1_quote: "“Aesthetic medicine is an art of restraint. True beauty lives in subtle balance, never over-correction.”",
    doc_2_name: "Dr. Marcus Sterling, MD",
    doc_2_role: "Senior Aesthetic Physician",
    doc_2_quote: "“Precision technology paired with cellular biology yields results that feel entirely natural and lasting.”",

    // Sanctuary Gallery
    gallery_kicker: "THE STUDIO ENVIRONMENT",
    gallery_heading_1: "Designed for Quiet",
    gallery_heading_2: "Refinement",
    gallery_heading_3: "and Privacy",
    gallery_sub: "Private consultation rooms, ambient temperature control, and personalized acoustics.",

    // Booking Form
    booking_title_1: "Begin your",
    booking_title_2: "Transformation",
    booking_sub: "Select your preferred treatment, date, and time. Our concierge team will prepare the rest.",
    booking_name: "Full Name",
    booking_email_label: "Email Address",
    booking_phone: "Phone Number",
    booking_treatment_label: "Treatment Type",
    booking_date: "Date",
    booking_time: "Time",
    booking_btn: "Reserve My Session",
    booking_guarantee: "🔒 Zero-commitment consultation • 100% Doctor-supervised • No pressure selling",
    booking_success_title: "Session Reserved",
    booking_success_desc: "Thank you! Our concierge team will reach out shortly to confirm your appointment details.",
    booking_another: "Book another session",

    // Footer
    footer_tagline: "Personalized aesthetic studio tailored for you.",
    footer_explore: "Explore",
    footer_about: "About us",
    footer_philosophy: "Our Philosophy",
    footer_results_link: "Results Gallery",
    footer_team_link: "Medical Team",
    footer_journal_link: "Journal",
    footer_services: "Services",
    footer_injectables: "Injectables",
    footer_rehab: "Skin Rehab",
    footer_laser: "Laser Therapy",
    footer_collagen: "Collagen",
    footer_address: "Address",
    footer_address_val: "1044 Heritage Way, Suite 200, Beverly Hills, California 90210",
    footer_email: "Email",
    footer_newsletter: "Subscribe newsletter",
    footer_sub_text: "Stay updated with the latest news and offers!",
    footer_rights: "All rights reserved.",
  },
  FR: {
    // Nav
    nav_about: "À propos",
    nav_treatments: "Traitements",
    nav_results: "Résultats",
    nav_journal: "Journal",
    nav_contact: "Contact",
    nav_book: "Réserver une consultation",

    // Hero
    hero_kicker: "STUDIO DE MÉDECINE ESTHÉTIQUE",
    hero_title_1: "Médecine Esthétique,",
    hero_title_2: "Raffinée pour un",
    hero_title_3: "Éclat",
    hero_title_4: "Naturel",
    hero_subtitle:
      "Solène associe une expertise médicale certifiée à des thérapies personnalisées non invasives dans un cadre apaisant.",
    hero_cta: "Réserver une consultation",

    // Services
    services_kicker: "NOS SERVICES",
    services_heading_1: "Sublimez Votre",
    services_heading_2: "Éclat Naturel",
    services_heading_3: "et Votre Bien-être",
    service_1_title: "Injectables",
    service_1_sub: "Sculpture de précision pour des résultats naturels et subtils",
    service_2_title: "Soins du Visage",
    service_2_sub: "Hydratation médicale profonde pour le renouvellement cellulaire",
    service_3_title: "Laser et Lumière",
    service_3_sub: "Thérapie par la lumière ciblée pour la clarté de la peau",
    service_4_title: "Corps et Bien-être",
    service_4_sub: "Remodelage corporel avancé et bien-être holistique",

    // About Section
    about_kicker: "À PROPOS DE NOUS",
    about_heading_1: "Un Studio Conçu pour le Calme,",
    about_heading_2: "Pas pour la Pression",
    about_diff_title_1: "La",
    about_diff_title_2: "Différence",
    about_diff_desc:
      "Solène a été fondée pour redéfinir la médecine esthétique. Nous combinons l'expertise médicale certifiée dans un environnement paisible comme un sanctuaire.",
    about_point_1_title: "Soins Certifiés par des Médecins:",
    about_point_1_desc: "Chaque traitement est administré ou directement supervisé par des médecins diplômés.",
    about_point_2_title: "Amélioration Conservatrice:",
    about_point_2_desc: "Nous sommes spécialisés dans les ajustements subtils et indétectables.",
    about_point_3_title: "Consultation Transparente:",
    about_point_3_desc: "Pas de frais imprévus ni de ventes agressives. Tarifs clairs dès le départ.",

    // Origin Story
    origin_kicker: "L'HISTOIRE DE L'ORIGINE",
    origin_heading_1: "Redéfinir les Soins Esthétiques",
    origin_heading_2: "de l'Intérieur.",
    origin_quote_1:
      "« Solène est un sanctuaire paisible offrant des soins sur mesure dirigés par des médecins qui valorisent l'authenticité. »",
    origin_quote_2:
      "« Les soins esthétiques doivent affiner les traits qui vous rendent unique, sans jamais altérer votre signature faciale. »",
    origin_author: "Dr. Elena Vance, MD",
    origin_role: "Fondatrice et Directrice Médicale",

    // Results Section
    results_kicker: "RÉSULTATS CLINIQUES",
    results_heading_1: "Ajustements Indétectables,",
    results_heading_2: "Éclat",
    results_heading_3: "Incomparable",
    results_cta: "Voir les Études de Cas",

    // Clinical Direction
    team_kicker: "DIRECTION CLINIQUE",
    team_heading: "Guidé par une Précision Médicale Certifiée",
    doc_1_name: "Dr. Elena Vance, MD",
    doc_1_role: "Fondatrice et Directrice Médicale",
    doc_1_quote: "« La médecine esthétique est un art de retenue. La vraie beauté réside dans l'équilibre subtil. »",
    doc_2_name: "Dr. Marcus Sterling, MD",
    doc_2_role: "Médecin Esthétique Senior",
    doc_2_quote: "« Des technologies de précision associées à la biologie cellulaire offrent des résultats durables. »",

    // Sanctuary Gallery
    gallery_kicker: "L'ENVIRONNEMENT DU STUDIO",
    gallery_heading_1: "Conçu pour la Sérénité",
    gallery_heading_2: "le Raffinement",
    gallery_heading_3: "et l'Intimité",
    gallery_sub: "Salons de consultation privés, contrôle de la température et acoustique personnalisée.",

    // Booking Form
    booking_title_1: "Commencez votre",
    booking_title_2: "Transformation",
    booking_sub: "Sélectionnez votre traitement, date et heure souhaités. Notre équipe s'occupe du reste.",
    booking_name: "Nom Complet",
    booking_email_label: "Adresse E-mail",
    booking_phone: "Numéro de Téléphone",
    booking_treatment_label: "Type de Traitement",
    booking_date: "Date",
    booking_time: "Heure",
    booking_btn: "Réserver Ma Session",
    booking_guarantee: "🔒 Consultation sans engagement • 100% supervisée par des médecins",
    booking_success_title: "Session Réservée",
    booking_success_desc: "Merci! Notre équipe vous contactera sous peu pour confirmer votre rendez-vous.",
    booking_another: "Réserver une autre session",

    // Footer
    footer_tagline: "Studio esthétique personnalisé conçu pour vous.",
    footer_explore: "Explorer",
    footer_about: "À propos de nous",
    footer_philosophy: "Notre Philosophie",
    footer_results_link: "Galerie de Résultats",
    footer_team_link: "Équipe Médicale",
    footer_journal_link: "Journal",
    footer_services: "Services",
    footer_injectables: "Injectables",
    footer_rehab: "Soins du Visage",
    footer_laser: "Thérapie Laser",
    footer_collagen: "Collagène",
    footer_address: "Adresse",
    footer_address_val: "1044 Heritage Way, Suite 200, Beverly Hills, Californie 90210",
    footer_email: "E-mail",
    footer_newsletter: "S'abonner à la newsletter",
    footer_sub_text: "Restez informé des dernières nouveautés et offres!",
    footer_rights: "Tous droits réservés.",
  },
  DE: {
    // Nav
    nav_about: "Über uns",
    nav_treatments: "Behandlungen",
    nav_results: "Ergebnisse",
    nav_journal: "Journal",
    nav_contact: "Kontakt",
    nav_book: "Konsultation Buchen",

    // Hero
    hero_kicker: "STUDIO FÜR ÄSTHETISCHE MEDIZIN",
    hero_title_1: "Ästhetische Medizin,",
    hero_title_2: "Veredelt für",
    hero_title_3: "Natürliche",
    hero_title_4: "Ausstrahlung",
    hero_subtitle:
      "Solène kombiniert fachärztliche Expertise mit maßgeschneiderten, nicht-invasiven Therapien in ruhiger Studio-Atmosphäre.",
    hero_cta: "Konsultation Buchen",

    // Services
    services_kicker: "UNSERE LEISTUNGEN",
    services_heading_1: "Unterstreichen Sie Ihre",
    services_heading_2: "Natürliche Ausstrahlung",
    services_heading_3: "und Ihr Wohlbefinden",
    service_1_title: "Injektionen",
    service_1_sub: "Präzisionsmodellierung für natürliche, dezente Ergebnisse",
    service_2_title: "Gesichtsbehandlungen",
    service_2_sub: "Tiefenwirksame medizinische Hydratation zur Zellerneuerung",
    service_3_title: "Laser & Licht",
    service_3_sub: "Gezielte Lichttherapie für Hautklarheit",
    service_4_title: "Körper & Wellness",
    service_4_sub: "Fortschrittliche Körperkonturierung und ganzheitliche Wellness",

    // About Section
    about_kicker: "ÜBER UNS",
    about_heading_1: "Ein Studio Entworfen für Ruhe,",
    about_heading_2: "Nicht für Verkaufsdruck",
    about_diff_title_1: "Der",
    about_diff_title_2: "Unterschied",
    about_diff_desc:
      "Solène wurde gegründet, um ästhetische Medizin neu zu definieren. Wir bieten fachärztliche Expertise in einer ruhigen Atmosphäre.",
    about_point_1_title: "Fachärztliche Betreuung:",
    about_point_1_desc: "Jede Behandlung wird von zugelassenen Ärzten durchgeführt oder direkt beaufsichtigt.",
    about_point_2_title: "Dezente Optimierung:",
    about_point_2_desc: "Wir sind auf subtile Anpassungen spezialisiert, die Ihre natürliche Ausstrahlung bewahren.",
    about_point_3_title: "Transparente Beratung:",
    about_point_3_desc: "Keine versteckten Gebühren. Jede Behandlung beginnt mit transparenter Preisgestaltung.",

    // Origin Story
    origin_kicker: "DIE ENTSTEHUNGSGESCHICHTE",
    origin_heading_1: "Ästhetische Medizin Neu Denken",
    origin_heading_2: "von Innen Heraus.",
    origin_quote_1:
      "„Solène ist ein ruhiges Refugium für ärztlich geleitete Behandlungen, die Authentizität schätzen.“",
    origin_quote_2:
      "„Ästhetische Medizin sollte Ihre individuellen Merkmale verfeinern, ohne jemals Ihr Gesicht zu verändern.“",
    origin_author: "Dr. Elena Vance, MD",
    origin_role: "Gründerin & Ärztliche Leiterin",

    // Results Section
    results_kicker: "KLINISCHE ERGEBNISSE",
    results_heading_1: "Dezente Anpassungen,",
    results_heading_2: "Unverkennbare",
    results_heading_3: "Ausstrahlung",
    results_cta: "Alle Fallstudien Ansehen",

    // Clinical Direction
    team_kicker: "KLINISCHE LEITUNG",
    team_heading: "Geführt mit Fachärztlicher Präzision",
    doc_1_name: "Dr. Elena Vance, MD",
    doc_1_role: "Gründerin & Ärztliche Leiterin",
    doc_1_quote: "„Ästhetische Medizin ist die Kunst der Zurückhaltung. Wahre Schönheit liegt in natürlicher Balance.“",
    doc_2_name: "Dr. Marcus Sterling, MD",
    doc_2_role: "Senior Ästhetik-Arzt",
    doc_2_quote: "„Präzisionstechnologie kombiniert mit Zellbiologie liefert dauerhafte, natürliche Ergebnisse.“",

    // Sanctuary Gallery
    gallery_kicker: "DIE STUDIO ATMOSPHÄRE",
    gallery_heading_1: "Entworfen für Stille",
    gallery_heading_2: "Eleganz",
    gallery_heading_3: "und Privatsphäre",
    gallery_sub: "Private Beratungsräume, individuelle Temperaturregelung und ruhige Akustik.",

    // Booking Form
    booking_title_1: "Beginnen Sie Ihre",
    booking_title_2: "Transformation",
    booking_sub: "Wählen Sie Ihre gewünschte Behandlung, Datum und Uhrzeit. Unser Team bereitet alles vor.",
    booking_name: "Vollständiger Name",
    booking_email_label: "E-Mail-Adresse",
    booking_phone: "Telefonnummer",
    booking_treatment_label: "Behandlungsart",
    booking_date: "Datum",
    booking_time: "Uhrzeit",
    booking_btn: "Termin Reservieren",
    booking_guarantee: "🔒 Unverbindliche Beratung • 100% ärztlich betreut",
    booking_success_title: "Termin Reserviert",
    booking_success_desc: "Vielen Dank! Unser Team wird sich in Kürze zur Bestätigung bei Ihnen melden.",
    booking_another: "Weitere Beratung buchen",

    // Footer
    footer_tagline: "Personalisiertes Ästhetik-Studio maßgeschneidert für Sie.",
    footer_explore: "Entdecken",
    footer_about: "Über uns",
    footer_philosophy: "Unsere Philosophie",
    footer_results_link: "Ergebnisgalerie",
    footer_team_link: "Ärzteteam",
    footer_journal_link: "Journal",
    footer_services: "Leistungen",
    footer_injectables: "Injektionen",
    footer_rehab: "Hautpflege",
    footer_laser: "Lasertherapie",
    footer_collagen: "Kollagen",
    footer_address: "Adresse",
    footer_address_val: "1044 Heritage Way, Suite 200, Beverly Hills, Kalifornien 90210",
    footer_email: "E-Mail",
    footer_newsletter: "Newsletter abonnieren",
    footer_sub_text: "Bleiben Sie über Neuigkeiten und Angebote informiert!",
    footer_rights: "Alle Rechte vorbehalten.",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "EN",
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("EN");

  useEffect(() => {
    const saved = localStorage.getItem("solene_lang") as Language;
    if (saved && (saved === "EN" || saved === "FR" || saved === "DE")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("solene_lang", lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return TRANSLATIONS[language]?.[key] || TRANSLATIONS["EN"][key] || key;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, setLanguage, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
