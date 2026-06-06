'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  href: string;
  videoSrc?: string;
  imageSrc?: string;
  index: number;
}

export function CategorySection({ title, href, videoSrc, imageSrc, index }: CategorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden video-section group"
    >
      {/* Background */}
      <motion.div style={{ scale }} className="absolute inset-0">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
              backgroundColor: getPlaceholderColor(index),
            }}
          />
        )}
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-700" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-14">
        <div className="flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/50 text-xs tracking-[0.3em] uppercase mb-3 font-medium"
            >
              {String(index + 1).padStart(2, '0')} / 05
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="heading-xl text-white text-[clamp(3rem,6vw,7rem)] leading-none"
            >
              {title}
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href={href}
              className="flex items-center gap-3 text-white border border-white/30 hover:border-[#C7E200] hover:text-[#C7E200] hover:bg-[#C7E200]/10 transition-all duration-400 px-6 py-3 text-sm tracking-widest uppercase font-medium group/btn"
            >
              View Work
              <ArrowRight
                size={14}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function getPlaceholderColor(index: number): string {
  const colors = ['#1a1a1a', '#111111', '#0d0d0d', '#151515', '#0a0a0a'];
  return colors[index % colors.length];
}
