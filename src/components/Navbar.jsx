import { Link } from 'react-router-dom'
import logo from '../assets/images/fersontuinonderhoud-logo.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Ferson Tuinonderhoud" className="navbar-logo" />
      </Link>
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
