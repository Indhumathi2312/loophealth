"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviewRow1, reviewRow2, ExactReviewItem } from "@/data/reviews";

function ReviewCard({
  review,
  className = "",
}: {
  review: ExactReviewItem;
  className?: string;
}) {
  return (
    <article
      className={`bg-[#18191c] border border-white/10 rounded-[28px] p-7 sm:p-8 lg:p-9 shadow-xl text-left flex flex-col justify-between gap-6 min-h-[280px] sm:min-h-[320px] ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border border-white/10 bg-gray-800">
          <Image
            src={review.avatarSrc}
            alt={review.author}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="min-w-0">
          <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            {review.hasXLogo && (
              <span className="text-xs bg-white text-black font-black px-1.5 py-0.5 rounded-sm shrink-0">
                𝕏
              </span>
            )}
            <span className="truncate">{review.author}</span>
          </h4>
          <p className="text-sm text-gray-400 truncate">{review.handleOrRole}</p>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
        {review.content}
      </p>
    </article>
  );
}

function MobileReviewsCarousel({ reviews }: { reviews: ExactReviewItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const update = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(max > 8 && el.scrollLeft < max - 8);

    const cards = Array.from(el.children) as HTMLElement[];
    const first = cards[0];
    if (!first) return;
    const stride = first.offsetWidth + 16;
    const idx = Math.round(el.scrollLeft / stride);
    setActive(Math.max(0, Math.min(cards.length - 1, idx)));
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollToIndex = (idx: number) => {
    const el = scrollerRef.current;
    const card = el?.children[idx] as HTMLElement | undefined;
    if (!el || !card) return;
    const pad = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    el.scrollTo({ left: Math.max(0, card.offsetLeft - pad), behavior: "smooth" });
  };

  return (
    <div className="sm:hidden space-y-5">
      <div className="relative">
        <div
          ref={scrollerRef}
          className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] overscroll-x-contain"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-[82vw] max-w-[420px] shrink-0 snap-start"
            >
              <ReviewCard review={review} className="h-full w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 px-4">
        <button
          type="button"
          aria-label="Previous review"
          disabled={!canLeft}
          onClick={() => scrollToIndex(Math.max(0, active - 1))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#18191c] text-white disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p className="min-w-[4.5rem] text-center text-sm text-gray-400 tabular-nums">
          {active + 1} / {reviews.length}
        </p>
        <button
          type="button"
          aria-label="Next review"
          disabled={!canRight}
          onClick={() => scrollToIndex(Math.min(reviews.length - 1, active + 1))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#18191c] text-white disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const allReviews = [...reviewRow1, ...reviewRow2];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#0c0d0d] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Don’t just take our word for it
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
            We’re proud to support creators and businesses worldwide. Here’s what some of them had to say.
          </p>
        </div>

        <div className="hidden sm:flex flex-col gap-8 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0c0d0d] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0c0d0d] to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex gap-8 shrink-0"
            >
              {[...reviewRow1, ...reviewRow1].map((rev, idx) => (
                <ReviewCard
                  key={`${rev.id}-${idx}`}
                  review={rev}
                  className="w-[420px] md:w-[460px] lg:w-[500px] shrink-0"
                />
              ))}
            </motion.div>
          </div>

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex gap-8 shrink-0"
            >
              {[...reviewRow2, ...reviewRow2].map((rev, idx) => (
                <ReviewCard
                  key={`${rev.id}-${idx}`}
                  review={rev}
                  className="w-[420px] md:w-[460px] lg:w-[500px] shrink-0"
                />
              ))}
            </motion.div>
          </div>
        </div>

        <MobileReviewsCarousel reviews={allReviews} />
      </div>
    </section>
  );
}
