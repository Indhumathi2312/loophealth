import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerData } from '@/data/footerData';

export function Footer() {
  const { logo, contact, columns, newsletter, socials, bottomLeft, bottomRight } = footerData;

  return (
    <footer className="bg-[#1B1B1E] text-white py-10 md:py-14">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col gap-12 md:gap-16">
        
        {/* Top & Middle Sections */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
          
          {/* Left Side: Logo & Links */}
          <div className="flex-1 w-full flex flex-col gap-10 md:gap-12">
            
            {/* Logo */}
            <div>
              <Link href="/">
                <Image src={logo} alt="Loop" width={130} height={44} className="w-[110px] md:w-[130px] object-contain" />
              </Link>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
              {columns.map((col, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <h3 className="text-[11px] font-bold text-white tracking-widest uppercase mb-1">
                    {col.heading}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {col.links.map((link, lIdx) => (
                      ('external' in link && link.external) ? (
                        <a key={lIdx} href={link.href} target="_blank" rel="noopener noreferrer" className="text-[13.5px] text-gray-300 hover:text-white transition-colors no-underline font-medium">
                          {link.label}
                        </a>
                      ) : (
                        <Link key={lIdx} href={link.href} className="text-[13.5px] text-gray-300 hover:text-white transition-colors no-underline font-medium">
                          {link.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side: Contact & Newsletter */}
          <div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-12 md:gap-14 pt-2 lg:pt-0">
            
            {/* Contact Info */}
            <div className="flex flex-col gap-1">
              <span className="text-[#BCDD33] text-[13.5px] font-medium mb-0.5">{contact.title}</span>
              <a href={contact.phoneLink} className="text-gray-300 text-[17px] font-medium hover:text-white transition-colors no-underline">
                {contact.phone}
              </a>
              <a href={contact.emailLink} className="text-gray-300 text-[13.5px] hover:text-white transition-colors no-underline font-medium mt-0.5">
                {contact.email}
              </a>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-5 w-full">
              <p className="text-[14px] font-medium leading-[1.6] text-gray-200 whitespace-pre-line">
                {newsletter.text}
              </p>
              <a 
                href={newsletter.buttonLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border border-gray-400 hover:border-white text-gray-200 hover:text-white px-6 py-2.5 rounded-[8px] text-[13px] font-medium transition-all w-fit no-underline"
              >
                {newsletter.buttonText}
              </a>

              {/* Socials */}
              <div className="flex items-center gap-4 mt-2">
                {socials.map((social, sIdx) => (
                  <a key={sIdx} href={social.href} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                    <Image src={social.icon} alt={social.alt} width={20} height={20} className="w-4 h-4 object-contain" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 text-[11px] text-gray-400 font-medium">
          <div className="max-w-[400px]">
            <p className="whitespace-pre-line leading-relaxed">
              {bottomLeft}
            </p>
          </div>
          <div className="flex flex-col gap-0.5 lg:items-start max-w-[450px] leading-relaxed">
            {bottomRight.map((line, idx) => (
              <span key={idx}>{line}</span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
