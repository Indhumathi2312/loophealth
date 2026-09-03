import React from "react";
import Image from "next/image";
import { achievements } from "@/data/achievements";

export function AchievementsSection() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[20px] p-8 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
            >
              <div className="relative w-16 h-16 mb-4 flex items-center justify-center bg-[#Eef8f5] rounded-full">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  unoptimized
                />
              </div>
              <h3 className="text-[28px] leading-tight font-semibold text-gray-900 mb-1">
                {item.value}
              </h3>
              <p className="text-[15px] text-gray-400 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
