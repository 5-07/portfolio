'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/*
  ═══════════════════════════════════════════════════════════════
  
  ═══════════════════════════════════════════════════════════════
*/
const CONTACT = {
  email: 'muzainamunirsiddiqui.com', //
  socials: [
    { label: 'GitHub', handle: '@5-07', href: 'https://github.com/5-07' },
    { label: 'LinkedIn', handle: 'Muzaina Munir', href: 'https://linkedin.com/in/yourusername' },
    { label: 'Instagram', handle: '@5.07___', href: 'https://instagram.com/yourusername' },

  ],
};

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-8 md:px-16 lg:px-24 overflow-hidden min-h-[70vh] flex flex-col justify-center"
      style={{ background: 'var(--mauve)' }}
    >
      {/* Section number */}
      <motion.div
        className="section-number mb-16"
        style={{ color: 'rgba(255,249,243,0.35)' }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        EXIT FOYER — CONTACT
      </motion.div>

      {/* Big email */}
      <div className="mb-20">
        <motion.div
          className="font-mono text-xs tracking-widest mb-6"
          style={{ color: 'rgba(255,249,243,0.45)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          — OPEN FOR COLLABORATIONS, COMMISSIONS & CONVERSATIONS
        </motion.div>

        <motion.a
          href={`mailto:${CONTACT.email}`}
          className="font-display block hover:opacity-70 transition-opacity group"
          style={{
            fontSize: 'clamp(1.5rem, 5vw, 4rem)',
            color: 'var(--linen)',
            letterSpacing: '-0.03em',
            lineHeight: 1,
            textDecoration: 'none',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {CONTACT.email}
          <span
            className="inline-block ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ fontSize: '0.6em' }}
          >
            ↗
          </span>
        </motion.a>
      </div>

      {/* Socials row */}
      <motion.div
        className="flex flex-wrap gap-x-12 gap-y-6 mb-20"
        style={{ borderTop: '1px solid rgba(255,249,243,0.15)', paddingTop: '2rem' }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        {CONTACT.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            style={{ textDecoration: 'none' }}
          >
            <div className="font-mono text-xs tracking-widest mb-1" style={{ color: 'rgba(255,249,243,0.35)' }}>
              {social.label}
            </div>
            <div
              className="font-display text-xl group-hover:opacity-60 transition-opacity"
              style={{ color: 'var(--linen)', letterSpacing: '-0.01em' }}
            >
              {social.handle}
            </div>
          </a>
        ))}
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
        style={{ borderTop: '1px solid rgba(255,249,243,0.1)', paddingTop: '2rem' }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.7 }}
      >
        <div>
          <div className="font-mono text-xs tracking-widest" style={{ color: 'rgba(255,249,243,0.25)' }}>
            MUZAINA MUNIR — PORTFOLIO MMXXV
          </div>
          <div className="font-mono text-xs mt-1" style={{ color: 'rgba(255,249,243,0.2)' }}>
            Built with Next.js, Framer Motion & care
          </div>
        </div>
        <div className="font-mono text-xs" style={{ color: 'rgba(255,249,243,0.2)' }}>
          KARACHI, PAKISTAN
        </div>
      </motion.div>

      {/* Large decorative text */}
      <div
        className="absolute bottom-0 right-0 font-display select-none pointer-events-none hidden lg:block"
        style={{
          fontSize: '18vw',
          lineHeight: 0.75,
          color: 'rgba(255,249,243,0.03)',
          letterSpacing: '-0.05em',
        }}
      >
        MM
      </div>
    </section>
  );
}
