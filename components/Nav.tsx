'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Artwork', href: '#artwork' },
  { label: 'Competitions', href: '#competitions' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav({ visible }: { visible: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{
              background: scrolled ? 'rgba(255,249,243,0.92)' : 'transparent',
              backdropFilter: scrolled ? 'blur(12px)' : 'none',
              borderBottom: scrolled ? '1px solid rgba(219,196,165,0.4)' : '1px solid transparent',
              transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
            }}
          >
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-mono text-xs tracking-widest text-cafe-noir hover:opacity-60 transition-opacity"
              style={{ color: 'var(--cafe-noir)' }}
            >
              MM<span style={{ opacity: 0.4 }}>°</span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="nav-link"
                  style={{ color: 'var(--cafe-noir)' }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Status indicator */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs" style={{ color: 'var(--clockwork)', opacity: 0.6 }}>
                Available for work
              </span>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(m => !m)}
            >
              <span className="block w-6 h-px bg-cafe-noir transition-all" style={{ 
                background: 'var(--cafe-noir)',
                transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none'
              }} />
              <span className="block w-4 h-px bg-cafe-noir transition-all" style={{ 
                background: 'var(--cafe-noir)',
                opacity: menuOpen ? 0 : 1
              }} />
              <span className="block w-6 h-px bg-cafe-noir transition-all" style={{ 
                background: 'var(--cafe-noir)',
                transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none'
              }} />
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: 'var(--cafe-noir)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="font-display text-linen text-5xl mb-4"
                style={{ color: 'var(--linen)', fontStyle: 'italic' }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
