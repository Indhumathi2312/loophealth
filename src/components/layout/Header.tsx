"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { brand, headerCtas, mainNavItems } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";
import { CtaButton } from "@/components/ui/CtaButton";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onLight = isScrolled || mobileMenuOpen;

  return (
    <header
      className={`sticky z-50 w-full px-4 transition-all duration-300 ${
        isScrolled ? "top-3" : "top-0 pt-2"
      }`}
    >
      <div
        className={`mx-auto md:max-w-[1440px]  transition-all duration-300 `}
      >
        <div className="flex items-center justify-between h-14 md:h-16 px-0 md:px-8">
          <div className="flex items-center gap-8 min-w-0">
            <Link
              href="/"
              className={`flex items-center shrink-0 rounded-xl border px-4 py-1.5 ${
                onLight ? "border-black" : "border-white/20"
              }`}
            >
              <span
                className={`font-heading text-lg font-black tracking-tight leading-tight capitalize ${
                  onLight ? "text-black" : "text-white"
                }`}
              >
                {brand.name}
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {mainNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-normal transition-colors ${
                    onLight ? "text-gray-800 hover:text-black" : "text-gray-200 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={headerCtas.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-normal border transition-colors ${
                onLight
                  ? "border-gray-300 text-gray-900 hover:bg-black/5"
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              {headerCtas.whatsapp.label}
            </a>
            <CtaButton variant="header" size="compact">
              {headerCtas.book.label}
            </CtaButton>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <CtaButton variant="header" size="mini" className="whitespace-nowrap">
              {headerCtas.book.label}
            </CtaButton>
            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className={`flex flex-col justify-center gap-[5px] p-2 ${onLight ? "text-black" : "text-white"}`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="block w-5 h-[2px] bg-current rounded-full" />
              <span className="block w-5 h-[2px] bg-current rounded-full" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
