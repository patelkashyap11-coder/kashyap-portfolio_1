'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-10 bg-[#0A0A0A] overflow-hidden relative">
      {/* Accent background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C7E200]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#6B6B6B] text-xs tracking-[0.3em] uppercase mb-8"
        >
          Ready to create?
        </motion.p>

        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="heading-xl text-white text-[clamp(3.5rem,7vw,9rem)] leading-none"
          >
            LET'S CREATE
          </motion.h2>
        </div>

        <div className="overflow-hidden mb-12 md:mb-16">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="heading-xl leading-none"
          >
            <span className="text-[#C7E200] text-[clamp(3.5rem,7vw,9rem)]">TOGETHER</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-4 bg-[#C7E200] text-[#0A0A0A] px-8 py-4 font-medium text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
          >
            Contact Me
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <a
            href="https://wa.me/919712727007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-sm tracking-widest uppercase hover:text-[#C7E200] transition-colors"
          >
            WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
