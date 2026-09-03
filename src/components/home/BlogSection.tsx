import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { featuredArticle, sideArticles } from '@/data/blogResources';

export function BlogSection() {
  return (
    <section className="py-20 md:py-32 bg-[#FAF8F2] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h2 className="text-[48px] md:text-[56px] font-bold text-[#085A48] mb-12 tracking-tight">
          Resources
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12">
          
          {/* Featured Article */}
          <div className="lg:col-span-7 flex flex-col group">
            <Link href={featuredArticle.link} className="block w-full no-underline">
              <div className="relative w-full h-[260px] md:h-[340px] rounded-[24px] overflow-hidden mb-8 shadow-sm">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute bottom-5 left-5 bg-black/50 backdrop-blur-md text-white text-xs font-medium px-4 py-1.5 rounded-[8px]">
                  {featuredArticle.category}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-[14px] mb-4">
                <span className="text-gray-500">Published on</span>
                <span className="text-[#085A48] font-medium">{featuredArticle.date}</span>
              </div>
              <h3 className="text-2xl md:text-[34px] font-medium text-[#1A1A1A] leading-[1.3] mb-4 group-hover:text-[#085A48] transition-colors">
                {featuredArticle.title}
              </h3>
              {featuredArticle.excerpt && (
                <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed max-w-3xl">
                  {featuredArticle.excerpt}
                </p>
              )}
            </Link>
          </div>

          {/* Side Articles */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 md:gap-0">
            {sideArticles.map((article) => (
              <Link key={article.id} href={article.link} className="flex flex-col sm:flex-row gap-6 group no-underline">
                <div className="relative w-full sm:w-[180px] h-[160px] sm:h-[110px] shrink-0 rounded-[16px] overflow-hidden shadow-sm">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-[6px]">
                    {article.category}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-1.5 text-[13px] mb-2.5">
                    <span className="text-gray-500">Published on</span>
                    <span className="text-[#085A48] font-medium">{article.date}</span>
                  </div>
                  <h3 className="text-[17px] md:text-[19px] font-medium text-[#1A1A1A] leading-tight group-hover:text-[#085A48] transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
