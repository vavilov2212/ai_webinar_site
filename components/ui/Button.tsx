import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-10 py-5 rounded-full font-body text-sm tracking-widest uppercase transition-all duration-200",
        variant === 'primary' 
          ? "bg-gradient-to-tr from-primary to-primary-dim text-on-primary hover:opacity-90 shadow-[0_0_20px_rgba(255,181,155,0.2)]"
          : "border border-primary/20 text-primary-dim hover:text-primary hover:bg-primary/5 hover:border-primary/40",
        className
      )}
      {...props}
    />
  );
}
