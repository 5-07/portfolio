'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for client components
const Cursor = dynamic(() => import('@/components/Cursor'), { ssr: false });
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false });
const Loader = dynamic(() => import('@/components/Loader'), { ssr: false });

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Artwork from '@/components/Artwork';
import Competitions from '@/components/Competitions';
import Ongoing from '@/components/Ongoing';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent scroll during loading
    if (!loaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loaded]);

  const handleLoaderComplete = () => {
    setLoaded(true);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {/* Grain overlay — always present */}
      <div className="grain-overlay" />

      {/* Custom cursor */}
      <Cursor />

      {/* Loading screen */}
      <Loader onComplete={handleLoaderComplete} />

      {/* Main content — revealed after load */}
      {showContent && (
        <SmoothScroll>
          <div>
            <Nav visible={loaded} />
            <main>
              <Hero />
              <About />
              <Projects />
              <Artwork />
              <Competitions />
              <Ongoing />
              <Experience />
              <Contact />
            </main>
          </div>
        </SmoothScroll>
      )}
    </>
  );
}
