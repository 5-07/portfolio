'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TITLES = ['Artist & Engineer', 'Creative Technologist', 'Builder of Worlds', 'Artist & Engineer'];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visitorCount] = useState(() => Math.floor(Math.random() * 800 + 1200));

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx(i => (i + 1) % (TITLES.length - 1));
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'var(--cafe-noir)' }}
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          style={{ filter: 'grayscale(40%) contrast(1.1)' }}
        >
          {/* 
            ████████████████████████████████████████████████████
            REPLACE THIS SOURCE with a local video file in /public/videos/
            or keep the fallback gradient. Recommended: download a free
            looping abstract art video from Pexels.com (search "abstract art loop")
            and save as /public/videos/hero-bg.mp4
            ████████████████████████████████████████████████████
          */}
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient fallback when video not loaded */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(113,88,62,0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(117,81,81,0.2) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Scanlines */}
      <div className="scanlines" />

      {/* Guggenheim spiral SVG decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none z-[2] opacity-10">
        <svg viewBox="0 0 600 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M600 0 C200 0 50 150 50 450 C50 750 200 900 600 900" stroke="white" strokeWidth="1" fill="none"/>
          <path d="M600 80 C250 80 130 200 130 450 C130 700 250 820 600 820" stroke="white" strokeWidth="0.8" fill="none"/>
          <path d="M600 160 C300 160 210 250 210 450 C210 650 300 740 600 740" stroke="white" strokeWidth="0.6" fill="none"/>
          <path d="M600 240 C360 240 290 310 290 450 C290 590 360 660 600 660" stroke="white" strokeWidth="0.4" fill="none"/>
          <line x1="50" y1="450" x2="600" y2="450" stroke="white" strokeWidth="0.3" strokeDasharray="4 8"/>
        </svg>
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex justify-between items-center px-8 pt-28 pb-4">
        <motion.div
          className="exhibition-label text-white/40"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
        >
          Gallery No. 001
        </motion.div>
        <motion.div
          className="font-mono text-white/30 text-xs"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
        >
          {visitorCount.toLocaleString()} visitors this season
        </motion.div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        {/* Eyebrow */}
        <motion.div
          className="font-mono text-white/40 text-xs tracking-widest mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          — A CURATED EXHIBITION OF CODE, ART & IDEAS
        </motion.div>

        {/* Name — staggered character reveal */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-display text-white leading-none"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 11rem)',
              letterSpacing: '-0.03em',
              lineHeight: 0.88,
            }}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: 1.3, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            Muzaina
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="font-display text-white leading-none"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 11rem)',
              letterSpacing: '-0.03em',
              lineHeight: 0.88,
              fontStyle: 'italic',
              opacity: 0.55,
            }}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: 1.45, duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            Munir
          </motion.h1>
        </div>

        {/* Rotating title */}
        <div className="h-8 overflow-hidden mb-12">
          <motion.div
            key={titleIdx}
            className="font-mono text-white/60 text-sm tracking-widest"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            [ {TITLES[titleIdx].toUpperCase()} ]
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-12 bg-white/20 relative overflow-hidden">
              <motion.div
                className="absolute top-0 w-full"
                style={{ background: 'white', height: '40%' }}
                animate={{ y: ['0%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <span className="font-mono text-white/30 text-xs tracking-widest rotate-90 mt-2" style={{ writingMode: 'vertical-rl' }}>
              ENTER EXHIBITION
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom exhibition details */}
      <motion.div
        className="relative z-10 flex justify-between items-end px-8 pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <div className="font-mono text-white/25 text-xs">
          KARACHI, PK<br />
          <span className="text-white/40">EST. 2002</span>
        </div>
        <div className="font-mono text-white/25 text-xs text-right">
          PORTFOLIO<br />
          <span className="text-white/40">SEASON 2025</span>
        </div>
      </motion.div>

      {/* White curved bottom edge — Guggenheim ramp */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[3]"
        style={{
          height: '80px',
          background: 'var(--linen)',
          borderRadius: '50% 50% 0 0 / 80px 80px 0 0',
        }}
      />
    </section>
  );
}
