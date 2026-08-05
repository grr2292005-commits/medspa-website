"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { FooterSection } from "@/components/sections/FooterSection";
import drElenaImg from "../../../public/assets/Dr. Elena Vance.png";
import drMarcusImg from "../../../public/assets/Dr. Marcus Sterling.png";
import journalHeroImg from "../../../public/assets/journal_hero.png";
import facialsImg from "../../../public/assets/Facials and Skin.png";
import laserImg from "../../../public/assets/Laser and Light.png";
import heroImg from "../../../public/assets/Home Hero Section.png";

interface Article {
  id: number;
  title: string;
  category: string;
  readTime: string;
  author: string;
  authorImg: StaticImageData;
  date: string;
  excerpt: string;
  content: string[];
  image: StaticImageData;
}

export default function JournalPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: "The Architecture of Natural Facial Rejuvenation: Why Micro-Dosing Wins",
      category: "Aesthetic Science",
      readTime: "6 Min Read",
      author: "Dr. Elena Vance, MD",
      authorImg: drElenaImg,
      date: "August 2026",
      excerpt:
        "Understanding dynamic muscle vector forces and why conservative micro-dosing delivers longer lasting, more natural youthfulness than aggressive volume fill.",
      content: [
        "In modern aesthetic medicine, the goal has evolved from sheer volume replacement to delicate architectural harmonization. When we inject neuromodulators or dermal fillers, we must respect the dynamic muscular vectors that define your natural facial expression.",
        "Micro-dosing involves applying precise, diluted micro-quantities of neuromodulators at strategic dermal insertion points. This relaxes superficial muscle fibers that cause dynamic forehead and peri-orbital etching without impairing deeper motor function.",
        "The result is a face that moves naturally, reflects light evenly, and looks completely rested—never frozen or overfilled."
      ],
      image: facialsImg,
    },
    {
      id: 2,
      title: "Morpheus8 vs Traditional Microneedling: The Cellular Breakdown",
      category: "Dermal Remodeling",
      readTime: "8 Min Read",
      author: "Dr. Marcus Sterling, MD",
      authorImg: drMarcusImg,
      date: "July 2026",
      excerpt:
        "A deep dive into fractional radiofrequency thermal zones, subdermal tissue contraction, and rebuilding type-I collagen fibers safely.",
      content: [
        "While mechanical microneedling creates micro-channels to trigger superficial epidermal renewal, Morpheus8 combines gold-plated insulated microneedles with sub-dermal radiofrequency energy.",
        "By delivering RF energy at depths up to 4mm, Morpheus8 heats the fibroseptal network in the subdermal fat layer. This induces collagen contraction and triggers neo-collagenesis over 3 to 6 months.",
        "Clinical trials show a 40% increase in dermal collagen density post 3 sessions, making it the gold standard for jawline tightening and pore refining without surgical intervention."
      ],
      image: laserImg,
    },
    {
      id: 3,
      title: "Protecting Dermal Barrier Integrity During Laser & Photofacial Therapy",
      category: "Skin Longevity",
      readTime: "5 Min Read",
      author: "Dr. Maya Lin, PA-C",
      authorImg: drElenaImg,
      date: "July 2026",
      excerpt:
        "How ceramide barrier repair protocols combined with low-fluence optical wavelengths prevent post-inflammatory hyperpigmentation.",
      content: [
        "Photofacials and intense pulsed light (IPL) therapies are remarkably effective at destroying sun spots and broken capillaries. However, thermal energy can temporarily disrupt the skin's protective lipid barrier.",
        "Pre-treating the stratum corneum with biomimetic ceramides and bio-fermented lipids fortifies intercellular cement prior to optical exposure. This drastically reduces transepidermal water loss (TEWL) post-procedure.",
        "Pairing high-peak IPL with immediate exosome nanoparticle cooling calms inflammatory cytokines, ensuring rapid 24-hour skin barrier recovery."
      ],
      image: heroImg,
    },
  ];

  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-[100svh] min-h-[720px] max-h-[1080px] bg-[#1F221B] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={journalHeroImg}
            alt="Solène Journal Studio Science"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center pointer-events-none select-none"
            quality={95}
          />
          <div className="absolute inset-0 bg-black/35 pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65 pointer-events-none" aria-hidden="true" />
        </div>

        <Navbar />

        <div className="relative z-30 mx-auto w-full max-w-[1440px] px-[24px] sm:px-[40px] pt-[140px] pb-[80px] flex-1 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[820px] flex flex-col items-center gap-6"
          >
            <span className="block font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-white/80">
              AESTHETIC MEDICINE JOURNAL
            </span>

            <h1 className="font-serif font-normal text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.08] tracking-[-0.01em] text-white drop-shadow-sm">
              Science, Longevity & <br />
              <em className="font-serif italic font-light text-[#EFE3D8]">Bespoke Skincare</em>
            </h1>

            <p className="font-sans font-normal text-[16px] sm:text-[18px] leading-[1.55] tracking-[-0.01em] text-white/90 max-w-[620px] drop-shadow-sm">
              Physician-authored insights into facial anatomy, dermal remodeling, and skin barrier health.
            </p>

            <div className="pt-3">
              <PrimaryButton href="#articles">Read Articles</PrimaryButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-[80px] sm:py-[100px] max-w-[1440px] mx-auto px-[24px] sm:px-[40px]" id="articles">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: article.id * 0.1 }}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-[28px] overflow-hidden shadow-sm border border-[#E8DFD1]/60 flex flex-col justify-between group hover:shadow-md transition-all cursor-pointer"
            >
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1C1C1C] font-sans text-[12px] font-semibold px-3.5 py-1.5 rounded-full">
                  {article.category}
                </span>
              </div>

              <div className="p-8 flex flex-col justify-between flex-1 gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[13px] font-sans text-[#64748b]">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-serif font-medium text-[22px] leading-[1.25] text-[#1C1C1C] group-hover:text-[#3C4233] transition-colors">
                    {article.title}
                  </h2>
                  <p className="font-sans text-[14px] text-[#4A4630] leading-[1.55]">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DFD1]/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-[#E8DFD1]">
                      <Image
                        src={article.authorImg}
                        alt={article.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-sans font-medium text-[13px] text-[#1C1C1C]">
                      {article.author}
                    </span>
                  </div>
                  <span className="font-sans text-[13px] font-medium text-[#3C4233] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Article →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Interactive Full Article Reading Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#FAF7F2] rounded-[32px] max-w-[760px] w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-[#E8DFD1] p-8 sm:p-12 relative"
            >
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-[#E8DFD1] text-[#1C1C1C] flex items-center justify-center text-[18px] hover:bg-[#F5EFE6] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="flex flex-col gap-6">
                <span className="font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-[#64748b]">
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>

                <h2 className="font-serif font-medium text-[32px] sm:text-[40px] leading-[1.15] text-[#1C1C1C]">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-3 pb-4 border-b border-[#E8DFD1]">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#E8DFD1]">
                    <Image
                      src={selectedArticle.authorImg}
                      alt={selectedArticle.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[14px] text-[#1C1C1C]">
                      {selectedArticle.author}
                    </p>
                    <p className="font-sans text-[12px] text-[#64748b]">
                      Published {selectedArticle.date}
                    </p>
                  </div>
                </div>

                <div className="relative h-[300px] w-full rounded-[24px] overflow-hidden my-2">
                  <Image
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-4 font-sans text-[16px] leading-[1.65] text-[#4A4630]">
                  {selectedArticle.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#E8DFD1] flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    className="bg-[#3C4233] text-white px-8 py-3 rounded-full font-sans font-medium text-[15px] hover:bg-[#2D3227] transition-colors cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <FooterSection />
    </main>
  );
}
