import ProjectCard from '../components/ProjectCard.jsx'

// Vervang de afbeeldingen hieronder door je eigen foto's in src/assets/images/
const projecten = [
  {
    title: 'Tuin Hasselt',
    description: 'Volledige heraanleg van gazon en border.',
    beforeImg: '/src/assets/images/project1-voor.jpg',
    afterImg: '/src/assets/images/project1-na.jpg',
  },
  {
    title: 'Haagrenovatie',
    description: 'Verwilderde haag teruggesnoeid tot strakke vorm.',
    beforeImg: '/src/assets/images/project2-voor.jpg',
    afterImg: '/src/assets/images/project2-na.jpg',
  },
]

export default function Projecten() {
  return (
    <section>
      <h2>Onze projecten</h2>
      <p className="projects-intro">Een greep uit ons werk – voor en na.</p>
      <div className="projects-grid">
        {projecten.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}
