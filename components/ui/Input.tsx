import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-[0.78rem] uppercase tracking-[0.08em] font-mono text-[var(--text-muted)]">
          {label}
        </label>
      )}
      <input
        className={`
          w-full bg-[var(--bg-panel)] border border-[#2C2C2C] 
          text-[var(--text-primary)] rounded-[var(--radius-input)] px-4 py-3
          transition-all duration-[var(--dur-btn)] ease-[var(--ease-btn)]
          focus:outline-none focus:border-[var(--border-active)] 
          focus:shadow-[var(--shadow-blue-glow)]
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? '!border-[var(--error)] focus:shadow-[0_0_15px_rgba(239,68,68,0.15)]' : ''}
        `}
        {...props}
      />
      {error && <span className="text-[0.875rem] text-[var(--error)] mt-1">{error}</span>}
    </div>
  );
}
