'use client';

import React, { useEffect, useState } from 'react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
}

export function Toast({ message, type = 'info', duration = 3000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) setTimeout(onClose, 300); // Wait for fade out animation
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const typeStyles = {
    success: 'border-[var(--success)] text-[var(--success)]',
    error: 'border-[var(--error)] text-[var(--error)]',
    info: 'border-[var(--hairline-strong)] text-[var(--accent-bright)]',
  };

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-[var(--z-overlay)]
        bg-[var(--bg-glass)] backdrop-blur-xl
        border ${typeStyles[type]}
        px-6 py-4 rounded-[var(--radius-panel)]
        shadow-[var(--shadow-standard)]
        transition-all duration-300 ease-[var(--ease-out)]
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
      `}
    >
      <p className="font-body text-[0.875rem] font-medium tracking-wide">
        {message}
      </p>
    </div>
  );
}
