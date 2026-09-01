"use client";
//file : src/components/sections/BadgesSection.tsx
import React, { useState } from "react";
import { badgesData } from "@/data/badges";

export function BadgesSection() {
  const [activeBadge, setActiveBadge] = useState(badgesData[0].id);

  const handleScrollTo = (id: string) => {
    setActiveBadge(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky top-20 md:top-24 z-40 py-3 px-4">
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-1.5 max-w-full overflow-x-auto no-scrollbar">
          {badgesData.map((badge) => {
            const isActive = activeBadge === badge.id;
            return (
              <button
                key={badge.id}
                type="button"
                onClick={() => handleScrollTo(badge.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-[#18191c] text-white"
                    : "bg-white text-[#1d1e22] hover:bg-gray-100"
                }`}
              >
                {badge.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
