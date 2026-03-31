'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

/*
  ═══════════════════════════════════════════════════════════════
  - image: add to /public/images/art/ and update path
  - medium: e.g. "Acrylic on Canvas", "Digital Illustration", "Photography"
  - dimensions: actual dimensions if physical work
  ═══════════════════════════════════════════════════════════════
*/
const ARTWORKS = [
  {
    id: 'ART-001',
    title: 'Untitled I',
    subtitle: '',
    medium: 'Acrylic on Paper',
    year: '2025',
    dimensions: '4000 × 5000 px',
    image: '/images/art/blackone.jpeg',
    span: 'small', // large | medium | small
    bg: '#D4C5B0',
    accent: 'var(--clockwork)',
  },
  {
    id: 'ART-002',
    title: 'Untitled II',
    subtitle: '[YOUR ARTWORK TITLE]',
    medium: 'Acrylic on Canvas',
    year: '2024',
    dimensions: '60 × 80 cm',
    image: '/images/art/callig.jpg',
    span: 'small',
    bg: '#C9C0B8',
    accent: 'var(--mauve)',
  },
  {
    id: 'ART-003',
    title: 'Untitled III',
    subtitle: '[YOUR ARTWORK TITLE]',
    medium: 'Photography',
    year: '2024',
    dimensions: '3:2 ratio',
    image: '/images/art/blacktwo.jpeg',
    span: 'small',
    bg: '#BDC4B6',
    accent: 'var(--cedar)',
  },
  {
    id: 'ART-004',
    title: 'Untitled V',
    subtitle: '[YOUR ARTWORK TITLE]',
    medium: 'Digital Illustration',
    year: '2023',
    dimensions: '8000 × 8000 px',
    image: '/images/art/posteri.jpg',
    span: 'small',
    bg: '#B8B0A8',
    accent: 'var(--cafe-noir)',
  },
    {
    id: 'ART-005',
    title: 'Untitled VI',
    subtitle: '',
    medium: 'Digital Illustration',
    year: '2024',
    dimensions: '30 × 42 cm',
    image: '/images/art/posterii.jpg',
    span: 'small',
    bg: '#C8BEB4',
    accent: 'var(--weathered)',
  },
    {
    id: 'ART-006',
    title: 'Phantom',
    subtitle: 'Brand Concept',
    medium: 'Digital Illustration',
    year: '2024',
    dimensions: '30 × 42 cm',
    image: '/images/art/phantom.jpg',
    span: 'small',
    bg: '#C8BEB4',
    accent: 'var(--weathered)',
  },
  {
    id: 'ART-007',
    title: 'Twilight Waves',
    subtitle: '',
    medium: 'Acrylic on Paper',
    year: '2022',
    dimensions: '30 × 42 cm',
    image: '/images/art/wave bg.jpg',
    span: 'large',
    bg: '#C8BEB4',
    accent: 'var(--weathered)',
  },
    {
    id: 'ART-008',
    title: 'Hectic',
    subtitle: 'Inspired by RMs Hectic visualizer',
    medium: 'Acrylic on Paper',
    year: '2022',
    dimensions: '30 × 42 cm',
    image: '/images/art/hecticbg.jpg',
    span: 'large',
    bg: '#C8BEB4',
    accent: 'var(--weathered)',
  },
    {
    id: 'ART-009',
    title: 'The Dancer',
    subtitle: '',
    medium: 'Pencil on Paper',
    year: '2023',
    dimensions: 'Variable',
    image: '/images/art/dancerbg.jpg',
    span: 'large',
    bg: '#C4B8A8',
    accent: 'var(--deep-olive)',
  },
      {
    id: 'ART-010',
    title: '',
    subtitle: '',
    medium: 'Acrylic on Paper',
    year: '2023',
    dimensions: 'Variable',
    image: '/images/art/bluewavess.jpeg',
    span: 'large',
    bg: '#C4B8A8',
    accent: 'var(--deep-olive)',
  },

];

function ArtCard({
  art,
  index,
  onClick,
}: {
  art: typeof ARTWORKS[0];
  index: number;
  onClick: () => void;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const spanClass = art.span === 'large' ? 'md:col-span-2 md:row-span-2' : art.span === 'medium' ? 'md:col-span-2' : '';

  return (
    <motion.div
      ref={ref}
      className={`group cursor-none relative ${spanClass}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      onClick={onClick}
      data-cursor
    >
      {/* Frame */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: art.span === 'large' ? '4/3' : art.span === 'medium' ? '16/7' : '1/1',
          border: '8px solid var(--linen)',
          boxShadow: '0 4px 24px rgba(68,50,35,0.1)',
        }}
      >
        {art.image ? (
          <Image
            src={art.image}
            alt={art.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-103"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-2"
            style={{ background: art.bg }}
          >
            <div className="font-mono text-xs tracking-widest opacity-40 text-center" style={{ color: art.accent }}>
              [ YOUR ARTWORK HERE ]<br />
              {art.id}
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400"
          style={{ background: 'rgba(68,50,35,0.4)' }}
        >
          <div className="font-mono text-white text-xs tracking-widest px-4 py-2 border border-white/40">
            VIEW WORK
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="pt-3 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-display text-lg" style={{ color: 'var(--cafe-noir)', letterSpacing: '-0.01em' }}>
              {art.title}
            </div>
            <div className="exhibition-label mt-1" style={{ color: art.accent }}>
              {art.medium} — {art.year}
            </div>
          </div>
          <div className="font-mono text-xs opacity-30" style={{ color: 'var(--cafe-noir)' }}>
            {art.id}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Artwork() {
  const [selected, setSelected] = useState<typeof ARTWORKS[0] | null>(null);
  const [headerRef, headerInView] = useInView({ triggerOnce: true });

  return (
    <section
      id="artwork"
      className="py-24 px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{ background: '#F5EFE8' }}
    >
      {/* Header */}
      <div className="mb-16" ref={headerRef}>
        <motion.div
          className="section-number mb-4"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
        >
          ROOM III — ARTWORKS
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
              color: 'var(--cafe-noir)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            The Artist&apos;s
            <br />
            <em style={{ color: 'var(--mauve)' }}>Collection</em>
          </motion.h2>
          <motion.p
            className="font-sans text-sm max-w-xs"
            style={{ color: 'var(--weathered)' }}
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Selected works across digital, physical, and experimental mediums.
            Click to expand.
          </motion.p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
        {ARTWORKS.map((art, i) => (
          <ArtCard
            key={art.id}
            art={art}
            index={i}
            onClick={() => setSelected(art)}
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full mx-8"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Image */}
              <div
                className="w-full"
                style={{ aspectRatio: '4/3', background: selected.bg, border: '12px solid rgba(255,249,243,0.08)' }}
              >
                {selected.image ? (
                  <Image src={selected.image} alt={selected.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-mono text-xs tracking-widest opacity-40 text-white">
                      [ YOUR ARTWORK — {selected.id} ]
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <div className="font-display text-2xl text-white" style={{ letterSpacing: '-0.02em' }}>
                    {selected.title}
                  </div>
                  <div className="font-mono text-xs tracking-widest text-white/50 mt-1">
                    {selected.medium} — {selected.year} — {selected.dimensions}
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="font-mono text-xs text-white/40 hover:text-white transition-colors tracking-widest"
                >
                  × CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
