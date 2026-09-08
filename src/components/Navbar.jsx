import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Ferson Tuinonderhoud</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/diensten">Diensten</Link></li>
        <li><Link to="/projecten">Projecten</Link></li>
        <li><Link to="/over-ons">Over ons</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
