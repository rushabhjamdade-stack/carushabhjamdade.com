"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";

export default function BookACall() {
  return (
    <SectionWrapper id="booking">
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3 text-center">
        Let&apos;s talk
      </h2>
      <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
        Whether you need a valuation, want to explore AI for your firm, or just
        want to geek out about tech — pick a time.
      </p>

      <div className="flex justify-center">
        <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl shadow-card overflow-hidden">
          {/* Calendly Inline Embed */}
          <iframe
            src="https://calendly.com/rushabh-jamdade-mail/30min"
            width="100%"
            height="700"
            frameBorder="0"
            title="Schedule a call with Rushabh"
            className="w-full"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
