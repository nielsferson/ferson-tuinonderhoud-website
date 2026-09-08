// Tijdelijk vak in plaats van een echte foto.
// Vervang later door: <img src="/src/assets/images/jouw-foto.jpg" alt="..." />
export default function ImagePlaceholder({ label, tone = 'dark', className = '' }) {
  return (
    <div className={`image-placeholder image-placeholder-${tone} ${className}`}>
      <svg className="image-placeholder-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 15l-5-5-9 9" />
      </svg>
      {label && <span className="image-placeholder-label">{label}</span>}
    </div>
  )
}
