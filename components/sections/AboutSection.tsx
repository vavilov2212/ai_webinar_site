import React from 'react';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="the-vision" className="relative py-20 md:py-32 lg:py-40 px-6 lg:px-24 bg-gradient-to-b from-surface to-surface-container-low overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 items-center">
        
        <div className="flex-1 space-y-10 text-left">
          <h2 className="font-headline text-[2.25rem] md:text-[3.5rem] font-extralight text-on-surface leading-tight tracking-wide">
            Я не называю себя экспертом по ИИ или теоретиком.
          </h2>
          <div className="space-y-6">
            <p className="font-body text-xl font-light text-on-surface-variant leading-relaxed">
              Я <span className="highlighter-effect text-on-surface font-normal">практик</span>. За моими плечами 12 лет в программировании, но сейчас я просто исследую этот новый мир — как и вы. Этот сайт, музыка и видео, которые вы видите, созданы мной в партнерстве с ИИ.
            </p>
            <p className="font-body text-xl font-light text-on-surface-variant leading-relaxed">
              Моя роль — <span className="highlighter-effect text-on-surface font-normal">упрощать сложное</span> и находить то, что действительно работает в жизни, а не в презентациях. Я помогаю быстрее понять суть и начать создавать.
            </p>
          </div>
          <div className="pt-6 space-y-6">
            <p className="font-body text-lg font-light text-primary-dim/90 opacity-90">
              Во время занятия мы создадим настоящий музыкальный трек — от идеи до результата.
            </p>
            <button className="inline-flex items-center px-6 py-3 rounded-full border border-primary/20 text-primary-dim hover:text-primary font-body text-xs tracking-widest uppercase hover:bg-primary/5 hover:border-primary/40 transition-all duration-300">
              Присоединиться
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md mx-auto md:max-w-none relative">
          <div className="absolute -top-8 right-0 z-20 handwritten-note text-secondary-dim text-sm md:text-base pointer-events-none whitespace-nowrap hidden md:block drop-shadow-md">
            Мой путь в AI
          </div>
          <div className="relative aspect-square md:aspect-[4/5] w-full shadow-2xl rounded-lg overflow-hidden z-10">
            <Image 
              src="https://picsum.photos/seed/workspace/800/1000" 
              alt="Practitioner working at desk" 
              fill
              unoptimized
              referrerPolicy="no-referrer"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
