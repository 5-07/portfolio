'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/*
  ═══════════════════════════════════════════════════════════════
  placement: '1st', '2nd', '3rd', 'Finalist', 'Honorable Mention', 'Participant'
  ═══════════════════════════════════════════════════════════════
*/
const COMPETITIONS = [
    {
    id: '01',
    name: 'Outstanding Cambridge Learner Awards',
    organizer: 'Cambridge International',
    placement: 'Top in Sindh and Balochistan for English as a Second Language',
    year: '2025',
    category: 'Academia',
    description: 'Emerged as a distinction holder for my IGCSE exams, getting the highest possible mark in English',
    prize: 'Award',
    accent: '#8B9EA8',
  },
  {
    id: '02',
    name: 'ENIGMA XIII',
    organizer: 'Institute of Business Administration, Karachi',
    placement: 'Runner-Up',
    year: '2025',
    category: 'Multi-Module Competition',
    description: 'Made an impressionist painting, acrylic on canvas competing against professional artists from all over the city. Awarded by a judge panel of top artists across Pakistan',
    prize: 'Award',
    accent: '#8B9EA8', // Gold
  },
  {
    id: '03',
    name: 'DNA Art For Change',
    organizer: 'Discovering New Artists',
    placement: 'Finalist',
    year: '2024',
    category: 'Environmental Art Challenge',
    description: 'Won against artists from across the country to have my work displayed at an art exhibition. All proceedings went to children in need',
    prize: 'Gold Medal and Certificate',
    accent: '#9BA890', // Silver
  },
  {
    id: '04',
    name: 'Headstarter Fellowship Hiring Hackathon',
    organizer: 'Headstarter',
    placement: 'Finalist',
    year: '2024',
    category: 'Hackathon',
    description: 'Built a high-performance web scraper for the million-dollar startup Olostep. Emerged as top finalists from dozens of teams, colllaborating across the globe.',
    prize: '',
    accent: '#A87C6A', // Bronze
  },
  {
    id: '05',
    name: 'Policy Hackathon',
    organizer: 'Habib University',
    placement: 'Participant',
    year: '2025',
    category: 'Hackathon',
    description: 'Participated in this hackathon and conference, learned from UN representatives and professors about policy making across South Asia .',
    prize: 'Certificate',
    accent: '#A87C6A', // Bronze
  },

];

const PLACEMENT_ICONS: Record<string, string> = {
  'Top in Sindh and Balochistan for English as a Second Language': '◈',
  'Runner-Up': '◇',
  '3rd Place': '△',
  'Finalist': '○',
  'Honorable Mention': '◻',
  'Participant': '·',
};

function CompCard({ comp, index }: { comp: typeof COMPETITIONS[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      style={{
        borderBottom: '1px solid rgba(219,196,165,0.15)',
        paddingBottom: '2rem',
        marginBottom: '2rem',
      }}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Index */}
        <div className="col-span-1">
          <div className="font-mono text-xs" style={{ color: 'rgba(219,196,165,0.3)' }}>
            {comp.id}
          </div>
        </div>

        {/* Icon + Placement */}
        <div className="col-span-2 md:col-span-1">
          <div className="font-display text-3xl" style={{ color: comp.accent, lineHeight: 1 }}>
            {PLACEMENT_ICONS[comp.placement] || '·'}
          </div>
        </div>

        {/* Main content */}
        <div className="col-span-9 md:col-span-7">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span
              className="font-mono text-xs px-2 py-0.5 rounded-sm"
              style={{ background: `${comp.accent}22`, color: comp.accent, border: `1px solid ${comp.accent}44` }}
            >
              {comp.placement}
            </span>
            <span className="font-mono text-xs" style={{ color: 'rgba(219,196,165,0.4)' }}>
              {comp.category}
            </span>
          </div>
          <h3
            className="font-display mb-1"
            style={{ fontSize: '1.6rem', color: 'var(--linen)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            {comp.name}
          </h3>
          <div className="font-mono text-xs mb-3" style={{ color: 'rgba(219,196,165,0.5)' }}>
            {comp.organizer}
          </div>
          <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(219,196,165,0.6)' }}>
            {comp.description}
          </p>
        </div>

        {/* Year + Prize */}
        <div className="col-span-12 md:col-span-3 text-right hidden md:block">
          <div
            className="font-display text-4xl mb-2"
            style={{ color: comp.accent, opacity: 0.5, letterSpacing: '-0.05em' }}
          >
            {comp.year}
          </div>
          <div className="font-mono text-xs" style={{ color: 'rgba(219,196,165,0.4)' }}>
            {comp.prize}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Competitions() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });

  return (
    <section
      id="competitions"
      className="py-24 px-8 md:px-16 lg:px-24"
      style={{ background: 'var(--cafe-noir)' }}
    >
      {/* Marquee ticker */}
      <div
        className="mb-16 py-4 overflow-hidden"
        style={{ borderTop: '1px solid rgba(219,196,165,0.15)', borderBottom: '1px solid rgba(219,196,165,0.15)' }}
      >
        <div className="flex gap-12 marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="font-mono text-xs tracking-widest whitespace-nowrap" style={{ color: 'rgba(219,196,165,0.3)' }}>
              COMPETITIONS & AWARDS ◈ RECOGNITION ◈ ACHIEVEMENT ◈
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="mb-16" ref={headerRef}>
        <motion.div
          className="section-number mb-4"
          style={{ color: 'rgba(219,196,165,0.4)' }}
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
        >
          ROOM IV — AWARDS CABINET
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 0.9,
              color: 'var(--linen)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Accolades &amp;
            <br />
            <em style={{ color: 'var(--latte)' }}>Recognition</em>
          </motion.h2>
          <motion.p
            className="font-sans text-sm max-w-xs"
            style={{ color: 'rgba(219,196,165,0.5)' }}
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            A record of competitions entered, challenges tackled, and recognition earned.
          </motion.p>
        </div>
      </div>

      {/* Competition list */}
      <div>
        {COMPETITIONS.map((comp, i) => (
          <CompCard key={comp.id} comp={comp} index={i} />
        ))}
      </div>
    </section>
  );
}
