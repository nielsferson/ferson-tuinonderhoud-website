import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/fersontuinonderhoud-logo.png'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/diensten', label: 'Diensten' },
  { to: '/projecten', label: 'Projecten' },
  { to: '/over-ons', label: 'Over ons' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
        <img src={logo} alt="Ferson Tuinonderhoud" className="navbar-logo" />
      </NavLink>

      <button
        className={`navbar-toggle${open ? ' is-open' : ''}`}
        aria-label={open ? 'Sluit menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar-links${open ? ' is-open' : ''}`}>
        {links.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
