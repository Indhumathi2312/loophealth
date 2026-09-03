import React from "react";
import Link from "next/link";
import Image from "next/image";
import { infoData } from "@/data/info";

export function InfoSection() {
  return (
    <section className="bg-[#FAF8F2] py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[40px] md:text-[52px] font-bold text-[#085A48] leading-tight mb-2">
            {infoData.title}
          </h2>
          <p className="text-[24px] md:text-[34px] font-bold text-[#085A48] leading-tight">
            {infoData.subtitle}
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative">
          
          {/* Left: Image */}
          <div className="relative w-full rounded-[20px] overflow-hidden">
            <Image
              src={infoData.mainImage}
              alt="The Loop Manifesto"
              width={600}
              height={400}
              className="w-full object-cover"
              unoptimized
            />
          </div>

          {/* Right: Text & Button */}
          <div className="relative">
            {/* Background Sunburst Image */}
            <div className="absolute -bottom-40 -right-40 w-[150%] md:w-[130%] opacity-60 pointer-events-none -z-10">
              <Image
                src={infoData.bgImage}
                alt="Sunburst background"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              <p className="text-[17px] leading-relaxed text-gray-500">
                {infoData.paragraphs[0]}
              </p>
              <p className="text-[17px] leading-relaxed text-gray-800">
                {infoData.paragraphs[1]}
              </p>
              
              <div className="pt-2">
                <Link
                  href={infoData.button.link}
                  className="inline-block bg-[#BFE415] hover:bg-[#aacc10] text-[#085A48] font-bold text-[14px] px-6 py-3 rounded-md transition-colors"
                >
                  {infoData.button.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
