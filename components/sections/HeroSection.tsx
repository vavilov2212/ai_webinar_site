'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { motion } from 'motion/react';
import { Play, Pause, Activity, Clock } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative lg:min-h-screen flex items-center justify-center pt-28 lg:pt-32 pb-16 lg:pb-24 px-6 lg:px-24 overflow-hidden bg-gradient-to-b from-surface via-surface to-surface-container-low font-body">
      {/* Background layers */}
      <div className="absolute top-[30%] right-[10%] w-16 h-[1px] bg-[#7cb9e8] opacity-50 z-20"></div>
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen opacity-50"></div>
      
      <div className="edge-glow-hero"></div>
      <div className="vibe-particle w-64 h-64 top-1/4 left-1/4" style={{ animationDelay: '0s' }}></div>
      <div className="vibe-particle w-96 h-96 bottom-1/4 right-1/4" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Abstract Background Image */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen">
        <Image 
          src="https://picsum.photos/seed/nebula/1920/1080?blur=10"
          alt="Abstract space atmosphere"
          fill
          unoptimized
          referrerPolicy="no-referrer"
          className="object-cover object-center filter blur-xl"
        />
      </div>
      <div className="absolute inset-0 z-0 sunset-overlay"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-20 min-h-[auto] lg:min-h-[60vh] py-6 lg:py-12 mt-4 lg:mt-0">
        
        {/* Left Column (Text) */}
        <div className="flex-1 flex flex-col justify-center text-left relative py-4 lg:py-8 w-full max-w-2xl items-start">
          <div className="absolute top-4 -left-4 w-2.5 h-2.5 rounded-full bg-primary opacity-80 shadow-[0_0_10px_rgba(255,181,155,0.8)] z-20 hidden lg:block"></div>
          
          <div className="space-y-8 lg:space-y-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-headline text-[3rem] sm:text-[4.5rem] lg:text-[5rem] font-extralight leading-[1.1] tracking-[-0.02em] text-on-surface relative"
            >
              Создавай <span className="gradient-text italic font-light">музыку и видео</span> с помощью AI
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl font-light text-on-surface-variant max-w-2xl leading-relaxed tracking-wide"
            >
              даже если ты никогда не программировал. Погрузись в атмосферу творчества без границ.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-4 lg:pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 w-full"
            >
              <Button>Записаться на вебинар</Button>
              <div className="flex items-center justify-center gap-3 text-on-surface-variant opacity-80 h-[48px]">
                <Clock className="w-5 h-5 font-thin text-primary-dim" strokeWidth={1.5} />
                <span className="text-sm font-light tracking-wider pt-0.5">19:00 / 24 Октября</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column (Player Card) */}
        <div className="flex flex-1 flex-col justify-center relative w-full max-w-sm sm:max-w-md lg:max-w-md py-0 lg:py-8 mt-4 lg:mt-0">
          {/* Card Accents */}
          <div className="absolute top-4 -right-2 w-3 h-3 rounded-full bg-primary opacity-80 shadow-[0_0_15px_rgba(255,181,155,0.6)] z-30 hidden sm:block"></div>
          <div className="absolute bottom-4 -left-4 w-5 h-5 rounded-full bg-primary-dim opacity-60 blur-[2px] z-30 hidden sm:block"></div>
          
          <div className="glass-panel ambient-shadow border border-white/5 rounded-3xl p-5 sm:p-8 backdrop-blur-2xl relative z-20 w-full">
            <div className="flex justify-between items-end mb-6 sm:mb-8">
              <div>
                <h3 className="text-[10px] sm:text-xs font-headline font-light tracking-[0.3em] uppercase text-primary-dim opacity-70 mb-1">Current Session</h3>
                <h2 className="text-lg sm:text-xl font-headline font-light text-on-surface tracking-tight">Aether Sounds</h2>
              </div>
              <Activity className="text-primary-dim w-4 h-4 sm:w-5 sm:h-5 mb-1" strokeWidth={1} />
            </div>

            <div className="flex flex-col gap-2">
              {/* Active Track */}
              <div className="group flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-2xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" strokeWidth={1.5} fill="currentColor" />
                </button>
                <div className="flex-1 truncate">
                  <p className="text-xs sm:text-sm font-medium text-on-surface tracking-wide truncate">Midnight Horizon</p>
                  <p className="text-[9px] sm:text-[10px] font-light text-primary-dim/60 uppercase tracking-widest mt-0.5">Active Now</p>
                </div>
                <div className="flex items-end gap-0.5 h-3 sm:h-4 shrink-0">
                  <div className="w-0.5 h-full bg-primary animate-[pulse_1s_infinite]" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-0.5 h-2/3 bg-primary animate-[pulse_1.2s_infinite]" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-0.5 h-full bg-primary animate-[pulse_0.8s_infinite]" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-0.5 h-1/2 bg-primary animate-[pulse_1.1s_infinite]" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>

              {/* Inactive Track 1 */}
              <div className="group flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-on-surface-variant group-hover:text-on-surface transition-colors shrink-0">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-1" strokeWidth={1.5} fill="currentColor" />
                </button>
                <div className="flex-1 truncate">
                  <p className="text-xs sm:text-sm font-light text-on-surface-variant group-hover:text-on-surface truncate">Dusty Embers</p>
                </div>
                <div className="flex items-end gap-0.5 h-2.5 sm:h-3 opacity-20 shrink-0">
                  <div className="w-0.5 h-1/2 bg-on-surface-variant"></div>
                  <div className="w-0.5 h-full bg-on-surface-variant"></div>
                  <div className="w-0.5 h-1/3 bg-on-surface-variant"></div>
                  <div className="w-0.5 h-2/3 bg-on-surface-variant"></div>
                </div>
              </div>

              {/* Inactive Track 2 */}
              <div className="group flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-on-surface-variant group-hover:text-on-surface transition-colors shrink-0">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-1" strokeWidth={1.5} fill="currentColor" />
                </button>
                <div className="flex-1 truncate">
                  <p className="text-xs sm:text-sm font-light text-on-surface-variant group-hover:text-on-surface truncate">Event Horizon</p>
                </div>
                <div className="flex items-end gap-0.5 h-2.5 sm:h-3 opacity-20 shrink-0">
                  <div className="w-0.5 h-1/2 bg-on-surface-variant"></div>
                  <div className="w-0.5 h-2/3 bg-on-surface-variant"></div>
                  <div className="w-0.5 h-full bg-on-surface-variant"></div>
                  <div className="w-0.5 h-1/3 bg-on-surface-variant"></div>
                </div>
              </div>

              {/* Inactive Track 3 */}
              <div className="group flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-on-surface-variant group-hover:text-on-surface transition-colors shrink-0">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-1" strokeWidth={1.5} fill="currentColor" />
                </button>
                <div className="flex-1 truncate">
                  <p className="text-xs sm:text-sm font-light text-on-surface-variant group-hover:text-on-surface truncate">Neon Whispers</p>
                </div>
                <div className="flex items-end gap-0.5 h-2.5 sm:h-3 opacity-20 shrink-0">
                  <div className="w-0.5 h-full bg-on-surface-variant"></div>
                  <div className="w-0.5 h-1/2 bg-on-surface-variant"></div>
                  <div className="w-0.5 h-2/3 bg-on-surface-variant"></div>
                  <div className="w-0.5 h-1/3 bg-on-surface-variant"></div>
                </div>
              </div>

              {/* Inactive Track 4 */}
              <div className="group flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-on-surface-variant group-hover:text-on-surface transition-colors shrink-0">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-1" strokeWidth={1.5} fill="currentColor" />
                </button>
                <div className="flex-1 truncate">
                  <p className="text-xs sm:text-sm font-light text-on-surface-variant group-hover:text-on-surface truncate">Synthetic Dawn</p>
                </div>
                <div className="flex items-end gap-0.5 h-2.5 sm:h-3 opacity-20 shrink-0">
                  <div className="w-0.5 h-1/3 bg-on-surface-variant"></div>
                  <div className="w-0.5 h-full bg-on-surface-variant"></div>
                  <div className="w-0.5 h-1/2 bg-on-surface-variant"></div>
                  <div className="w-0.5 h-2/3 bg-on-surface-variant"></div>
                </div>
              </div>

            </div>
          </div>
          
          <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 rounded-full scale-110 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
