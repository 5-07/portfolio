'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SERVICES = [
  {
    id: '01',
    title: 'Websites & Landing Pages',
    description: 'Fast, beautiful websites for local businesses, brands, and creatives. Built to convert — not just look good.',
    for: 'Karachi SMEs, restaurants, studios, clinics',
    deliverable: 'Live in 2–3 weeks',
    price: 'From PKR 50,000',
    accent: 'var(--clockwork)',
  },
  {
    id: '02',
    title: 'Full-Stack Web Apps & MVPs',
    description: 'From idea to deployed product. I build the backend, frontend, and database — everything you need to launch and validate.',
    for: 'Early-stage startups, founders, researchers',
    deliverable: 'MVP in 4–6 weeks',
    price: 'Custom quote',
    accent: 'var(--cedar)',
  },
  {
    id: '03',
    title: 'AI Integration',
    description: 'Add intelligence to your existing product — chatbots, document processing, recommendation systems, automation.',
    for: 'Tech companies, international clients',
    deliverable: 'Scoped per project',
    price: 'Custom quote',
    accent: 'var(--mauve)',
  },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="relative p-8 flex flex-col justify-between"
      style={{ border: '1px solid rgba(219,196,165,0.3)', background: 'rgba(255,249,243,0.03)' }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: service.accent }} />

      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="font-mono text-xs tracking-widest" style={{ color: service.accent, opacity: 0.7 }}>
            {service.id}
          </span>
          <span className="font-mono text-xs px-2 py-1" style={{ color: 'rgba(255,249,243,0.4)', border: '1px solid rgba(255,249,243,0.1)' }}>
            {service.deliverable}
          </span>
        </div>

        <h3 className="font-display mb-4" style={{ fontSize: '1.7rem', color: 'var(--linen)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          {service.title}
        </h3>
        <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: 'rgba(219,196,165,0.6)' }}>
          {service.description}
        </p>
        <div className="font-mono text-xs mb-2" style={{ color: 'rgba(219,196,165,0.35)' }}>
          FOR: {service.for}
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: '1px solid rgba(219,196,165,0.12)' }}>
        <span className="font-display text-xl" style={{ color: service.accent }}>
          {service.price}
        </span>
        <a
          href="https://wa.me/92XXXXXXXXXX?text=Hi%20Muzaina%2C%20I%27m%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs px-4 py-2 transition-opacity hover:opacity-70"
          style={{ background: service.accent, color: 'var(--linen)', letterSpacing: '0.1em' }}
        >
          GET A QUOTE
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });

  return (
    <section
      id="services"
      className="py-24 px-8 md:px-16 lg:px-24"
      style={{ background: 'var(--cafe-noir)' }}
    >
      <div className="mb-16" ref={headerRef}>
        <motion.div
          className="section-number mb-4"
          style={{ color: 'rgba(219,196,165,0.35)' }}
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
        >
          AVAILABLE FOR HIRE
        </motion.div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.h2
            className="font-display"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em', lineHeight: 0.9, color: 'var(--linen)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Work With
            <br />
            <em style={{ color: 'var(--latte)' }}>Me</em>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <p className="font-sans text-sm max-w-xs mb-3" style={{ color: 'rgba(219,196,165,0.5)' }}>
              Usually reply within 24 hours. Let&apos;s build something together.
            </p>
            <a
              href="https://wa.me/92XXXXXXXXXX?text=Hi%20Muzaina%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs px-5 py-3 transition-opacity hover:opacity-80"
              style={{ background: 'var(--clockwork)', color: 'var(--linen)', letterSpacing: '0.1em' }}
            >
              {/* WhatsApp icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WHATSAPP ME
            </a>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
