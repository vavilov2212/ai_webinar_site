'use client';
import React from 'react';
import { motion } from 'motion/react';

export function ProgramSection() {
  return (
    <section id="agenda" className="relative py-24 md:py-32 lg:py-48 px-6 lg:px-24 bg-surface overflow-hidden">
      {/* Anchor point to enable Atmosphere internal link jump */}
      <div id="atmosphere" className="absolute top-0 -mt-24 pt-24 pointer-events-none"></div>

      <div className="vibe-particle w-72 h-72 top-1/3 right-1/4" style={{ animationDelay: '1.5s' }}></div>
      <div className="vibe-particle w-80 h-80 bottom-1/4 left-1/4" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-5xl mx-auto space-y-20 md:space-y-28 lg:space-y-32 relative">
        {/* Core Idea - Right Aligned */}
        <div className="max-w-xl ml-auto text-right">
          <p className="font-headline text-[1.75rem] md:text-[2.25rem] font-light leading-relaxed text-on-surface tracking-tight">
            Результат — это не случайность, а <span className="text-primary-dim italic drop-shadow-[0_0_15px_rgba(245,166,137,0.4)]">отражение мысли</span>, облеченной в слова.
          </p>
        </div>

        {/* Structured Journey */}
        <div className="max-w-2xl mx-auto relative pt-12">
          {/* Vertical Progression Line */}
          <div className="absolute left-[11px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-25"></div>
          
          <div className="space-y-12 md:space-y-16 lg:space-y-20 relative z-10">
            {/* Break Element */}
            <div className="absolute -left-[3px] top-1/2 w-[14px] h-[14px] rounded-full bg-primary opacity-80 shadow-[0_0_12px_rgba(255,181,155,0.6)] z-20 -translate-y-1/2"></div>
            
            {/* Steps */}
            <div className="flex gap-8 items-start relative">
              <div className="absolute left-[-24px] top-2 w-[6px] h-[6px] rounded-full bg-primary opacity-80"></div>
              <span className="text-xs font-headline font-light text-primary-dim tracking-widest uppercase pt-1 w-6 text-center bg-surface z-10 relative">01</span>
              <p className="font-body text-lg font-light text-on-surface-variant leading-relaxed flex-1 pt-0.5">
                Разберём, что такое промпт и из чего он состоит (контекст, роль, результат)
              </p>
            </div>

            <div className="flex gap-8 items-start relative">
              <div className="absolute left-[-24px] top-2 w-[6px] h-[6px] rounded-full bg-[#7cb9e8] opacity-80"></div>
              <span className="text-xs font-headline font-light text-primary-dim tracking-widest uppercase pt-1 w-6 text-center bg-surface z-10 relative">02</span>
              <p className="font-body text-lg font-light text-on-surface-variant leading-relaxed flex-1 pt-0.5">
                Посмотрим, как формулировка влияет на результат и как её улучшать
              </p>
            </div>

            <div className="flex gap-8 items-start relative">
              <div className="absolute left-[-24px] top-2 w-[6px] h-[6px] rounded-full bg-primary opacity-80"></div>
              <span className="text-xs font-headline font-light text-primary-dim tracking-widest uppercase pt-1 w-6 text-center bg-surface z-10 relative">03</span>
              <p className="font-body text-lg font-light text-on-surface-variant leading-relaxed flex-1 pt-0.5">
                Используем одну нейросеть, чтобы <span className="highlighter-effect">создавать промпты</span> для другой и проверять результат
              </p>
            </div>

            <div className="flex gap-8 items-start relative">
              <div className="absolute left-[-24px] top-2 w-[6px] h-[6px] rounded-full bg-[#7cb9e8] opacity-80"></div>
              <span className="text-xs font-headline font-light text-primary-dim tracking-widest uppercase pt-1 w-6 text-center bg-surface z-10 relative">04</span>
              <p className="font-body text-lg font-light text-on-surface-variant leading-relaxed flex-1 pt-0.5">
                Соберём свой контекст и создадим <span className="highlighter-effect">музыкальный трек</span>
              </p>
            </div>

            <div className="flex gap-8 items-start relative">
              <div className="absolute left-[-24px] top-2 w-[6px] h-[6px] rounded-full bg-primary opacity-80"></div>
              <span className="text-xs font-headline font-light text-primary-dim tracking-widest uppercase pt-1 w-6 text-center bg-surface z-10 relative">05</span>
              <p className="font-body text-lg font-light text-on-surface-variant leading-relaxed flex-1 pt-0.5">
                Сгенерируем видео на основе этого подхода
              </p>
            </div>

            <div className="flex gap-8 items-start relative">
              <div className="absolute left-[-24px] top-2 w-[6px] h-[6px] rounded-full bg-[#7cb9e8] opacity-80"></div>
              <span className="text-xs font-headline font-light text-primary-dim tracking-widest uppercase pt-1 w-6 text-center bg-surface z-10 relative">06</span>
              <p className="font-body text-lg font-light text-on-surface-variant leading-relaxed flex-1 pt-0.5">
                Получим итог: <span className="highlighter-effect">музыка + визуал</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-1/4 -right-24 w-64 h-64 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
    </section>
  );
}
