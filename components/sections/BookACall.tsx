"use client";

import SectionWrapper from "@/components/shared/SectionWrapper";
import { Calendar, MessageSquare, Lightbulb, Mic, Clock } from "lucide-react";

const topics = [
  {
    icon: Lightbulb,
    text: "AI strategy for your CA practice",
  },
  {
    icon: MessageSquare,
    text: "Product collaboration opportunities",
  },
  {
    icon: Calendar,
    text: "Startup valuation consultation",
  },
  {
    icon: Mic,
    text: "Speaking & podcast invitations",
  },
];

export default function BookACall() {
  return (
    <SectionWrapper id="booking">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3 text-center">
        Let&apos;s talk
      </h2>
      <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
        Whether you need a valuation, want to explore AI for your firm, or just
        want to geek out about tech — pick a time.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left — context */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-lg font-semibold text-navy mb-4">
            What we can discuss
          </h3>
          {topics.map((topic) => (
            <div
              key={topic.text}
              className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center flex-shrink-0">
                <topic.icon className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="text-sm text-gray-600">{topic.text}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-sm text-gray-400 mt-4 pl-1">
            <Clock size={14} />
            Usually responds within 24 hours
          </div>
        </div>

        {/* Right — Calendly */}
        <div className="lg:col-span-3">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <iframe
              src="https://calendly.com/rushabh-jamdade-mail/30min"
              width="100%"
              height="650"
              frameBorder="0"
              title="Schedule a call with Rushabh"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
