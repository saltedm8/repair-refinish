import { useState, useEffect } from 'react';

const STORAGE_KEY = 'repair-refinish-demo-banner-dismissed';

export default function DemoBanner() {
  const [dismissed, setDismissed] = useState(() =>
    typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === '1'
  );

  useEffect(() => {
    setDismissed(sessionStorage.getItem(STORAGE_KEY) === '1');
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 99999,
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
        aria-label="Dismiss demo notice"
        style={{
          background: 'rgba(0,0,0,0.2)',
          border: 'none',
          borderRadius: '4px',
          padding: '0.25rem 0.5rem',
          cursor: 'pointer',
          fontSize: '1rem',
          lineHeight: 1,
          color: 'inherit',
        }}
      >
        ×
      </button>
    </div>
  );
}
