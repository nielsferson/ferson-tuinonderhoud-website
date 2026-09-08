export default function ServiceIcon({ name }) {
  const icons = {
    leaf: <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.36C6.2 18.87 8.05 15 11 12c-1.9 3.5-2.5 6.5-2 10 6-1 10-6 10-14 0-1-.2-2-.4-3-1.3.5-2.6.5-1.6.5Z" />,
    cut: <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" /></>,
    grass: <><path d="M4 20c0-4 1-8 3-8s2 3 2 6" /><path d="M10 20c0-6 1.5-11 3-11s2 4 2 7" /><path d="M17 20c0-3 .8-6 2-6" /></>,
    repeat: <><path d="M17 2l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 22l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></>,
    other: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    building: <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <line x1="9" y1="7" x2="11" y2="7" />
      <line x1="13" y1="7" x2="15" y2="7" />
      <line x1="9" y1="11" x2="11" y2="11" />
      <line x1="13" y1="11" x2="15" y2="11" />
      <line x1="9" y1="15" x2="11" y2="15" />
      <line x1="13" y1="15" x2="15" y2="15" />
      <line x1="10" y1="21" x2="10" y2="18" />
      <line x1="14" y1="21" x2="14" y2="18" />
    </>,
    wild: <>
      <path d="M4 20c-1.5-1-2-3-1-4.5S6 14 7 15c-.5-2 .5-4 2.5-4.5S13.5 11 14 13c1-1.5 3-2 4.5-1S20 15 19 17c1 .5 1.5 2 1 3H4Z" />
      <line x1="9" y1="20" x2="9" y2="17" />
      <line x1="15" y1="20" x2="15" y2="16" />
    </>,
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}
