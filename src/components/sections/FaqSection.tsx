"use client";

import React from "react";
import { MotionAccordion } from "@/components/ui/MotionAccordion";
import { faqItems } from "@/data/faqs";

export function FaqSection() {
  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#0c0d0d] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
            Quick answers before you book a call with Too Good.
          </p>
        </div>
        <MotionAccordion items={faqItems} />
      </div>
    </section>
  );
}
