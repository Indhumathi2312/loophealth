"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroData } from "@/data/hero";
import { showcaseCategories } from "@/data/showcase";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { BadgesSection } from "@/components/sections/BadgesSection";
import { HorizonsGradient } from "@/components/ui/HorizonsGradient";
import "./hero-horizons.css";

function HeroImageScroll() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onWheel = (event: WheelEvent) => {
      if (scroller.scrollWidth <= scroller.clientWidth) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      scroller.scrollLeft += event.deltaY;
    };

    scroller.addEventListener("wheel", onWheel, { passive: false });
    return () => scroller.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={scrollerRef}
      className="hero-image-scroll no-scrollbar w-screen max-w-none relative left-1/2 -translate-x-1/2 overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
    >
      <div className="flex items-stretch gap-4 sm:gap-5 px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-56rem)/2))] py-1">
        {showcaseCategories.map((item) => (
          <div
            key={item.id}
            className="relative aspect-[16/9] w-[min(85vw,720px)] shrink-0 snap-center overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md"
          >
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 720px"
              priority={item.id === showcaseCategories[0].id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="promo"
      className="hero-horizons relative bg-[#0c0d0d] text-white"
    >
      <HorizonsGradient />

      <div className="relative z-10 flex flex-col items-center text-center gap-4 md:gap-8 pt-[140px] px-4 sm:px-6 lg:px-8 pb-8">
        <motion.a
          href="/bookings/"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="group inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-sm font-normal text-white hover:bg-white/20 transition-all duration-300"
        >
          <span>Websites and apps, built by toogood</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            <path
              d="M13.3523 7.99954C13.3523 8.1984 13.2732 8.38918 13.1326 8.52981L9.63257 12.0298C9.33971 12.3227 8.86492 12.3226 8.57202 12.0298C8.27913 11.7369 8.27912 11.2622 8.57202 10.9693L10.7917 8.74954L3.39819 8.74954C2.98402 8.74954 2.64826 8.4137 2.64819 7.99954C2.64819 7.58533 2.98398 7.24954 3.39819 7.24954L10.7917 7.24954L8.573 5.03079L8.52124 4.97415C8.2809 4.67957 8.29838 4.24486 8.573 3.97024C8.8659 3.67742 9.34068 3.67737 9.63354 3.97024L13.1326 7.46927C13.2731 7.60989 13.3523 7.80069 13.3523 7.99954Z"
              fill="currentColor"
            />
          </svg>
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[32px] sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.1] text-white max-w-[820px]"
        >
          {heroData.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-lg text-white/90 max-w-[640px] font-normal leading-relaxed"
        >
          {heroData.subtitle}
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full overflow-x-clip"
        >
          <HeroImageScroll />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-200"
        >
          <span className="font-bold text-white">Excellent</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center rounded-[2px]">
                <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            ))}
          </div>
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:text-white transition-colors"
          >
            71,724 reviews on Trustpilot
          </a>
        </motion.div>
      </div>

      <div className="relative z-40">
        <BadgesSection />
      </div>

      <div className="relative z-10">
        <ShowcaseSection />
      </div>
    </section>
  );
}
