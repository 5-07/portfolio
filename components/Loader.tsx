'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const iterRef = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let frame = 0;
      const interval = setInterval(() => {
        setDisplayed(
          text.split('').map((char, i) => {
            if (char === ' ') return ' ';
            if (i < frame / 2) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join('')
        );
        frame++;
        if (frame >= text.length * 2 + 10) {
          clearInterval(interval);
          setDisplayed(text);
        }
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayed}</span>;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);
  const [curtainHeight, setCurtainHeight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          // Start curtain lift
          setTimeout(() => setCurtainHeight(100), 200);
          setTimeout(() => {
            setShow(false);
            onComplete();
          }, 1200);
          return 100;
        }
        return p + Math.random() * 8 + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Curtain reveal */}
          <div
            className="loader-curtain"
            style={{ height: `${curtainHeight}%` }}
          />

          {/* Scanlines */}
          <div className="scanlines" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-8 text-center">
            {/* Exhibition number */}
            <motion.div
              className="exhibition-label text-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Exhibition No. 001 — MMXXV
            </motion.div>

            {/* Title */}
            <motion.h1
              className="font-display text-white"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <ScrambleText text="MUZAINA" delay={600} />
              <br />
              <span style={{ opacity: 0.4, fontStyle: 'italic', fontSize: '0.7em' }}>
                <ScrambleText text="MUNIR" delay={900} />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              className="font-mono text-white/50 text-xs tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              [ ARTIST & ENGINEER — CREATIVE TECHNOLOGIST ]
            </motion.div>

            {/* Progress */}
            <motion.div
              className="w-64"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-mono text-white/30 text-xs">LOADING EXHIBITION</span>
                <span className="font-mono text-white/30 text-xs">{Math.min(100, Math.floor(progress))}%</span>
              </div>
              <div className="h-px bg-white/10 relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-white transition-all duration-100"
                  style={{ width: `${Math.min(100, progress)}%` }}
                />
              </div>
            </motion.div>

            {/* Bottom label */}
            <motion.div
              className="font-mono text-white/20 text-xs tracking-widest absolute bottom-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              KARACHI / PORTFOLIO / 2025
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
