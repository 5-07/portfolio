'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ONGOING = [
  {
    id: 'WIP-001',
    title: 'Sweeten — Clinical Validation',
    category: 'Research / Digital Health',
    description: 'Extending Sweeten into a clinician-validated study. Current phase involves real patient testing in collaboration with the Primary Care Diabetes Association Pakistan and members of the WHO Diabetes Forum. Research focus: evaluating whether hybrid AI + deterministic plan outputs align with clinician recommendations, and adapting ADA thresholds for South Asian metabolic profiles.',
    progress: 45,
    status: 'Active',
    tags: ['Next.js', 'Firebase', 'Gemini API', 'Clinical Research'],
    startDate: 'Jan 2025',
    accent: 'var(--clockwork)',
  },
];

const STATUS_COLORS: Record<string, string> = {
  'Active': '#7FB069',
  'Paused': '#B8976A',
  'Exploring': '#755151',
  'Shipping Soon': '#6A9CB8',
};

function OngoingCard({ item, index }: { item: typeof ONGOING[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      className="relative p-8"
      style={{
        border: '1px solid rgba(68,66,45,0.2)',
        background: 'rgba(255,249,243,0.4)',
        backdropFilter: 'blur(4px)',
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      {/* Corner decoration */}
      <div
        className="absolute top-0 left-0 w-6 h-6"
        style={{ borderTop: `2px solid ${item.accent}`, borderLeft: `2px solid ${item.accent}` }}
      />
      <div
        className="absolute bottom-0 right-0 w-6 h-6"
        style={{ borderBottom: `2px solid ${item.accent}`, borderRight: `2px solid ${item.accent}` }}
      />

      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: STATUS_COLORS[item.status] || 'white' }}
            />
            <span className="font-mono text-xs tracking-widest" style={{ color: STATUS_COLORS[item.status], opacity: 0.8 }}>
              {item.status.toUpperCase()}
            </span>
          </div>
          <h3
            className="font-display"
            style={{ fontSize: '1.8rem', color: 'var(--cafe-noir)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            {item.title}
          </h3>
        </div>
        <div className="text-right">
          <div className="font-mono text-xs" style={{ color: 'var(--weathered)', opacity: 0.5 }}>
            {item.id}
          </div>
          <div className="font-mono text-xs mt-1" style={{ color: 'var(--weathered)', opacity: 0.5 }}>
            Since {item.startDate}
          </div>
        </div>
      </div>

      {/* Category + tags */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="exhibition-label" style={{ color: item.accent }}>
          {item.category}
        </span>
        {item.tags.map(tag => (
          <span
            key={tag}
            className="font-mono text-xs px-2 py-0.5"
            style={{
              background: 'rgba(68,50,35,0.06)',
              color: 'var(--black)',
              border: '1px solid rgba(68,50,35,0.1)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="font-sans text-sm leading-relaxed mb-8" style={{ color: 'var(--black)' }}>
        {item.description}
      </p>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--weathered)', opacity: 0.6 }}>
            PROGRESS
          </span>
          <span className="font-mono text-xs" style={{ color: item.accent }}>
            {item.progress}%
          </span>
        </div>
        <div
          className="h-px relative overflow-hidden"
          style={{ background: 'rgba(68,50,35,0.12)' }}
        >
          <motion.div
            className="absolute left-0 top-0 h-full"
            style={{ background: item.accent }}
            initial={{ width: '0%' }}
            animate={inView ? { width: `${item.progress}%` } : {}}
            transition={{ duration: 1.2, delay: index * 0.1 + 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Ongoing() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });

  return (
    <section
      id="ongoing"
      className="py-24 px-8 md:px-16 lg:px-24"
      style={{ background: 'var(--deep-olive)' }}
    >
      {/* Header */}
      <div className="mb-16" ref={headerRef}>
        <motion.div
          className="section-number mb-4"
          style={{ color: 'rgba(255,249,243,0.3)' }}
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
        >
          ROOM V — WORKS IN PROGRESS
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
            Currently
            <br />
            <em style={{ color: 'var(--latte)' }}>Building</em>
          </motion.h2>

          <motion.div
            className="flex items-center gap-3 px-4 py-2"
            style={{
              border: '1px solid rgba(219,196,165,0.3)',
              background: 'rgba(219,196,165,0.05)',
            }}
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(219,196,165,0.5)' }}>
              UNDER CONSTRUCTION
            </span>
            <span className="blink font-mono text-xs" style={{ color: 'rgba(219,196,165,0.4)' }}>_</span>
          </motion.div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ONGOING.map((item, i) => (
          <OngoingCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
