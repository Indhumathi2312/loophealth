"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { heroData } from "@/data/hero";

export function PromptInput() {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      alert(`Generating project for: "${prompt}"`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-[710px] mx-auto text-left"
    >
      <form onSubmit={handleSubmit}>
        <div className="bg-white text-gray-900 rounded-2xl p-4 flex flex-col min-h-[160px]">
          <textarea
            id="header-wide-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={heroData.inputPlaceholder}
            rows={4}
            className="w-full bg-transparent text-[#18191c] placeholder:text-gray-400 focus:outline-none resize-none text-sm leading-6 min-h-[96px]"
          />
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              aria-label={heroData.buttonLabel}
              className="inline-flex items-center gap-1.5 bg-[#18191c] hover:bg-[#2c2d30] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <span>{heroData.buttonLabel}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M13.3523 7.99954C13.3523 8.1984 13.2732 8.38918 13.1326 8.52981L9.63257 12.0298C9.33971 12.3227 8.86492 12.3226 8.57202 12.0298C8.27913 11.7369 8.27912 11.2622 8.57202 10.9693L10.7917 8.74954L3.39819 8.74954C2.98402 8.74954 2.64826 8.4137 2.64819 7.99954C2.64819 7.58533 2.98398 7.24954 3.39819 7.24954L10.7917 7.24954L8.573 5.03079L8.52124 4.97415C8.2809 4.67957 8.29838 4.24486 8.573 3.97024C8.8659 3.67742 9.34068 3.67737 9.63354 3.97024L13.1326 7.46927C13.2731 7.60989 13.3523 7.80069 13.3523 7.99954Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
