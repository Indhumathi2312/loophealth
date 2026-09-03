"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { careTabs } from "@/data/careTabs";

export function CareTabsSection() {
  const [activeTab, setActiveTab] = useState(careTabs[0].id);
  const [imageOffset, setImageOffset] = useState(0);

  // Scroll spy observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(Number(entry.target.getAttribute("data-tab-id")));
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    document.querySelectorAll(".care-tab-item").forEach((tab) => observer.observe(tab));
    return () => observer.disconnect();
  }, []);

  // Track active tab's vertical position for the dynamic image
  useEffect(() => {
    const updateOffset = () => {
      const activeElement = document.querySelector(`[data-tab-id="${activeTab}"]`) as HTMLElement;
      if (activeElement) {
        setImageOffset(activeElement.offsetTop);
      }
    };

    updateOffset();
    const interval = setInterval(updateOffset, 20); // Poll during transition to stay synced
    const timeout = setTimeout(() => clearInterval(interval), 500);

    window.addEventListener("resize", updateOffset);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      window.removeEventListener("resize", updateOffset);
    };
  }, [activeTab]);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#085A48] text-center mb-12 md:mb-16 leading-tight">
          Give your team the best care
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch relative">
          {/* Left Column: Compact Vertical Tabs */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 relative z-10">
            {careTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              
              return (
                <div
                  key={tab.id}
                  data-tab-id={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`care-tab-item cursor-pointer rounded-2xl p-4 md:p-5 transition-all duration-500 ${
                    isActive ? "bg-[#085A48] shadow-md" : "bg-[#f9faf9] hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                        <Image
                          src={tab.icon}
                          alt={tab.title}
                          width={40}
                          height={40}
                          className="object-contain w-full h-full"
                          unoptimized
                        />
                      </div>
                      <h3
                        className={`text-lg md:text-xl font-bold transition-colors ${
                          isActive ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {tab.title}
                      </h3>
                    </div>
                    
                    {!isActive && (
                      <svg className="text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" />
                      </svg>
                    )}
                  </div>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden pl-14">
                      <p className="text-[#b4eadb] text-sm md:text-[15px] mb-5 leading-relaxed">
                        {tab.description}
                      </p>
                      
                      <div className="block lg:hidden w-full rounded-xl overflow-hidden mb-5 bg-[#f7f6f0] p-4 shadow-inner">
                        <div className="aspect-[3/2] w-full relative">
                          <Image
                            src={tab.image}
                            alt={tab.title}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      </div>

                      {tab.link && (
                        <Link
                          href={tab.link}
                          className="inline-block bg-[#c5f015] hover:bg-[#b0d810] text-[#085A48] font-bold text-sm px-6 py-2.5 rounded-lg transition-colors shadow-sm"
                        >
                          Learn more
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Tracking Image Panel */}
          <div className="hidden lg:block w-full lg:w-1/2 relative h-full">
            <div 
              className="absolute w-full transition-transform duration-500 ease-out will-change-transform z-0"
              style={{ transform: `translateY(${imageOffset}px)` }}
            >
              <div className="bg-[#f7f6f0] rounded-3xl p-8 shadow-sm h-[400px] overflow-hidden relative border border-gray-100">
                {careTabs.map((tab) => (
                  <Image
                    key={tab.id}
                    src={tab.image}
                    alt={tab.title}
                    width={600}
                    height={400}
                    className={`absolute inset-0 p-8 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
                      activeTab === tab.id ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                    unoptimized
                  />
                ))}
                
                <Image 
                  src="/images/64cb6f5b6b542a2d3a005d09_hp dots illus.png"
                  alt="Dots"
                  width={200}
                  height={200}
                  className="absolute -bottom-8 -right-8 opacity-40 z-0 object-contain pointer-events-none w-48 h-48"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
