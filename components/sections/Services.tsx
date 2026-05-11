"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, X, Clock, FileSearch, Hammer, MessageCircle } from "lucide-react";
import {
  services,
  serviceAudience,
  serviceShowcase,
  type Service,
} from "@/lib/constants";

const MAIL_AUDIT =
  "mailto:rushabh.jamdade@mail.ca.in?subject=Excel%20File%20Assessment%20Request&body=Hi%20Rushabh%2C%0A%0AI%27d%20like%20you%20to%20take%20a%20look%20at%20my%20Excel%20file.%20Attaching%20it%20here.%0A%0AWhat%20I%27m%20hoping%20to%20get%20out%20of%20it%3A%0A%0A";
const MAIL_BUILD =
  "mailto:rushabh.jamdade@mail.ca.in?subject=New%20Build%20Enquiry&body=Hi%20Rushabh%2C%0A%0AI%27d%20like%20you%20to%20build%20something%20for%20me.%0A%0AHere%27s%20roughly%20what%20I%20need%3A%0A%0A";
const WHATSAPP_CHAT =
  "https://wa.me/918805155767?text=Hi%20Rushabh%2C%20I%20found%20your%20website%20and%20wanted%20to%20chat.";

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col rounded-[20px] border border-[rgba(255,255,255,0.05)] bg-[rgba(12,12,18,0.5)] p-6 md:p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(255,153,51,0.25)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.5),0_0_60px_rgba(255,153,51,0.08)] h-full"
    >
      {/* Tag */}
      <span className="inline-flex self-start items-center font-mono text-[10px] uppercase tracking-[0.18em] text-[#FF9933] border border-[rgba(255,153,51,0.25)] bg-[rgba(255,153,51,0.06)] rounded-full px-2.5 py-0.5 mb-4">
        {service.tag}
      </span>

      {/* Title */}
      <h3 className="font-display font-black text-[#FAFAFA] tracking-tight leading-[1.05] text-[26px] md:text-[30px]">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-[14px] md:text-[15px] text-[#D4D4D4] leading-relaxed">
        {service.description}
      </p>

      {/* Highlights */}
      <ul className="mt-5 space-y-2">
        {service.highlights.map((h, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[13px] md:text-sm text-[#D4D4D4] leading-relaxed"
          >
            <Check
              size={14}
              strokeWidth={3}
              className="text-[#28CA41] mt-[3px] flex-shrink-0"
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* Spacer */}
      <div className="flex-1 min-h-[14px]" />

      {/* Footer strip — price + timeline */}
      <div className="mt-5 pt-4 border-t border-[rgba(255,255,255,0.06)] flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-[#8A8A9A]">
        <span>
          Starts at{" "}
          <span className="text-[#FF9933] font-semibold">
            {service.startPrice}
          </span>
        </span>
        <span className="text-[#333]">·</span>
        <span className="inline-flex items-center gap-1">
          <Clock size={11} className="text-[#555]" />
          {service.timeline}
        </span>
      </div>
    </motion.div>
  );
}

function BeforeAfter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(12,12,18,0.5)] backdrop-blur-sm p-6 md:p-8"
    >
      <div className="mb-6">
        <h3 className="font-display font-black text-[#FAFAFA] tracking-tight text-[26px] md:text-[32px] leading-[1.05]">
          {serviceShowcase.title}
        </h3>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#8A8A9A]">
          {serviceShowcase.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* BEFORE */}
        <div className="rounded-xl border border-[rgba(255,80,80,0.18)] bg-[rgba(255,80,80,0.03)] p-5">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#FF8080] mb-3">
            <X size={12} strokeWidth={3} />
            Before
          </div>
          <ul className="space-y-2">
            {serviceShowcase.before.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[13px] md:text-sm text-[#D4D4D4] leading-relaxed"
              >
                <X
                  size={14}
                  strokeWidth={3}
                  className="text-[#FF8080] mt-[3px] flex-shrink-0 opacity-80"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AFTER */}
        <div className="rounded-xl border border-[rgba(40,202,65,0.25)] bg-[rgba(40,202,65,0.03)] p-5">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#28CA41] mb-3">
            <Check size={12} strokeWidth={3} />
            After
          </div>
          <ul className="space-y-2">
            {serviceShowcase.after.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[13px] md:text-sm text-[#D4D4D4] leading-relaxed"
              >
                <Check
                  size={14}
                  strokeWidth={3}
                  className="text-[#28CA41] mt-[3px] flex-shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 -right-40 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{ background: "rgba(255,153,51,0.035)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 -left-40 w-[520px] h-[520px] rounded-full blur-3xl"
        style={{ background: "rgba(255,153,51,0.03)" }}
      />

      <div className="relative z-10 max-w-site mx-auto px-6 md:px-12 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 max-w-3xl"
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF9933] mb-3">
            § 02 · Services
          </div>
          <h2 className="font-display font-black text-[#FAFAFA] tracking-[-0.02em] text-[40px] md:text-[56px] lg:text-[64px] leading-[0.95]">
            I&apos;ll build it{" "}
            <span className="text-[#FF9933]">for you.</span>
          </h2>
          <p className="mt-5 text-[16px] md:text-lg text-[#C4C4C4] leading-relaxed">
            Your spreadsheet is your product. I make it bulletproof, intelligent,
            and impossible for your client to ignore.
          </p>
          <p className="mt-3 text-[15px] md:text-base text-[#8A8A9A] leading-relaxed">
            CA firms. Corporates. Startups. If it runs on a spreadsheet or a
            document, I can make it dramatically better.
          </p>
        </motion.div>

        {/* 4 service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Who is this for */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:mt-14"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FF9933] mb-3">
            Who this is for
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-display font-bold text-[16px] md:text-lg text-[#FAFAFA]">
            {serviceAudience.map((item, i) => (
              <span key={item} className="inline-flex items-center gap-3">
                <span>{item}</span>
                {i < serviceAudience.length - 1 && (
                  <span className="text-[#FF9933] text-xl leading-none">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Before / After showcase */}
        <div className="mt-12 md:mt-16">
          <BeforeAfter />
        </div>

        {/* Personal signature block — photo + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16 rounded-2xl border border-[rgba(255,153,51,0.18)] bg-[rgba(12,12,18,0.6)] backdrop-blur-sm p-6 md:p-8"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,153,51,0.04) 0%, transparent 60%)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-7">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-[88px] h-[88px] md:w-[104px] md:h-[104px] rounded-full overflow-hidden border-2 border-[rgba(255,153,51,0.35)] shadow-[0_8px_24px_rgba(255,153,51,0.18)]">
                <Image
                  src="/images/Rushabh-opt.jpg"
                  alt="Rushabh Jamdade"
                  fill
                  sizes="104px"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>

            {/* Copy */}
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF9933] mb-1.5">
                The person doing the work
              </div>
              <p className="text-[15px] md:text-base text-[#FAFAFA] leading-relaxed">
                <span className="font-display font-bold">Hi, I&apos;m Rushabh.</span>{" "}
                <span className="text-[#D4D4D4]">
                  No agency, no juniors, no handoffs. When you send me your
                  file, I&apos;m the one reading every formula and writing the
                  report back to you. That&apos;s the whole pitch.
                </span>
              </p>
            </div>
          </div>

          {/* CTA row inside the block — three intent-based entry points */}
          <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.06)]">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF9933] mb-3">
              How do you want to start?
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Primary — Audit my file */}
              <a
                href={MAIL_AUDIT}
                className="group flex items-center justify-between gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-[#0A0A0F] shadow-lg shadow-[rgba(255,153,51,0.2)] transition-all hover:shadow-[rgba(255,153,51,0.35)] hover:-translate-y-0.5"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #FF9933 0%, #FFB366 50%, #FFD700 100%)",
                }}
              >
                <span className="inline-flex items-center gap-2">
                  <FileSearch size={15} strokeWidth={2.5} />
                  Audit my file
                </span>
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>

              {/* Secondary — Build something new */}
              <a
                href={MAIL_BUILD}
                className="group flex items-center justify-between gap-2 rounded-xl border border-[rgba(255,153,51,0.3)] bg-[rgba(255,153,51,0.05)] px-4 py-3 text-sm font-semibold text-[#FF9933] transition-all hover:bg-[rgba(255,153,51,0.12)] hover:border-[rgba(255,153,51,0.5)]"
              >
                <span className="inline-flex items-center gap-2">
                  <Hammer size={15} strokeWidth={2.5} />
                  Build something new
                </span>
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>

              {/* Tertiary — Chat on WhatsApp */}
              <a
                href={WHATSAPP_CHAT}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-2 rounded-xl border border-[rgba(40,202,65,0.3)] bg-[rgba(40,202,65,0.04)] px-4 py-3 text-sm font-semibold text-[#28CA41] transition-all hover:bg-[rgba(40,202,65,0.1)] hover:border-[rgba(40,202,65,0.5)]"
              >
                <span className="inline-flex items-center gap-2">
                  <MessageCircle size={15} strokeWidth={2.5} />
                  Just want to chat
                </span>
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
            <p className="mt-4 font-mono text-[11px] md:text-[12px] text-[#8A8A9A] leading-relaxed max-w-2xl">
              The quick look is free. I&apos;ll spot 2–3 issues in your file and
              tell you what I&apos;d do. No strings. WhatsApp replies fastest.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
