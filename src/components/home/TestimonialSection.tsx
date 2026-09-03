"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { testimonialSectionData } from "@/data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialSection() {
  const { title, subtitle, quoteIcon, dotPattern, testimonials } = testimonialSectionData;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
      
      {/* Left Side: Dark Green */}
      <div className="w-full lg:w-1/2 bg-[#085A48] p-10 sm:p-12 lg:p-24 flex flex-col justify-center items-center lg:items-end relative min-h-[400px] lg:min-h-full">
        <div className="w-full max-w-lg lg:mr-8 xl:mr-20 z-10 lg:-mt-16">
          <h2 className="text-[40px] md:text-[48px] lg:text-[60px] font-bold text-white leading-[1.1] mb-6 md:mb-8 tracking-tight whitespace-pre-line">
            {title}
          </h2>
          <p className="text-[16px] md:text-[19px] text-white/90 font-medium">
            {subtitle}
          </p>
        </div>
        
        {/* The green dots "M" shape - Hidden on small mobile to prevent clutter */}
        <div className="absolute bottom-10 right-10 lg:bottom-24 lg:right-24 hidden sm:flex flex-col gap-2.5 opacity-90">
          {dotPattern.map((row, rIdx) => (
            <div key={rIdx} className="flex gap-2.5">
              {row.map((isFilled, cIdx) => (
                <div 
                  key={cIdx} 
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isFilled ? "bg-[#BCDD33]" : "bg-transparent"}`} 
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Off-white */}
      <div className="w-full lg:w-1/2 bg-[#FAF8F2] p-10 sm:p-12 lg:p-24 flex flex-col justify-center items-center lg:items-start relative min-h-[500px] lg:min-h-full">
        <div className="w-full max-w-xl lg:ml-8 xl:ml-20">
          
          {/* Top Arrows */}
          <div className="flex items-center gap-6 md:gap-8 mb-10 lg:mb-24">
            <button 
              onClick={handlePrev}
              className="text-gray-400 hover:text-black transition-colors p-2 -ml-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
            </button>
            <button 
              onClick={handleNext}
              className="text-gray-400 hover:text-black transition-colors p-2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
            </button>
          </div>

          {/* Slider Content */}
          <div className="relative h-[420px] sm:h-[350px] md:h-[380px] lg:h-[420px] w-full">
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className={`absolute inset-0 flex flex-col transition-opacity duration-700 ease-in-out ${
                  idx === activeIndex 
                    ? "opacity-100 z-10" 
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img 
                  src={quoteIcon} 
                  alt="Quote" 
                  className="w-8 h-8 md:w-10 md:h-10 mb-6 md:mb-8 opacity-80"
                />
                <blockquote className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-medium text-[#1A1A1A] leading-[1.3] md:leading-[1.2] mb-8 md:mb-12 tracking-tight">
                  {t.quote.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i !== t.quote.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </blockquote>
                
                <div className="flex items-center gap-4 md:gap-5 mt-auto pb-4">
                  <Image
                    src={t.authorImage}
                    alt={t.authorName}
                    width={56}
                    height={56}
                    className="rounded-[12px] md:rounded-[14px] object-cover w-12 h-12 md:w-14 md:h-14"
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-bold text-[#1A1A1A] text-[14px] md:text-[15px]">{t.authorName}</span>
                    <span className="text-gray-500 text-[13px] md:text-[13.5px]">{t.authorTitle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
}
