"use client"

import { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Accounts from '@/components/accounts';
import Platforms from '@/components/platforms';
import Markets from '@/components/markets';
import About from '@/components/about';
import Contact from '@/components/contact';
import Legal from '@/components/legal';
import Footer from '@/components/footer';

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
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Accounts />
      <Platforms />
      <Markets />
      <About />
      <Contact />
      <Legal />
      <Footer />
    </main>
  );
}