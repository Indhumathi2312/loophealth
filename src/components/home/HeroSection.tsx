// @ts-nocheck
import React from "react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="section_home-v2-header">
      <div className="container-big">
        <div className="home-v2-header_component">
          <div className="home-v2-header_header">
            <h1 className="text-[#f4eedb] font-bold text-[40px] md:text-[64px] lg:text-[80px] leading-[1.05] mb-6 tracking-tight">
          Healthcare &amp; <br />
          insurance made easy
        </h1>
            <p className="text-size-medium text-color-white mb-10">
              Not just for sick days!
              <br />
              An insurance plan that works to keep you healthy.
            </p>
            <div className="button-v2-row">
              <a
                href="tel:+91803-783-6789"
                className="button-v2 is-secondary w-button"
              >
                Claims Helpline
              </a>
              <a
                href="#"
                data-w-id="c08284c5-b61b-cc62-b13a-4717df84ff72"
                className="button-v2 w-button"
              >
                Request Demo
              </a>
            </div>
          </div>
          <div className="home-v2-header_grid">
            <div
              ha-hero-image="level-3"
              className="home-v2-header_item hide-mobile-landscape"
            >
              <img
                src="/images/64c8c5062251af398cb50a06_HA Header Img.webp"
                loading="eager"
                alt="a woman sitting at a table using a laptop computer"
                className="home-v2-header_item-image"
              />
            </div>
            <div
              ha-hero-image="level-2"
              className="home-v2-header_item hide-mobile-landscape"
            >
              <img
                src="/images/64c8c512f93d12246c8a2731_HA Header Img-1.webp"
                loading="eager"
                alt="a family posing for a picture in front of a lake, loop health"
                className="home-v2-header_item-image"
              />
              <img
                src="/images/64c8c506b99df798942aa1e9_HA Header Img-2.webp"
                loading="eager"
                alt="a man and woman sitting next to a child"
                className="home-v2-header_item-image"
              />
            </div>
            <div ha-hero-image="level-1" className="home-v2-header_item">
              <img
                src="/images/64c8c506e07d396057ca33b1_HA Header Img-3.webp"
                loading="eager"
                alt="a man holding a woman on the beach"
                className="home-v2-header_item-image"
              />
            </div>
            <div ha-hero-image="level-2" className="home-v2-header_item">
              <img
                src="/images/64c8c50625075f4f57dc906e_HA Header Img-4.webp"
                loading="eager"
                alt="a man and a woman are looking at a tablet"
                className="home-v2-header_item-image"
              />
              <img
                src="/images/64c8c50630b0285182a05911_HA Header Img-5.webp"
                loading="eager"
                alt="a man, woman and two children sitting on the grass"
                className="home-v2-header_item-image"
              />
            </div>
            <div
              ha-hero-image="level-3"
              className="home-v2-header_item hide-mobile-landscape"
            >
              <img
                src="/images/64c8c506bc508b4ac1b5dc58_HA Header Img-6.webp"
                loading="eager"
                alt="a couple of men sitting at a table with laptops"
                className="home-v2-header_item-image"
              />
            </div>
          </div>
        </div>
        <div className="home-v2-header_cover-wrap">
          <div className="home-v2-header_cover is-1" />
          <div className="home-v2-header_cover is-2" />
          <div className="home-v2-header_cover is-3" />
          <div className="home-v2-header_cover is-4" />
        </div>
      </div>
    </section>
  );
}
