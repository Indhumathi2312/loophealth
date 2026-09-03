import React from "react";
import Image from "next/image";
import { appMockupFeatures } from "@/data/appMockupFeatures";

export function AppMockupSection() {
  return (
    <section className=" bg-[#FAF8F2] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-[48px] md:text-[64px] font-bold text-[#085A48] leading-[1.1] mb-6 tracking-tight">
              Build a culture of<br />wellbeing
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-lg leading-snug">
              Improve productivity and reduce your health insurance premiums by implementing a scientifically tested preventive healthcare setup.
            </p>
            
            <div className="flex flex-col gap-8 max-w-md">
              {appMockupFeatures.map((feature) => (
                <div key={feature.id} className="flex items-start gap-6">
                  <div className="w-10 h-10 shrink-0 mt-1">
                    <Image
                      src={feature.icon}
                      alt={feature.alt}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg md:text-[21px] text-[#085A48] font-medium leading-snug">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Mockup Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-[450px] lg:max-w-none lg:w-[120%] lg:-mr-[15%]">
              <Image
                src="/images/64da024088b367f88aca3bd7_Female hand holding iPhone 14 Pro mockup (Mockuuups Studio).png"
                alt="Person holding cell phone with care plan"
                width={1044}
                height={1200}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
