import React from 'react';
import { ScrollToTop } from '../ui/ScrollToTop';

const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/roman-vavilov/' },
  { name: 'Facebook', url: 'https://www.facebook.com/vavilov.roman' },
  { name: 'GitHub', url: 'https://github.com/vavilov2212' }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-container-low relative z-10 border-t border-outline-variant/10 py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        
        {/* Desktop & Tablet Layout */}
        <div className="hidden md:flex justify-between items-center w-full relative">
          <div className="flex gap-8 lg:gap-10 font-headline font-light text-xs tracking-widest uppercase flex-1">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-on-surface-variant hover:text-primary transition-colors"
                aria-label={`Visit our ${link.name}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex justify-center shrink-0">
            <ScrollToTop />
          </div>
          
          <div className="text-right font-headline font-light text-[10px] tracking-widest uppercase text-on-surface-variant flex-1">
            Roman Vavilov © {currentYear}
          </div>
        </div>

        {/* Mobile Layout (Stacked) */}
        <div className="flex md:hidden flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-6 font-headline font-light text-sm tracking-widest uppercase w-full">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-on-surface-variant hover:text-primary transition-colors text-center w-full"
                aria-label={`Visit our ${link.name}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <ScrollToTop />
          
          <div className="font-headline font-light text-[10px] tracking-widest uppercase text-on-surface-variant text-center mt-2 w-full">
            Roman Vavilov © {currentYear}
          </div>
        </div>

      </div>
    </footer>
  );
}
