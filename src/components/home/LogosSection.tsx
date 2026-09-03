// @ts-nocheck
import React from "react";
import { logos } from "@/data/logos";

export function LogosSection() {
  return (
    <section className="section_logos-v2">
      <div className="container-large">
        <div className="logos-v3_component">
          <h2 className="logos-v3_heading">
            Customers transforming employee health
          </h2>
        </div>
      </div>
      
      {/* Marquee Wrapper */}
      <div className="logos-v3_list-wrapper flex whitespace-nowrap overflow-hidden group">
        {[1, 2].map((panelIdx) => (
          <div 
            key={panelIdx} 
            className="logos-v3_list flex shrink-0 items-center animate-marquee "
            aria-hidden={panelIdx !== 1 ? "true" : undefined}
          >
            {logos.map((logo) => (
              <img
                key={logo.id}
                src={logo.src}
                loading="eager"
                sizes={logo.sizes}
                srcSet={logo.srcSet}
                alt="Logo"
                className={logo.className}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
