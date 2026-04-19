'use client';
import React, { useState, useEffect } from 'react';
import { PlayCircle, SkipBack, SkipForward, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { label: 'Hero', href: '#hero', id: 'hero' },
  { label: 'Agenda', href: '#agenda', id: 'agenda' },
  { label: 'About Me', href: '#the-vision', id: 'the-vision' },
  { label: 'Connect', href: '#connect', id: 'connect' }
];

export function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = 'hero';
      
      for (const link of NAV_LINKS) {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if top of section is inside or above the top half of the screen
          if (rect.top <= window.innerHeight / 2.5) {
            current = link.id;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger immediately to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-surface/90 to-transparent backdrop-blur-xl flex justify-between items-center px-6 md:px-12 py-6 md:py-8 transition-all duration-300">
      <div className="text-xl md:text-2xl font-extralight tracking-[0.3em] text-on-surface z-50 relative">AETHER</div>
      
      {/* Desktop & Tablet Top Navigation */}
      <div className="hidden lg:flex gap-10 font-headline font-light tracking-widest uppercase text-xs items-center">
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.id;
          
          return (
            <a 
              key={link.id} 
              href={link.href} 
              className={`transition-all duration-300 relative py-2 ${
                isActive 
                  ? 'text-primary drop-shadow-[0_0_8px_rgba(255,181,155,0.5)] opacity-100' 
                  : 'text-on-surface-variant hover:text-on-surface opacity-60 hover:opacity-100'
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,181,155,0.8)]" />
              )}
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-6 md:gap-8 z-50 relative">
        {/* Player Block */}
        <div className="hidden md:flex items-center gap-4 group relative cursor-pointer">
          <div className="flex flex-col text-right">
            <span className="text-[10px] text-primary-dim font-headline font-light tracking-widest uppercase">Midnight Horizon</span>
            <div className="flex items-center justify-end gap-1 mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="w-0.5 h-1.5 bg-on-surface-variant animate-pulse" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-0.5 h-2.5 bg-on-surface-variant animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-0.5 h-2 bg-on-surface-variant animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-0.5 h-1.5 bg-on-surface-variant animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="text-on-surface-variant hover:text-on-surface transition-all flex items-center justify-center opacity-0 -mr-3 group-hover:opacity-100 group-hover:mr-0">
              <SkipBack className="w-4 h-4 font-thin" strokeWidth={1} />
            </button>
            <button className="text-on-surface hover:text-primary-dim transition-all flex items-center justify-center">
              <PlayCircle className="w-6 h-6 font-thin" strokeWidth={1} />
            </button>
            <button className="text-on-surface-variant hover:text-on-surface transition-all flex items-center justify-center opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0">
              <SkipForward className="w-4 h-4 font-thin" strokeWidth={1} />
            </button>
          </div>
          
          <div className="absolute top-full right-0 pt-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 min-w-[220px]">
            <div className="rounded-xl bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/10 flex flex-col gap-4 py-4 px-6 shadow-2xl">
              <button className="text-[10px] text-left font-headline font-light text-primary-dim tracking-widest uppercase hover:text-on-surface transition-colors">01. Midnight Horizon</button>
              <button className="text-[10px] text-left font-headline font-light text-on-surface-variant tracking-widest uppercase hover:text-on-surface transition-colors">02. Dusty Embers</button>
              <button className="text-[10px] text-left font-headline font-light text-on-surface-variant tracking-widest uppercase hover:text-on-surface transition-colors">03. Nebula Drift</button>
            </div>
          </div>
        </div>

        <div className="w-px h-4 bg-outline-variant/50 hidden lg:block"></div>
        
        <a href="#connect" className="hidden lg:block text-primary font-headline font-light tracking-widest uppercase text-xs hover:text-on-surface transition-colors">
          Reserve Seat
        </a>

        {/* Hamburger Toggle (Tablet & Mobile) */}
        <button 
          className="lg:hidden text-on-surface p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-screen bg-surface/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 lg:hidden z-40 border-b border-white/5"
          >
            <div className="flex flex-col items-center gap-10 font-headline tracking-widest uppercase p-6 w-full max-w-sm">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a 
                    key={link.id} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg sm:text-xl transition-all duration-300 relative ${
                      isActive 
                        ? 'text-primary drop-shadow-[0_0_8px_rgba(255,181,155,0.5)]' 
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(255,181,155,0.8)]" />
                    )}
                  </a>
                );
              })}
              
              <div className="w-16 h-px bg-outline-variant/30 my-4"></div>
              
              <a 
                href="#connect" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-primary hover:text-on-surface transition-colors text-sm border border-primary/20 px-8 py-4 rounded-full"
              >
                Reserve Seat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
