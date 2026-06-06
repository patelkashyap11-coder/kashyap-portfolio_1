'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowLeft, Play } from 'lucide-react';

export interface MediaItem {
  src: string;
  type: 'image' | 'video';
  alt?: string;
  width?: number;
  height?: number;
}

interface GalleryPageProps {
  title: string;
  subtitle: string;
  description: string;
  media: MediaItem[];
  accentColor?: string;
}

export function GalleryPage({
  title,
  subtitle,
  description,
  media,
  accentColor = '#C7E200',
}: GalleryPageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + media.length) % media.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % media.length : null));

  const markLoaded = (i: number) => {
    setLoaded((prev) => new Set(prev).add(i));
  };

  // Distribute items into columns for masonry
  const columns = 3;
  const col1 = media.filter((_, i) => i % columns === 0);
  const col2 = media.filter((_, i) => i % columns === 1);
  const col3 = media.filter((_, i) => i % columns === 2);

  const colItems = [col1, col2, col3];
  const colOffsets = [0, 0, 0]; // used to get original index
  colItems.forEach((col, ci) => {
    colOffsets[ci] = ci;
  });

  const getOriginalIndex = (colIndex: number, itemIndex: number) =>
    itemIndex * columns + colIndex;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero header */}
      <div className="relative h-[50vh] md:h-[55vh] overflow-hidden flex flex-col justify-end px-6 md:px-14 pb-12 pt-28">
        {/* Gradient bg */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, #111 0%, #0a0a0a 60%, ${accentColor}08 100%)`,
          }}
        />
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, ${accentColor}15 0%, transparent 60%)`,
          }}
        />

        <Link
          href="/"
          className="relative flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs tracking-widest uppercase mb-8 w-fit"
        >
          <ArrowLeft size={12} />
          Back to Home
        </Link>

        <div className="relative">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-white/30 text-xs tracking-[0.3em] uppercase mb-4"
          >
            {subtitle}
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="heading-xl text-[clamp(3rem,7vw,8rem)] leading-none text-white"
            >
              {title}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-white/40 text-sm mt-5 max-w-md font-light leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>

      {/* Empty state */}
      {media.length === 0 && (
        <div className="flex flex-col items-center justify-center py-40 text-center px-6">
          <div className="w-16 h-16 border border-white/10 flex items-center justify-center mb-8">
            <div className="w-4 h-4 bg-white/10" />
          </div>
          <p className="text-white/30 text-sm mb-2">Gallery Coming Soon</p>
          <p className="text-white/15 text-xs max-w-xs">
            Add images and videos to{' '}
            <code className="text-[#C7E200]/50">public/{subtitle.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/</code>
          </p>
        </div>
      )}

      {/* Masonry Gallery */}
      {media.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="px-4 md:px-10 pb-20 pt-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {colItems.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-3 md:gap-4">
                {col.map((item, itemIndex) => {
                  const originalIndex = getOriginalIndex(colIndex, itemIndex);
                  const isLoaded = loaded.has(originalIndex);

                  return (
                    <motion.div
                      key={originalIndex}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: originalIndex * 0.05,
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="relative overflow-hidden cursor-pointer group bg-white/5"
                      onClick={() => openLightbox(originalIndex)}
                      style={{
                        aspectRatio:
                          colIndex === 1 && itemIndex % 2 === 0
                            ? '4/5'
                            : colIndex === 0 && itemIndex % 3 === 0
                            ? '4/3'
                            : '3/4',
                      }}
                    >
                      {/* Skeleton */}
                      {!isLoaded && (
                        <div className="absolute inset-0 bg-white/5 animate-pulse" />
                      )}

                      {item.type === 'video' ? (
                        <>
                          <video
                            src={item.src}
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            onLoadedData={() => markLoaded(originalIndex)}
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                              <Play size={16} className="text-white ml-1" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <img
                          src={item.src}
                          alt={item.alt || title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onLoad={() => markLoaded(originalIndex)}
                        />
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-white text-xs tracking-widest uppercase">View</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/97 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={16} />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest">
              {lightboxIndex + 1} / {media.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Media */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {media[lightboxIndex].type === 'video' ? (
                <video
                  src={media[lightboxIndex].src}
                  controls
                  autoPlay
                  className="max-w-[90vw] max-h-[85vh] object-contain"
                />
              ) : (
                <img
                  src={media[lightboxIndex].src}
                  alt={media[lightboxIndex].alt || title}
                  className="max-w-[90vw] max-h-[85vh] object-contain"
                />
              )}
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
