import React from "react";
import Image from "next/image";
import { whyLoopData } from "@/data/whyLoopFeatures";

export function WhyLoopSection() {
  const { title, subtitle, image, features } = whyLoopData;

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[700px] overflow-hidden">
      
      {/* Left Side: Image Area */}
      <div className="w-full lg:w-1/2 bg-[#FAF8F2] relative min-h-[300px] sm:min-h-[450px] lg:min-h-full flex items-center justify-center p-8 md:p-12 lg:p-16">
        <div className="relative w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] aspect-square">
          <Image
            src={image}
            alt="Why Loop"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>

      {/* Right Side: Content Area */}
      <div className="w-full lg:w-1/2 bg-[#085A48] p-8 sm:p-10 md:p-16 lg:p-20 xl:p-28 flex flex-col justify-center">
        <div className="max-w-[600px] w-full mx-auto lg:mx-0 lg:mr-auto">
          
          <h2 className="text-[36px] sm:text-[40px] md:text-[48px] lg:text-[60px] font-bold text-white leading-[1.1] mb-4 md:mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-[16px] md:text-[19px] text-white/90 font-medium mb-8 md:mb-10 max-w-md">
            {subtitle}
          </p>
          
          <div className="flex flex-col gap-3 md:gap-5">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="flex items-start sm:items-center gap-4 sm:gap-5 bg-white/10 rounded-[16px] md:rounded-2xl p-4 sm:p-5 md:p-6 backdrop-blur-sm shadow-sm"
              >
                <div className="shrink-0 flex items-center justify-center pt-1 sm:pt-0">
                  <Image
                    src={feature.icon}
                    alt="Feature icon"
                    width={48}
                    height={48}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>
                <p className="text-white text-[14px] md:text-[15px] leading-relaxed font-medium">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
}
