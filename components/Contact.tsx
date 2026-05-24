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
        <motion.div
  className="flex flex-wrap gap-4 mt-8"
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : {}}
  transition={{ delay: 0.45 }}
>
<a  
    href={`mailto:${CONTACT.email}`}
    className="font-mono text-xs px-6 py-3 transition-opacity hover:opacity-70"
    style={{ border: '1px solid rgba(255,249,243,0.3)', color: 'var(--linen)', letterSpacing: '0.1em' }}
  >
    SEND EMAIL
  </a>
  <a
    href="https://wa.me/92XXXXXXXXXX?text=Hi%20Muzaina%2C%20I%20found%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project."
    target="_blank"
    rel="noopener noreferrer"
    className="font-mono text-xs px-6 py-3 transition-opacity hover:opacity-70 flex items-center gap-2"
    style={{ background: '#25D366', color: 'white', letterSpacing: '0.1em' }}
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    WHATSAPP
  </a>
</motion.div>
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
