import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProgramSection } from '@/components/sections/ProgramSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { RegistrationSection } from '@/components/sections/RegistrationSection';

export default function LandingPage() {
  return (
    <main className="bg-surface text-on-surface">
      <Header />
      <HeroSection />
      <ProgramSection />
      <AboutSection />
      <RegistrationSection />
      <Footer />
    </main>
  );
}
