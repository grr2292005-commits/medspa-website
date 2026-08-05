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
    services_title: "Enhance Your Natural Radiance and Well Being",
    service_1_title: "Injectables",
    service_1_sub: "Precision sculpting for natural, subtle results",
    service_2_title: "Facials and Skin",
    service_2_sub: "Deep medical hydration for cellular renewal",
    service_3_title: "Laser and Light",
    service_3_sub: "Targeted light therapy for skin clarity",
    service_4_title: "Body and Wellness",
    service_4_sub: "Advanced body contouring and holistic wellness",

    // About
    about_kicker: "THE SOLÈNE DIFFERENCE",
    about_title: "Built on Clinical Integrity, Designed for Calm",

    // Results
    results_kicker: "REAL CLINICAL OUTCOMES",
    results_title: "Undetectable Adjustments, Unmistakable Radiance",

    // Team
    team_kicker: "CLINICAL DIRECTION",
    team_title: "Guided by Board Certified Medical Precision",

    // Footer
    footer_tagline: "Personalized aesthetic studio tailored for you.",
    footer_explore: "Explore",
    footer_services: "Services",
    footer_address: "Address",
    footer_email: "Email",
    footer_newsletter: "Subscribe newsletter",
    footer_sub_text: "Stay updated with the latest news and offers!",
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
    services_title: "Sublimez Votre Éclat Naturel et Votre Bien-être",
    service_1_title: "Injectables",
    service_1_sub: "Sculpture de précision pour des résultats naturels et subtils",
    service_2_title: "Soins du Visage",
    service_2_sub: "Hydratation médicale profonde pour le renouvellement cellulaire",
    service_3_title: "Laser et Lumière",
    service_3_sub: "Thérapie par la lumière ciblée pour la clarté de la peau",
    service_4_title: "Corps et Bien-être",
    service_4_sub: "Remodelage corporel avancé et bien-être holistique",

    // About
    about_kicker: "LA DIFFÉRENCE SOLÈNE",
    about_title: "Fondé sur l'Intégrité Clinique, Conçu pour le Calme",

    // Results
    results_kicker: "RÉSULTATS CLINIQUES RÉELS",
    results_title: "Ajustements Indétectables, Éclat Incomparable",

    // Team
    team_kicker: "DIRECTION CLINIQUE",
    team_title: "Guidé par une Précision Médicale Certifiée",

    // Footer
    footer_tagline: "Studio esthétique personnalisé conçu pour vous.",
    footer_explore: "Explorer",
    footer_services: "Services",
    footer_address: "Adresse",
    footer_email: "E-mail",
    footer_newsletter: "S'abonner à la newsletter",
    footer_sub_text: "Restez informé des dernières nouveautés et offres!",
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
    services_title: "Unterstreichen Sie Ihre Natürliche Ausstrahlung und Ihr Wohlbefinden",
    service_1_title: "Injektionen",
    service_1_sub: "Präzisionsmodellierung für natürliche, dezente Ergebnisse",
    service_2_title: "Gesichtsbehandlungen",
    service_2_sub: "Tiefenwirksame medizinische Hydratation zur Zellerneuerung",
    service_3_title: "Laser & Licht",
    service_3_sub: "Gezielte Lichttherapie für Hautklarheit",
    service_4_title: "Körper & Wellness",
    service_4_sub: "Fortschrittliche Körperkonturierung und ganzheitliche Wellness",

    // About
    about_kicker: "DER SOLÈNE UNTERSCHIED",
    about_title: "Baut auf Klinischer Integrität, Entworfen für Ruhe",

    // Results
    results_kicker: "ECHTE KLINISCHE ERGEBNISSE",
    results_title: "Unauffällige Anpassungen, Unverkennbarer Glanz",

    // Team
    team_kicker: "KLINISCHE LEITUNG",
    team_title: "Geführt mit Fachärztlicher Präzision",

    // Footer
    footer_tagline: "Personalisiertes Ästhetik-Studio maßgeschneidert für Sie.",
    footer_explore: "Entdecken",
    footer_services: "Leistungen",
    footer_address: "Adresse",
    footer_email: "E-Mail",
    footer_newsletter: "Newsletter abonnieren",
    footer_sub_text: "Bleiben Sie über Neuigkeiten und Angebote informiert!",
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
