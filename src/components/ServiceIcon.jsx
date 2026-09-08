export default function ServiceIcon({ name }) {
  const icons = {
    leaf: <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.36C6.2 18.87 8.05 15 11 12c-1.9 3.5-2.5 6.5-2 10 6-1 10-6 10-14 0-1-.2-2-.4-3-1.3.5-2.6.5-1.6.5Z" />,
    cut: <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" /></>,
    grass: <><path d="M4 20c0-4 1-8 3-8s2 3 2 6" /><path d="M10 20c0-6 1.5-11 3-11s2 4 2 7" /><path d="M17 20c0-3 .8-6 2-6" /></>,
    repeat: <><path d="M17 2l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 22l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></>,
    other: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}
