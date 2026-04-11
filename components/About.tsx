'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const STATS = [
  { value: '5+', label: 'Years Creating' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '5+', label: 'Competitions & Awards' },
  { value: '∞', label: 'Ideas Brewing' },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-8 md:px-16 lg:px-24 overflow-hidden"
      style={{ background: 'var(--linen)' }}
    >
      {/* Section number */}
      <div className="section-number mb-16">
        ROOM I — ARTIST STATEMENT
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: Photo */}
        <div className="lg:col-span-4 relative">
          <motion.div
            style={{ y: photoY }}
            className="relative"
          >
            {/* Frame decoration */}
            <div
              className="relative overflow-hidden"
              style={{
                border: '12px solid var(--linen)',
                boxShadow: '20px 20px 0 var(--latte)',
                transform: 'rotate(-1.5deg)',
              }}
            >
              <div
                className="w-full aspect-[3/4] flex items-center justify-center"
                style={{ background: 'var(--latte)', minHeight: 400 }}
              >
                <div className="text-center" style={{ color: 'var(--clockwork)' }}>
                  <Image src="/images/profile.jpeg" alt="Muzaina Munir" width={500} height={650} className="w-full object-cover" />
                </div>
              </div>
            </div>

            {/* Photo placard */}
            <div className="placard mt-4" style={{ transform: 'rotate(-1.5deg)' }}>
              <div className="font-mono text-xs tracking-widest" style={{ color: 'var(--clockwork)' }}>
                MUZAINA MUNIR
              </div>
              <div className="font-sans text-xs mt-1" style={{ color: 'var(--weathered)' }}>
                Portrait, 2025 — Karachi, Pakistan
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Text */}
        <div className="lg:col-span-8 pt-4">
          {/* Pull quote */}
          <FadeUp>
            <blockquote
              className="font-display mb-12"
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'var(--cafe-noir)',
              }}
            >
              "I build things that live at the intersection of{' '}
              <em style={{ color: 'var(--mauve)' }}>code and canvas</em>
              —where logic meets{' '}
              <em style={{ color: 'var(--clockwork)' }}>imagination.</em>"
            </blockquote>
          </FadeUp>

          {/* Bio */}
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="font-sans leading-relaxed mb-4" style={{ color: 'var(--clockwork)', fontSize: '1rem' }}>
                  I&apos;m a researcher and engineer based in Karachi, Pakistan — working at the intersection of AI systems, digital health, and algorithmic fairness. I design and build things that are rigorous, interpretable, and human.
                </p>
                <p className="font-sans leading-relaxed" style={{ color: 'var(--weathered)', fontSize: '0.95rem' }}>
                  My research explores how AI systems behave under real-world constraints — when data is sparse, infrastructure is limited, or decisions carry consequences. I care about building systems that remain reliable and explainable even when conditions aren&apos;t ideal.
                </p>
              </div>
              <div>
                <p className="font-sans leading-relaxed mb-4" style={{ color: 'var(--clockwork)', fontSize: '1rem' }}>
                  Alongside research, I&apos;m an artist — acrylic on canvas, generative systems, interactive installations. I believe the discipline of making art and the discipline of making software ask the same question: what does this need to be?
                </p>
                <p className="font-sans leading-relaxed" style={{ color: 'var(--weathered)', fontSize: '0.95rem' }}>
                  Currently completing my A Levels at Cedar College, Karachi, and building toward graduate research in AI.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Stats */}
          <FadeUp delay={0.25}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8" style={{ borderTop: '1px solid var(--latte)' }}>
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-display mb-1"
                    style={{ fontSize: '2.5rem', color: 'var(--clockwork)', lineHeight: 1 }}
                  >
                    {stat.value}
                  </div>
                  <div className="exhibition-label" style={{ color: 'var(--weathered)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Decorative floating label */}
      <div
        className="absolute top-32 right-8 font-mono text-xs tracking-widest opacity-10 select-none hidden lg:block"
        style={{ color: 'var(--cafe-noir)', writingMode: 'vertical-rl' }}
      >
        ACRYLIC ON SILICON — 2025
      </div>
    </section>
  );
}
