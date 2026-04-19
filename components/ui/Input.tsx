import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className, id, ...props }: InputProps) {
  return (
    <div className="relative group w-full">
      <input
        id={id}
        className={cn(
          "w-full bg-transparent border-0 border-b border-outline-variant/50 px-0 py-4 text-on-surface font-light focus:ring-0 focus:border-primary focus:bg-surface-variant/10 transition-all duration-200 placeholder-transparent peer",
          className
        )}
        placeholder={label}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-4 text-on-surface-variant font-light text-sm transition-all duration-200 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-primary-dim"
      >
        {label}
      </label>
    </div>
  );
}
