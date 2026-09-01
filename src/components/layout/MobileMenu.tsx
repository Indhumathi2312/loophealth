"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { brand, headerCtas, mainNavItems } from "@/data/navigation";
import { CtaButton } from "@/components/ui/CtaButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const hasOpened = useRef(false);

  const setItem = (index: number) => (el: HTMLElement | null) => {
    itemsRef.current[index] = el;
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) onClose();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const items = itemsRef.current.filter((el): el is HTMLElement => Boolean(el));
    const origin = "circle(0% at calc(100% - 2.25rem) 2rem)";
    const expanded = "circle(160% at calc(100% - 2.25rem) 2rem)";

    timelineRef.current?.kill();

    if (isOpen) {
      hasOpened.current = true;
      document.body.style.overflow = "hidden";

      gsap.set(panel, { display: "flex", pointerEvents: "auto" });
      const timeline = gsap.timeline();
      timeline.fromTo(
        panel,
        { clipPath: origin },
        { clipPath: expanded, duration: 0.72, ease: "power4.inOut" }
      );
      timeline.fromTo(
        items,
        { y: 56, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.08, ease: "power3.out" },
        "-=0.38"
      );
      timelineRef.current = timeline;
      return;
    }

    if (hasOpened.current) {
      const timeline = gsap.timeline({
        onComplete: () => {
          gsap.set(panel, { display: "none", pointerEvents: "none", clipPath: origin });
          document.body.style.overflow = "";
        },
      });
      timeline.to(items, {
        y: 28,
        opacity: 0,
        duration: 0.22,
        stagger: 0.04,
        ease: "power2.in",
      });
      timeline.to(
        panel,
        { clipPath: origin, duration: 0.5, ease: "power4.inOut" },
        "-=0.08"
      );
      timelineRef.current = timeline;
      return;
    }

    gsap.set(panel, { display: "none", pointerEvents: "none", clipPath: origin });
  }, [isOpen]);

  useEffect(() => {
    return () => {
      timelineRef.current?.kill();
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={panelRef}
      className="fixed inset-0 z-[9999] flex-col bg-white text-gray-900"
      style={{ display: "none" }}
      aria-hidden={!isOpen}
    >
      <div className="flex items-center justify-between w-full px-4 h-14">
        <a ref={setItem(0)} href="/" onClick={onClose} className="flex items-center">
          <span className="font-heading text-lg font-black tracking-tight leading-tight text-black capitalize">
            {brand.name}
          </span>
        </a>
        <button
          ref={setItem(1)}
          onClick={onClose}
          className="p-2 pt-0 text-gray-800"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 px-6 py-8 overflow-y-auto flex flex-col justify-center gap-2">
        {mainNavItems.map((item, index) => (
          <a
            key={item.label}
            ref={setItem(index + 2)}
            href={item.href}
            onClick={onClose}
            className="block py-3"
          >
            <h2 className="font-heading text-xl font-black tracking-tight leading-tight text-gray-900">
              {item.label}
            </h2>
          </a>
        ))}
      </nav>

      <div className="px-4 py-5 flex flex-col gap-3">
        <a
          ref={setItem(mainNavItems.length + 2)}
          href={headerCtas.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-900 font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl"
        >
          <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {headerCtas.whatsapp.label}
        </a>
        <div ref={setItem(mainNavItems.length + 3)}>
          <CtaButton className="w-full" onClick={onClose}>
            {headerCtas.book.label}
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
