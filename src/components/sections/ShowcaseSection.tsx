"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { showcaseCategories } from "@/data/showcase";

function CategoryPillScroller({ children }: { children: React.ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 2);
    setCanRight(max > 2 && el.scrollLeft < max - 2);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    if (el.firstElementChild) observer.observe(el.firstElementChild);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(160, el.clientWidth * 0.65), behavior: "smooth" });
  };

  const arrowClass =
    "absolute top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#18191c] text-white shadow-lg transition-opacity hover:bg-white/15 disabled:pointer-events-none disabled:opacity-30";

  return (
    <div className="relative">
      {canLeft && (
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0e0f12] to-transparent" />
      )}
      {canRight && (
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0e0f12] to-transparent" />
      )}

      <button
        type="button"
        aria-label="Scroll categories left"
        disabled={!canLeft}
        onClick={() => scrollByDir(-1)}
        className={`${arrowClass} left-0`}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Scroll categories right"
        disabled={!canRight}
        onClick={() => scrollByDir(1)}
        className={`${arrowClass} right-0`}
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div
        ref={scrollerRef}
        className="overflow-x-auto no-scrollbar px-9 py-0.5 [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className="flex w-max flex-nowrap gap-2">{children}</div>
      </div>
    </div>
  );
}

export function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState(showcaseCategories[0].id);

  const activeCategory =
    showcaseCategories.find((cat) => cat.id === activeTab) || showcaseCategories[0];

  return (
    <section id="sub-menu-build" className="relative z-10 py-12 sm:py-16 bg-transparent text-white px-4 sm:px-6 lg:px-8 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Main Card Container */}
        <div className="bg-[#0e0f12] border border-white/10 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Category Pills, Title, Description, Button */}
            <div className="lg:col-span-5 min-w-0 flex flex-col justify-between space-y-8">
              {/* Category Pills Header */}
              <CategoryPillScroller>
                {showcaseCategories.map((cat) => {
                  const isActive = activeTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#000000] text-white border border-white/20 shadow-md"
                          : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                      }`}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </CategoryPillScroller>

              {/* Dynamic Content Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    {activeCategory.title}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                    {activeCategory.description}
                  </p>
                  <div className="pt-2">
                    <CtaButton>Discover more</CtaButton>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Purple Frame with Browser Mockup & Floating Prompt Popup */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-gradient-to-br from-[#7b46f6] via-[#673de6] to-[#431bb5] rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 lg:p-8 overflow-hidden shadow-2xl border border-white/10"
                >
                  <div className="bg-[#121316] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <div className="bg-[#18191c] px-4 py-2.5 border-b border-white/5 flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                      </div>
                      <div className="bg-[#0c0d0d] px-4 py-1 rounded-md text-[10px] text-gray-400 font-mono flex items-center gap-2">
                        <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>https://toogood.app</span>
                      </div>
                    </div>

                    <div className="relative aspect-[16/10] w-full bg-[#0c0d0d]">
                      <Image
                        src={activeCategory.imageSrc}
                        alt={activeCategory.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-[#18191c]/95 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl text-xs text-white max-w-xs sm:max-w-sm space-y-3 z-10">
                    <p className="text-gray-200 text-xs sm:text-sm font-normal leading-snug">
                      Create a minimal portfolio website. Include a homepage, projects section, and contact info.
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z" />
                        </svg>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
