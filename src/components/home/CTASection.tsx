import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ctaData } from "@/data/ctaData";

export function CTASection() {
  const { title, subtitle, buttonText, buttonLink, image } = ctaData;

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* Split Background */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="w-full h-1/2 bg-[#FAF8F2]"></div>
        <div className="w-full h-1/2 bg-[#1B1B1E]"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="w-full bg-[#FFDE00] rounded-[32px] md:rounded-[40px] flex flex-col md:flex-row items-stretch overflow-hidden min-h-[460px] shadow-sm">
          
          {/* Left Side: Image */}
          <div className="w-full md:w-[45%] lg:w-1/2 relative h-[300px] sm:h-[350px] md:h-auto md:min-h-full shrink-0 flex items-end justify-center">
            <div className="absolute bottom-0 w-[90%] md:w-full h-full md:h-[110%]">
              <Image
                src={image}
                alt="Health Assurance"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-[55%] lg:w-1/2 p-10 sm:p-12 md:p-12 lg:pr-24 flex flex-col justify-center items-start md:ml-auto">
            <h2 className="text-[40px] md:text-[38px] lg:text-[56px] font-bold text-[#085A48] leading-[1.05] mb-5 tracking-tight whitespace-pre-line">
              {title}
            </h2>
            <p className="text-[17px] md:text-[15px] lg:text-[19px] text-[#085A48]/80 font-medium mb-10 whitespace-pre-line leading-relaxed max-w-[400px]">
              {subtitle}
            </p>
            <Link 
              href={buttonLink} 
              className="bg-white text-[#085A48] font-bold px-8 py-3.5 rounded-[10px] hover:bg-gray-50 transition-colors shadow-sm inline-block no-underline text-center text-[15px] md:text-[16px]"
            >
              {buttonText}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
