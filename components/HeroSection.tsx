'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    let start = 0;
    const end = 150;
    const step = end / (2000 / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { el.textContent = end + '+'; clearInterval(timer); }
      else el.textContent = Math.floor(start) + '+';
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-10 pt-28 pb-12 overflow-hidden" style={{ background: '#F2F2EF' }}>
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'300\' height=\'300\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px 200px' }} />

      {/* Hero typography */}
      <div className="mt-8 flex-1 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0 }}
          className="text-xs tracking-[0.3em] uppercase font-medium mb-8"
          style={{ color: '#6B6B6B' }}
        >
          Photographer & Filmmaker
        </motion.p>

        {(['CREATIVE &', 'VISUAL', 'CONTENT'] as const).map((word, i) => (
          <div key={word} className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.15 + i * 0.12, ease: 'easeOut' }}
              className="heading-xl leading-none"
              style={{
                fontSize: 'clamp(4rem, 10vw, 11rem)',
                color: word === 'CONTENT' ? undefined : '#0A0A0A',
              }}
            >
              {word === 'CONTENT' ? (
                <span style={{ background: '#C7E200', color: '#0A0A0A', padding: '0 0.15em', display: 'inline-block' }}>
                  CONTENT
                </span>
              ) : word}
            </motion.h1>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex items-end justify-between pt-12"
      >
        <div className="max-w-sm">
          <p className="text-sm leading-relaxed font-light" style={{ color: '#6B6B6B' }}>
            We create visual stories that help brands stand out — from fashion campaigns and restaurant content to jewellery, products and interiors.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-12 text-right">
          <div>
            <p className="heading-xl text-4xl" style={{ color: '#0A0A0A' }}>
              <span ref={counterRef}>150+</span>
            </p>
            <p className="text-xs tracking-widest uppercase mt-1" style={{ color: '#6B6B6B' }}>Projects</p>
          </div>
          <div>
            <p className="heading-xl text-4xl" style={{ color: '#0A0A0A' }}>5+</p>
            <p className="text-xs tracking-widest uppercase mt-1" style={{ color: '#6B6B6B' }}>Years</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="hidden md:flex flex-col items-center gap-2"
          style={{ color: '#6B6B6B' }}
        >
          <div className="w-px h-12" style={{ background: 'rgba(10,10,10,0.2)' }} />
          <span className="text-xs tracking-[0.2em]" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
