'use client';
import React from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="p-4 rounded-full bg-surface-variant/50 hover:bg-surface-variant border border-outline-variant/30 text-on-surface hover:text-primary transition-all shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(255,181,155,0.2)] group"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 font-thin group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={1.5} />
    </button>
  );
}
