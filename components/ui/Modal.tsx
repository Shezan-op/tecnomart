'use client';

import React, { useEffect } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[var(--z-overlay)] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-[8px] transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Panel */}
      <div className="relative z-10 w-full max-w-md p-8 bg-[var(--bg-panel)] rounded-[var(--radius-panel)] shadow-[var(--shadow-standard)] border border-[var(--hairline)] transform transition-all duration-300 scale-100 opacity-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[1.25rem] font-display font-semibold tracking-tight text-[var(--text-primary)]">
            {title}
          </h3>
          <button 
            onClick={onClose}
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="text-[var(--text-secondary)]">
          {children}
        </div>
      </div>
    </div>
  );
}
