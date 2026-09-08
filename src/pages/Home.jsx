import { Link } from 'react-router-dom'
import BeforeAfterSlider from '../components/BeforeAfterSlider.jsx'
import Reveal from '../components/Reveal.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import heroImage from '../assets/images/verzorgde-tuin-haag.jpg'
import project1Voor from '../assets/images/project1-voor.jpg'
import project1Na from '../assets/images/project1-na.jpg'

const diensten = [
  { title: 'Onkruid', icon: 'leaf' },
  { title: 'Hagen', icon: 'cut' },
  { title: 'Gazon', icon: 'grass' },
  { title: 'Onderhoud', icon: 'repeat' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <img src={heroImage} alt="Strak gesnoeide haag in een verzorgde tuin" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Uw tuin, onze zorg</h1>
          <p>Professioneel tuinonderhoud in heel Limburg.</p>
          <Link to="/contact" className="hero-cta">Contacteer ons</Link>
        </div>
      </section>

      <section className="home-section">
        <p className="home-section-label">Onze diensten</p>
        <div className="services-preview-grid">
          {diensten.map((d, i) => (
            <Reveal key={d.title} delay={i * 60}>
              <div className="service-preview-card">
                <ServiceIcon name={d.icon} />
                <span>{d.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Link to="/diensten" className="section-link">Alle diensten bekijken →</Link>
      </section>

      <section className="home-section">
        <p className="home-section-label">Recent project</p>
        <Reveal className="home-project-preview">
          <BeforeAfterSlider beforeImg={project1Voor} afterImg={project1Na} alt="Voortuin Snoeiwerk" />
        </Reveal>
        <Link to="/projecten" className="section-link">Alle projecten bekijken →</Link>
      </section>
    </>
  )
}
