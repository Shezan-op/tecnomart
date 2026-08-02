import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function Toggle({ checked, onChange, label, disabled = false }: ToggleProps) {
  return (
    <label className={`flex items-center gap-3 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
      <div className="relative flex items-center">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        {/* Track */}
        <div
          className="block w-[80px] h-[40px] rounded-full transition-all duration-300 ease-[var(--ease-card)] shadow-[inset_0_4px_8px_rgba(0,0,0,0.8),0_2px_10px_rgba(0,0,0,0.3)] bg-[#0A0A0A] border border-[#1A1A1A]"
        ></div>
        {/* Knob */}
        <div
          className={`absolute left-[4px] w-[50px] h-[32px] rounded-full transition-transform duration-300 ease-[var(--ease-card)] flex items-center justify-center ${
            checked ? 'transform translate-x-[22px]' : ''
          }`}
          style={{
            // Metallic chamfered edge using double background (padding-box and border-box)
            background: `
              linear-gradient(180deg, #242424 0%, #111111 100%) padding-box,
              linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0.05) 70%, rgba(255,255,255,0.5) 100%) border-box
            `,
            border: '2px solid transparent',
            boxShadow: '0 4px 10px rgba(0,0,0,0.8), inset 0 1px 2px rgba(255,255,255,0.1)'
          }}
        >
          {/* Arrow / Line detail inside knob */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#6B6B6B]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
      {label && <span className="text-[var(--text-primary)] text-[0.875rem]">{label}</span>}
    </label>
  );
}
