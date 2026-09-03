"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide if scrolling down past 80px, show if scrolling up
      if (currentScrollY > prevScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close dropdowns when clicking outside
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const productLinks = [
    {
      title: "Employer Tools",
      desc: "Tools that make it easy to manage employee benefits",
      href: "/hr-insurance-management-tools",
      icon: "/images/61f8edac2799d43b28f81c77_happy-person-icon.svg"
    },
    {
      title: "Employee Experience",
      desc: "Comprehensive health benefits for everyone in your team",
      href: "/employees",
      icon: "/images/61f8edb0d85ed51edb3f3ebe_membership-app-icon.svg"
    },
    {
      title: "Healthcare Services",
      desc: "Learn about our data-driven approach to healthcare services",
      href: "/our-doctors",
      icon: "/images/61f8edac2799d43b28f81c77_happy-person-icon.svg"
    }
  ];

  const resourceLinks = [
    {
      title: "HR Community",
      desc: "Network with great HRs across India & stay on top of HR industry trends",
      href: "/hr-community",
      icon: "/images/642cf98711e38e6f316677dd_thumbs up icon 60px.png"
    },
    {
      title: "Testimonials",
      desc: "See why 500+ HRs & all their employees prefer Loop as their healthcare partner",
      href: "/most-trusted-healthcare-partner",
      icon: "/images/61f8edae722466be55e2d106_loop-member.svg"
    },
    {
      title: "Case Studies",
      desc: "Success stories of employee healthcare transformation",
      href: "/case-studies",
      icon: "/images/635ba459ee312a218079a70a_integrated care plan.png"
    }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] flex justify-center px-0 lg:px-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`} ref={headerRef}>
        {/* Desktop Navbar Container */}
        <div className="w-full lg:max-w-[1100px] bg-white rounded-b-2xl lg:rounded-b-[24px] px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between shadow-sm relative">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 no-underline">
            <img 
              src="/images/61f8edaecca71a1ae15ec68b_loop-logo-moss.svg" 
              alt="Loop Health" 
              className="h-7 lg:h-8 w-auto"
            />
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center gap-8">
            
            {/* Product Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('product')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'product' ? null : 'product')}
                className="flex items-center gap-1.5 text-[#306654] hover:text-[#084d3e] font-medium text-[16px] py-2 transition-colors no-underline"
              >
                Product
                <svg className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'product' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/3 mt-2 w-[950px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-8 transition-all duration-300 origin-top grid grid-cols-3 gap-8 ${openDropdown === 'product' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
              >
                {productLinks.map((link, idx) => (
                  <Link href={link.href} key={idx} className="flex items-start gap-4 group no-underline">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center">
                      <img src={link.icon} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="text-[#084d3e] font-semibold text-[17px] mb-1.5 flex items-center gap-1.5">
                        {link.title}
                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#084d3e]">→</span>
                      </h4>
                      <p className="text-[#648478] text-[14px] leading-relaxed">{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/20years" className="text-[#306654] hover:text-[#084d3e] font-medium text-[16px] transition-colors no-underline">
              Manifesto
            </Link>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('resources')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')}
                className="flex items-center gap-1.5 text-[#306654] hover:text-[#084d3e] font-medium text-[16px] py-2 transition-colors no-underline"
              >
                Resources
                <svg className={`w-4 h-4 transition-transform duration-300 ${openDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu (Wider for Resources to match original) */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[1000px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-8 transition-all duration-300 origin-top grid grid-cols-4 gap-8 ${openDropdown === 'resources' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
              >
                {/* Left Featured Column (1/4 width) */}
                <Link href="/hr-resources-loop-health" className="col-span-1 border border-gray-100 rounded-xl p-3 hover:shadow-md transition-all duration-300 group block no-underline">
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img src="/images/64cb4b64f9237380838916d3_HA Thumbnail.webp" alt="Guides" className="w-full h-[120px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="text-[#084d3e] font-semibold text-[17px] mb-2 flex items-center gap-1.5 px-1">
                    Guides
                    <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#084d3e]">→</span>
                  </h4>
                  <p className="text-[#648478] text-[13px] leading-relaxed px-1 pb-1">Learn various facets of the HR profession from an expert’s lens</p>
                </Link>

                {/* Right Links Column (3/4 width) */}
                <div className="col-span-3 flex flex-col justify-between">
                  {/* Top Grid of 3 items */}
                  <div className="grid grid-cols-3 gap-6">
                    {resourceLinks.map((link, idx) => (
                      <Link href={link.href} key={idx} className="flex items-start gap-3 group pt-2 no-underline">
                        <div className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center">
                          <img src={link.icon} alt="" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <h4 className="text-[#084d3e] font-semibold text-[16px] mb-1.5 flex items-center gap-1.5">
                            {link.title}
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#084d3e]">→</span>
                          </h4>
                          <p className="text-[#648478] text-[13px] leading-relaxed pr-2">{link.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Contact Banner */}
                  <div className="bg-[#eff6f3] rounded-xl px-6 py-4 flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-[13px] text-[#648478] font-medium mb-0.5">Claims Helpline</p>
                      <a href="tel:080-3783-6789" className="text-[#084d3e] font-bold text-[22px] hover:opacity-80 transition-opacity tracking-tight no-underline">080-3783-6789</a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <img src="/images/64df12fbc57fbbefc35aa724_Call 1.webp" alt="Phone" className="w-5 h-5 object-contain" />
                      <span className="text-[15px] font-medium text-[#084d3e]">We&apos;re reachable 24X7.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/our-story" className="text-[#306654] hover:text-[#084d3e] font-medium text-[16px] transition-colors no-underline">
              About us
            </Link>
            <Link href="/careers" className="text-[#306654] hover:text-[#084d3e] font-medium text-[16px] transition-colors no-underline">
              Careers
            </Link>

          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:080-3783-6789" className="border border-[#084d3e] text-[#084d3e] hover:bg-[#084d3e] hover:text-white font-medium text-[15px] px-5 py-2.5 rounded-xl transition-colors no-underline">
              Claims Helpline
            </a>
            <a href="#" className="bg-[#bce628] hover:bg-[#a6cc22] text-[#084d3e] font-medium text-[15px] px-5 py-2.5 rounded-xl transition-colors no-underline">
              Request a Demo
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="lg:hidden p-2 text-[#084d3e]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M4 6H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div className={`fixed inset-0 bg-white z-[110] lg:hidden transition-transform duration-300 flex flex-col overflow-y-auto ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-gray-100">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="no-underline">
              <img 
                src="/images/61f8edaecca71a1ae15ec68b_loop-logo-moss.svg" 
                alt="Loop Health" 
                className="h-7 w-auto"
              />
            </Link>
            <button 
              className="p-2 text-[#084d3e]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 px-6 py-8 flex flex-col gap-8">
            
            {/* Product Accordion */}
            <div>
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'mobile-product' ? null : 'mobile-product')}
                className="flex items-center gap-2 text-[#006764] font-medium text-[17px] no-underline"
              >
                Product
                <svg className={`w-5 h-5 transition-transform duration-300 ${openDropdown === 'mobile-product' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`flex flex-col gap-3 overflow-hidden transition-all duration-300 ${openDropdown === 'mobile-product' ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                {productLinks.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={() => setMobileMenuOpen(false)} className="flex items-start gap-4 border border-gray-200 rounded-[14px] p-4 bg-white no-underline">
                    <div className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center">
                      <img src={link.icon} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="text-[#084d3e] font-semibold text-[16px] mb-1.5 flex items-center gap-1.5">
                        {link.title}
                        <span className="text-[#084d3e]">→</span>
                      </h4>
                      <p className="text-[#648478] text-[13px] leading-relaxed pr-2">{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/20years" onClick={() => setMobileMenuOpen(false)} className="text-[#006764] font-medium text-[17px] no-underline">
              Manifesto
            </Link>

            {/* Resources Accordion */}
            <div>
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'mobile-resources' ? null : 'mobile-resources')}
                className="flex items-center gap-2 text-[#006764] font-medium text-[17px] no-underline"
              >
                Resources
                <svg className={`w-5 h-5 transition-transform duration-300 ${openDropdown === 'mobile-resources' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`flex flex-col gap-3 overflow-hidden transition-all duration-300 ${openDropdown === 'mobile-resources' ? 'max-h-[800px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                
                {/* Guides Card */}
                <Link href="/hr-resources-loop-health" onClick={() => setMobileMenuOpen(false)} className="flex items-start gap-4 border border-gray-200 rounded-[14px] p-4 bg-white no-underline">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center overflow-hidden">
                    <img src="/images/64cb4b64f9237380838916d3_HA Thumbnail.webp" alt="Guides" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[#084d3e] font-semibold text-[16px] mb-1.5 flex items-center gap-1.5">
                      Guides
                      <span className="text-[#084d3e]">→</span>
                    </h4>
                    <p className="text-[#648478] text-[13px] leading-relaxed pr-2">Learn various facets of the HR profession from an expert’s lens</p>
                  </div>
                </Link>

                {/* Mapped Resource Links */}
                {resourceLinks.map((link, idx) => (
                  <Link key={idx} href={link.href} onClick={() => setMobileMenuOpen(false)} className="flex items-start gap-4 border border-gray-200 rounded-[14px] p-4 bg-white no-underline">
                    <div className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center">
                      <img src={link.icon} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="text-[#084d3e] font-semibold text-[16px] mb-1.5 flex items-center gap-1.5">
                        {link.title}
                        <span className="text-[#084d3e]">→</span>
                      </h4>
                      <p className="text-[#648478] text-[13px] leading-relaxed pr-2">{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/our-story" onClick={() => setMobileMenuOpen(false)} className="text-[#006764] font-medium text-[17px] no-underline">
              About us
            </Link>
            <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="text-[#006764] font-medium text-[17px] no-underline">
              Careers
            </Link>
          </div>

          {/* Mobile Footer Buttons */}
          <div className="p-6 flex flex-col gap-3 bg-white border-t border-gray-100">
            <a href="tel:080-3783-6789" className="w-full text-center border border-[#084d3e] text-[#084d3e] font-medium text-[16px] px-5 py-3 rounded-xl transition-colors no-underline">
              Claims Helpline
            </a>
            <a href="#" className="w-full text-center bg-[#bce628] text-[#084d3e] font-medium text-[16px] px-5 py-3 rounded-xl transition-colors no-underline">
              Request a Demo
            </a>
          </div>
      </div>
    </>
  );
}
