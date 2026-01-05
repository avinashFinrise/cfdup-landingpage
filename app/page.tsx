"use client"

import About from '@/components/about';
import Accounts from '@/components/accounts';
import Contact from '@/components/contact';
import Features from '@/components/features';
import Hero from '@/components/hero';
import Legal from '@/components/legal';
import Markets from '@/components/markets';
import Platforms from '@/components/platforms';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <Accounts />
      <Platforms />
      <Markets />
      <About />
      <Contact />
      <Legal />
    </>
  );
}