'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Fashion Photography',
    description: 'Editorial and campaign shoots that capture the essence of fashion — from lookbooks and brand campaigns to e-commerce and lifestyle imagery. We work closely with stylists, MUAs and art directors to craft visuals that sell.',
    stat: '60+ Campaigns',
  },
  {
    id: 2,
    title: 'Restaurant Content',
    description: 'Mouthwatering food photography and atmospheric restaurant imagery that drives bookings. Menu shoots, social content, PR visuals and full brand identity shoots for hospitality brands.',
    stat: '40+ Brands',
  },
  {
    id: 3,
    title: 'Jewellery Photography',
    description: 'Precision lighting and styling for jewellery — from fine jewellery macro shots to lifestyle campaign imagery. Every piece deserves to shine at its best.',
    stat: '25+ Collections',
  },
  {
    id: 4,
    title: 'Product Photography',
    description: 'Clean, compelling product imagery for e-commerce, catalogues, and campaigns. White-background studio work, styled flatlay compositions, and lifestyle context shots.',
    stat: '1000+ Products',
  },
  {
    id: 5,
    title: 'Interior Photography',
    description: 'Architectural and interior photography that tells the story of a space — for hotels, restaurants, residences, and commercial interiors. Natural light mastery and twilight exterior shots.',
    stat: '30+ Spaces',
  },
  {
    id: 6,
    title: 'Commercial Films',
    description: 'Short-form commercial videos for social media, brand films, reels and digital campaigns. From concept to final cut, we handle the full production pipeline.',
    stat: '20+ Films',
  },
  {
    id: 7,
    title: 'Creative Direction',
    description: 'End-to-end creative direction for brand identity shoots, campaign concepts, moodboarding, location scouting, talent casting and full shoot production management.',
    stat: '15+ Brands',
  },
];

export function WhatWeDoSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-24 md:py-36 px-6 md:px-10 bg-[#F2F2EF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#6B6B6B] font-medium mb-4">
              Our Services
            </p>
            <h2 className="heading-xl text-[clamp(3rem,5vw,6rem)] text-[#0A0A0A]">
              WHAT WE DO
            </h2>
          </div>
          <p className="text-sm text-[#6B6B6B] max-w-xs leading-relaxed font-light">
            A full-service visual production studio specialising in premium brand content.
          </p>
        </div>

        {/* Accordion */}
        <div className="accordion-item divide-y divide-[#0A0A0A]/10 border-t border-[#0A0A0A]/10">
          {services.map((service) => (
            <div key={service.id} className="accordion-item">
              <button
                onClick={() => setOpenId(openId === service.id ? null : service.id)}
                className="w-full flex items-center justify-between py-6 md:py-7 text-left group"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="text-[#6B6B6B] text-xs font-medium tracking-widest w-6">
                    {String(service.id).padStart(2, '0')}
                  </span>
                  <h3 className={`font-medium text-xl md:text-2xl tracking-tight transition-colors ${
                    openId === service.id ? 'text-[#0A0A0A]' : 'text-[#0A0A0A]/70 group-hover:text-[#0A0A0A]'
                  }`}>
                    {service.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6">
                  <span className="hidden md:block text-xs text-[#6B6B6B] tracking-widest">
                    {service.stat}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                    openId === service.id
                      ? 'bg-[#C7E200] border-[#C7E200]'
                      : 'border-[#0A0A0A]/20 group-hover:border-[#0A0A0A]'
                  }`}>
                    {openId === service.id ? (
                      <Minus size={12} className="text-[#0A0A0A]" />
                    ) : (
                      <Plus size={12} className="text-[#0A0A0A]" />
                    )}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-7 pl-12 md:pl-16 pr-14">
                      <p className="text-[#6B6B6B] text-sm md:text-base leading-relaxed font-light max-w-2xl">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
