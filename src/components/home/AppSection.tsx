"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { appTabs } from "@/data/appTabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function AppSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeTab = appTabs[activeIndex];

  const scrollToIdx = (idx: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const item = container.children[idx] as HTMLElement;
      if (item) {
        container.scrollTo({
          left: item.offsetLeft - container.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % appTabs.length;
    setActiveIndex(nextIdx);
    scrollToIdx(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + appTabs.length) % appTabs.length;
    setActiveIndex(prevIdx);
    scrollToIdx(prevIdx);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-16 bg-[#FAF8F2] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side: Mockup Slider */}
          <div className="w-full lg:w-[45%] relative h-[450px] md:h-[600px] flex items-center">
            {/* Colored Backdrop */}
            <div 
              className={`absolute left-0 top-[10%] bottom-[10%] w-[70%] rounded-[32px] transition-colors duration-700 ease-in-out ${activeTab.bgColor}`}
            />
            
            {/* Images */}
            {appTabs.map((tab, idx) => (
              <div
                key={tab.id}
                className={`absolute left-[15%] right-[-10%] top-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${
                  idx === activeIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-12 pointer-events-none"
                }`}
              >
                <Image
                  src={tab.image}
                  alt={tab.title}
                  width={48}
                  height={48}
                  className="w-full h-auto drop-shadow-2xl rounded-xl object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right Side: Content & Thumbs */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            <div>
              <h2 className="text-[48px] md:text-[64px] font-bold text-[#085A48] leading-[1.1] mb-6 tracking-tight">
                HR hassles<br />gone for good
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 mb-8 max-w-md leading-snug">
                Use solutions to manage your benefits effectively
              </p>
              <Link
                href="/hr-insurance-management-tools"
                className="inline-block bg-[#BCDD33] hover:bg-[#a9c929] text-[#085A48] font-bold px-8 py-3.5 rounded-xl transition-colors text-lg shadow-sm"
              >
                Learn more
              </Link>
            </div>

            {/* Slider Navigation */}
            <div className="mt-16 w-full relative">
              <div 
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto hide-scrollbar pb-6 snap-x snap-mandatory w-full"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {appTabs.map((tab, idx) => {
                  const isActive = idx === activeIndex;
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveIndex(idx);
                        scrollToIdx(idx);
                      }}
                      className={`shrink-0 w-[170px] h-[190px] flex flex-col justify-between p-7 rounded-3xl transition-all duration-300 text-left snap-start border border-transparent ${
                        isActive 
                          ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] scale-100" 
                          : "hover:bg-white/40 scale-[0.98] opacity-80 hover:opacity-100"
                      }`}
                    >
                      <div className="w-12 h-12 shrink-0">
                        <Image src={tab.icon} alt="" className="w-full h-full object-contain" width={28} height={28} />
                      </div>
                      <span
                        className="text-[#085A48] font-bold text-[19px] leading-tight"
                        dangerouslySetInnerHTML={{ __html: tab.title.replace(' ', '<br/>') }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-6 mt-2 pl-4">
                <button 
                  onClick={handlePrev} 
                  className="text-gray-400 hover:text-gray-800 transition-colors p-2 -ml-2"
                  aria-label="Previous tab"
                >
                  <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
                </button>
                <button 
                  onClick={handleNext} 
                  className="text-gray-800 hover:text-black transition-colors p-2"
                  aria-label="Next tab"
                >
                  <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
