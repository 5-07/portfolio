'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EXPERIENCE = [
  {
    id: '01',
    role: 'General Secretary',
    org: 'Cedar Codes',
    period: '2024 — Present',
    type: 'work',
    description: 'Awarded the position by Cedar Enrichment Program based on academic and extracurricular rigor. Hosted multiple successful events with up to 90% project ship rates from participants and mentored junior members. Built collaborative workflows and developed skills in team management, recruitment, and structured feedback.',
    skills: ['Leadership', 'Management', 'Event Planning', 'Recruitment', 'Networking'],
    current: true,
  },
  {
    id: '02',
    role: 'AI SWE Fellow',
    org: 'Headstarter',
    period: 'June – Aug 2024',
    type: 'work',
    description: 'Selected from a global pool of over 40,000 applicants. Collaborated within an international team under mentorship from professionals at major technology companies. Refined end-to-end product development skills from ideation to deployment, and developed the ability to communicate technical ideas effectively in high-performing, distributed environments.',
    skills: ['Python', 'Data Analysis', 'APIs', 'Collaboration', 'Web App Development', 'Leadership'],
    current: false,
  },
  {
    id: '03',
    role: 'Social Intern',
    org: 'Foundation Fighting Poverty',
    period: '2025',
    type: 'volunteer',
    description: 'Contributed to fundraising and outreach initiatives supporting financially vulnerable communities. Supported campaign strategy, donor outreach, and content creation using digital platforms to expand visibility and engagement. Coordinated fundraising efforts and organized donation logistics for on-ground distribution.',
    skills: ['Leadership', 'Events', 'Community'],
    current: false,
  },
  {
    id: '04',
    role: 'Head Girl',
    org: 'Roots International School',
    period: '2024',
    type: 'work',
    description: 'Elected Head Girl, serving as the primary student representative and link between the student body and administration. Led student initiatives, organized events, and represented the institution at multiple inter-school and international forums in Karachi — contributing to discussions on finance, health, youth, and technology. Participated in competitive debate and public speaking across diverse collaborative settings.',
    skills: ['Communication', 'Public Speaking', 'Debate', 'Critical Thinking', 'Leadership'],
    current: false,
  },
];

const TYPE_LABELS: Record<string, { label: string; color: string }> = {
  work: { label: 'Position', color: 'var(--clockwork)' },
  education: { label: 'Education', color: 'var(--cedar)' },
  volunteer: { label: 'Volunteer', color: 'var(--mauve)' },
};

function ExperienceItem({ item, index }: { item: typeof EXPERIENCE[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const typeInfo = TYPE_LABELS[item.type] || TYPE_LABELS.work;

  return (
    <motion.div
      ref={ref}
      className="relative pl-10 md:pl-16 pb-12"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-2 w-3 h-3 rounded-full z-10"
        style={{
          background: item.current ? typeInfo.color : 'transparent',
          border: `2px solid ${typeInfo.color}`,
          boxShadow: item.current ? `0 0 12px ${typeInfo.color}60` : 'none',
        }}
      />

      {/* Placard-style card */}
      <div
        className="p-6 md:p-8"
        style={{
          background: 'rgba(255,249,243,0.6)',
          border: '1px solid rgba(219,196,165,0.4)',
          backdropFilter: 'blur(4px)',
        }}
      >
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="font-mono text-xs px-2 py-0.5"
                style={{
                  background: `${typeInfo.color}18`,
                  color: typeInfo.color,
                  border: `1px solid ${typeInfo.color}30`,
                }}
              >
                {typeInfo.label}
              </span>
              {item.current && (
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-mono text-xs" style={{ color: 'rgba(68,50,35,0.5)' }}>Current</span>
                </div>
              )}
            </div>
            <h3
              className="font-display mb-1"
              style={{ fontSize: '1.5rem', color: 'var(--cafe-noir)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              {item.role}
            </h3>
            <div className="font-mono text-sm" style={{ color: 'var(--clockwork)', opacity: 0.7 }}>
              {item.org}
            </div>
          </div>
          <div
            className="font-mono text-xs whitespace-nowrap"
            style={{ color: 'var(--weathered)', opacity: 0.6 }}
          >
            {item.period}
          </div>
        </div>

        <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: 'var(--weathered)' }}>
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.skills.map(skill => (
            <span
              key={skill}
              className="font-mono text-xs px-2 py-1"
              style={{
                background: 'rgba(68,50,35,0.06)',
                color: 'var(--clockwork)',
                border: '1px solid rgba(68,50,35,0.1)',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });

  return (
    <section
      id="experience"
      className="py-24 px-8 md:px-16 lg:px-24"
      style={{ background: 'var(--linen)' }}
    >
      {/* Header */}
      <div className="mb-16" ref={headerRef}>
        <motion.div
          className="section-number mb-4"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
        >
          ROOM VI — THE ARCHIVE
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
            Positions &amp;
            <br />
            <em style={{ color: 'var(--cedar)' }}>Experience</em>
          </motion.h2>
          <motion.p
            className="font-sans text-sm max-w-xs"
            style={{ color: 'var(--weathered)' }}
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            A chronological record of where I&apos;ve worked, studied, and contributed.
          </motion.p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl">
        {/* Vertical line */}
        <div
          className="absolute left-1.5 md:left-1.5 top-3 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, var(--latte), transparent)' }}
        />
        {EXPERIENCE.map((item, i) => (
          <ExperienceItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
