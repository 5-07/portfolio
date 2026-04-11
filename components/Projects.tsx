'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const PROJECTS = [
  {
    id: '01',
    title: 'Sweeten',
    subtitle: '',
    description: 'A research-driven digital health system investigating how hybrid AI and deterministic architectures can deliver safe, personalized diabetes support under real-world constraints. Built on a failure-first design philosophy — fully functional and interpretable even when AI is unavailable. Grounded in ADA clinical guidelines. Currently in patient testing with support from the Primary Care Diabetes Association Pakistan and members of the WHO Diabetes Forum.',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'Gemini API', 'Tailwind CSS'],
    medium: 'Research System / Full-Stack Web Application',
    year: '2025',
    link: 'https://sweeten-3aa2.vercel.app/',
    image: '/images/sweeten landing.jpeg',
    imageAlt: 'Sweeten landing screenshot',
    accent: 'var(--clockwork)',
    bg: 'var(--latte)',
  },
  {
    id: '02',
    title: 'Gender Bias in Profession Classification',
    subtitle: '',
    description: 'Counterfactual evaluation of a DistilBERT profession classifier using the Bias in Bios dataset. Measures how swapping gendered language markers in professional biographies changes model predictions and confidence scores — across 28 professions and STEM vs. Non-STEM categories. Produces two bias metrics: flip rate and confidence shift.',
    tech: ['Python', 'PyTorch', 'HuggingFace Transformers', 'DistilBERT', 'seaborn'],
    medium: 'NLP Research / Bias Evaluation',
    year: '2025',
    link: 'https://github.com/5-07/Gender-Bias-Project',
    image: '',
    imageAlt: 'Gender bias project',
    accent: 'var(--mauve)',
    bg: '#e8d9d9',
  },
  {
    id: '03',
    title: 'Spidex',
    subtitle: '',
    description: 'High-performance web scraper built for Olostep during the Headstarter Fellowship hiring hackathon. Selected as a finalist from dozens of international teams. Built collaboratively with engineers across multiple countries under mentorship from professionals at major technology companies.',
    tech: ['React', 'Node.js', 'Python'],
    medium: 'Full-Stack Web Application',
    year: '2024',
    link: 'https://github.com/kambohdiv/Olostep-webscraper',
    image: '/images/spidex landing.jpeg',
    imageAlt: 'Spidex screenshot',
    accent: 'var(--cedar)',
    bg: '#d9e0d4',
  },
  {
    id: '04',
    title: 'Trajectory.AI',
    subtitle: '',
    description: 'A career pathway generator with an integrated resume parser that produces personalized career options based on a user\'s experiences and skills. Designed for students navigating uncertain paths.',
    tech: ['Python', 'TensorFlow', 'React'],
    medium: 'Machine Learning / AI',
    year: '2024',
    link: 'https://github.com/michaelvdang/trajectory',
    image: '/images/traj landing.jpeg',
    imageAlt: 'Trajectory screenshot',
    accent: 'var(--deep-olive)',
    bg: '#d8d5c8',
  },
  {
    id: '05',
    title: 'Daydream Karachi',
    subtitle: '',
    description: 'Registration platform for Daydream Karachi, a Game Jam and Hackathon hosted by Cedar Codes and funded by Hack Club. Garnered over 700 sign-ups from across Karachi.',
    tech: ['Next.js', 'TypeScript'],
    medium: 'Web Application',
    year: '2025',
    link: 'https://daydream.hackclub.com/karachi',
    image: '/images/daydream.jpg',
    imageAlt: 'Daydream Karachi screenshot',
    accent: 'var(--cafe-noir)',
    bg: '#ccc4ba',
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="gallery-card group"
      style={{
        width: 'clamp(300px, 35vw, 480px)',
        flexShrink: 0,
      }}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Image frame */}
      <div className="gallery-frame" style={{ aspectRatio: '4/3', background: project.bg, overflow: 'hidden', position: 'relative' }}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8" style={{ background: project.bg }}>
            <div
              className="font-display mb-3"
              style={{ fontSize: '4rem', color: project.accent, opacity: 0.3, lineHeight: 1 }}
            >
              {project.id}
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%)' }}
        >
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span
                key={t}
                className="font-mono text-xs px-2 py-1 rounded-sm"
                style={{ background: 'rgba(255,249,243,0.15)', color: 'var(--linen)', border: '1px solid rgba(255,249,243,0.2)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Index badge */}
        <div
          className="absolute top-4 left-4 font-mono text-xs"
          style={{ color: project.accent, opacity: 0.6 }}
        >
          {project.id}
        </div>
      </div>

      {/* Placard */}
      <div className="placard" style={{ borderColor: 'var(--latte)' }}>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3
              className="font-display mb-0.5"
              style={{ fontSize: '1.4rem', color: 'var(--cafe-noir)', letterSpacing: '-0.01em' }}
            >
              {project.title}
            </h3>
            <div className="exhibition-label" style={{ color: project.accent }}>
              {project.medium} — {project.year}
            </div>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest px-3 py-1.5 transition-colors hover:opacity-70"
            style={{
              border: `1px solid ${project.accent}`,
              color: project.accent,
              flexShrink: 0,
              marginLeft: '1rem',
            }}
          >
            VIEW →
          </a>
        </div>
        <p className="font-sans text-sm leading-relaxed mt-3" style={{ color: 'var(--weathered)' }}>
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 overflow-hidden"
      style={{ background: 'var(--linen)' }}
    >
      {/* Header */}
      <div className="px-8 md:px-16 lg:px-24 mb-16" ref={headerRef}>
        <motion.div
          className="section-number mb-4"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
        >
          ROOM II — CODING PROJECTS
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
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Engineering
            <br />
            <em style={{ color: 'var(--clockwork)' }}>Gallery</em>
          </motion.h2>
          <motion.p
            className="font-sans text-sm max-w-xs"
            style={{ color: 'var(--weathered)' }}
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Each project is a complete work — built with intention, deployed with care.
          </motion.p>
        </div>
      </div>

      {/* Horizontal scrolling gallery */}
      <div
        className="flex gap-8 overflow-x-auto pb-8"
        style={{
          paddingLeft: 'clamp(2rem, 8vw, 6rem)',
          paddingRight: 'clamp(2rem, 8vw, 6rem)',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        ref={trackRef}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="flex items-center gap-3 px-8 md:px-16 mt-6">
        <div className="w-8 h-px" style={{ background: 'var(--latte)' }} />
        <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--weathered)', opacity: 0.6 }}>
          SCROLL TO EXPLORE
        </span>
        <span className="font-mono text-xs" style={{ color: 'var(--weathered)', opacity: 0.4 }}>→</span>
      </div>
    </section>
  );
}
