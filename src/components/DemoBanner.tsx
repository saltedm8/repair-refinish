import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const STORAGE_KEY = 'repair-refinish-demo-banner-dismissed';

export default function DemoBanner() {
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setMounted(true);
    setDismissed(localStorage.getItem(STORAGE_KEY) === '1');
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    localStorage.setItem(STORAGE_KEY, '1');
    setDismissed(true);
  };

  if (!mounted || dismissed) return null;

  const banner = (
    <div
      role="alert"
      aria-live="polite"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2147483647,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '0.5rem 1rem',
        background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)',
        color: '#1a1a1a',
        fontSize: '0.875rem',
        fontWeight: 600,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}
    >
      <span>This is a demo and not the live website</span>
      <button
        type="button"
        onClick={handleDismiss}
        onMouseDown={handleDismiss}
        aria-label="Dismiss demo notice"
        style={{
          background: 'rgba(0,0,0,0.2)',
          border: 'none',
          borderRadius: '4px',
          padding: '0.35rem 0.65rem',
          cursor: 'pointer',
          fontSize: '1rem',
          lineHeight: 1,
          color: 'inherit',
          minWidth: '32px',
        }}
      >
        ×
      </button>
    </div>
  );

  return createPortal(banner, document.body);
}
