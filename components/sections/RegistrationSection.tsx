'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/Input';
import { ArrowRight } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, "Имя слишком короткое"),
  telegram: z.string().min(3, "Некорректный Telegram").optional().or(z.literal('')),
  whatsapp: z.string().optional().or(z.literal('')),
}).refine(data => data.telegram || data.whatsapp, {
  message: "Укажите хотя бы один способ связи",
  path: ["telegram"]
});

export function RegistrationSection() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <section id="connect" className="relative py-24 md:py-32 lg:py-40 px-6 lg:px-24 bg-surface flex justify-center items-center overflow-hidden">
      {/* Accents */}
      <div className="absolute top-[20%] right-[30%] w-2 h-2 rounded-full bg-primary opacity-80 z-20"></div>
      <div className="absolute top-[30%] right-[35%] w-1.5 h-1.5 rounded-full bg-[#7cb9e8] opacity-70 z-20"></div>
      <div className="absolute top-[40%] right-[40%] w-2.5 h-2.5 rounded-full bg-[#D98E73] opacity-90 z-20"></div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-surface to-surface pointer-events-none"></div>
      <div className="edge-glow-reg"></div>

      <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-16 relative z-10 bg-surface-container-low/80 backdrop-blur-xl p-12 md:p-16 rounded-3xl border border-outline-variant/20 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
        <div className="absolute -top-4 -left-4 w-[20px] h-[20px] rounded-full border border-[#7cb9e8] opacity-60 z-20"></div>
        
        <div className="space-y-6">
          <h2 className="font-headline text-[2rem] font-light text-on-surface tracking-wide">
            Присоединяйся к потоку
          </h2>
          <p className="font-body text-on-surface-variant font-light">Я свяжусь с тобой и пришлю детали.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-12 relative flex flex-col items-center text-left">
          <Input id="name" label="Имя" {...register("name")} />
          {errors.name && <p className="text-error text-xs block -mt-10 self-start">{errors.name.message as string}</p>}
          
          <Input id="telegram" label="Telegram" {...register("telegram")} />
          {errors.telegram && <p className="text-error text-xs block -mt-10 self-start">{errors.telegram.message as string}</p>}
          
          <Input id="whatsapp" label="WhatsApp" {...register("whatsapp")} />
          
          <div className="pt-8 flex justify-center relative w-full">
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-6 bg-primary/20 blur-xl pointer-events-none rounded-full"></div>
            
            <button 
              type="submit"
              className="relative z-10 text-primary font-body text-sm tracking-widest uppercase hover:text-primary-dim hover:bg-surface-variant/50 px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-4 border border-primary/20 hover:border-primary/50 shadow-[0_0_15px_rgba(255,181,155,0.1)] hover:shadow-[0_0_20px_rgba(255,181,155,0.2)]"
            >
              Записаться <ArrowRight className="w-5 h-5 font-thin" strokeWidth={1} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
