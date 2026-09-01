"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { HorizonsGradient } from "@/components/ui/HorizonsGradient";
import "@/components/sections/hero-horizons.css";
import {
  brand,
  footerContact,
  footerSocial,
  headerCtas,
  mainNavItems,
} from "@/data/navigation";

const socialIcons = [
  { label: "Facebook", href: footerSocial.find((item) => item.label === "Facebook")?.href ?? "#", Icon: Facebook },
  { label: "X", href: footerSocial.find((item) => item.label === "X")?.href ?? "#", Icon: Twitter },
  { label: "Instagram", href: footerSocial.find((item) => item.label === "Instagram")?.href ?? "#", Icon: Instagram },
  { label: "LinkedIn", href: footerSocial.find((item) => item.label === "LinkedIn")?.href ?? "#", Icon: Linkedin },
];

const contactLinks = [
  { label: footerContact.email, href: `mailto:${footerContact.email}` },
  { label: "WhatsApp", href: headerCtas.whatsapp.href, external: true },
  { label: headerCtas.book.label, href: headerCtas.book.href },
  { label: footerContact.location, href: "#" },
];

const footerColTitle =
  "font-heading text-xl font-black tracking-tight leading-tight text-white";

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = React.useId();

  return (
    <div className="border-b border-white/10 md:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between py-4 text-left md:hidden"
      >
        <span className={footerColTitle}>{title}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-white transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <h2 className={`${footerColTitle} mb-4 hidden md:block`}>{title}</h2>
      <div
        id={panelId}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:block md:overflow-visible ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } md:grid-rows-[1fr]`}
      >
        <div className="min-h-0 overflow-hidden md:overflow-visible">
          <div className="pb-4 md:pb-0">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="hero-horizons relative min-h-screen overflow-hidden bg-[#0c0d0d]">
      <HorizonsGradient />

      <div className="relative z-30 w-full pt-12 md:pt-24 px-4 sm:px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto bg-[#18191c] border border-white/10 shadow-xl rounded-2xl lg:rounded-3xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 p-8 md:p-12">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-[#673de6] shadow-inner p-2">
                <svg viewBox="0 0 256 256" className="w-full h-full" aria-hidden="true">
                  <path
                    fill="white"
                    d="M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z"
                  />
                </svg>
              </div>
              <span className="font-heading text-2xl lg:text-3xl font-black tracking-tight leading-tight text-white capitalize">
                {brand.name}
              </span>
            </div>

            <div className="flex w-full flex-col md:w-auto md:flex-row md:gap-16">
              <FooterColumn title="Services">
                <ul className="space-y-2.5">
                  {mainNavItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="text-gray-300 font-medium hover:text-[#673de6] transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              <FooterColumn title="Contact">
                <ul className="space-y-2.5">
                  {contactLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        {...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-gray-300 font-medium hover:text-[#673de6] transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </FooterColumn>

              <FooterColumn title="Social">
                <ul className="space-y-2.5">
                  {footerSocial.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-gray-300 font-medium hover:text-[#673de6] transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>

          <div className="border-t-0 md:border-t border-white/10 bg-[#141516] px-8 md:px-12 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-gray-400 font-medium text-left">
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 text-gray-300 flex items-center justify-center hover:bg-[#673de6] hover:text-white hover:border-[#673de6] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
