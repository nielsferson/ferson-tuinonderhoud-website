import ProjectCard from '../components/ProjectCard.jsx'
import Reveal from '../components/Reveal.jsx'
import project1Voor from '../assets/images/project1-voor.jpg'
import project1Na from '../assets/images/project1-na.jpg'
import project2Voor from '../assets/images/project2-voor.jpg'
import project2Na from '../assets/images/project2-na.jpg'
import project3Voor from '../assets/images/project3-voor.jpg'
import project3Na from '../assets/images/project3-na.jpg'

const projecten = [
  {
    title: 'Tuin Hasselt',
    description: 'Volledige heraanleg van gazon en border.',
    beforeImg: project1Voor,
    afterImg: project1Na,
  },
  {
    title: 'Haagrenovatie',
    description: 'Verwilderde haag teruggesnoeid tot strakke vorm.',
    beforeImg: project2Voor,
    afterImg: project2Na,
  },
  {
    title: 'Tuinonderhoud',
    description: 'Gazon en border weer strak en verzorgd gemaakt.',
    beforeImg: project3Voor,
    afterImg: project3Na,
  },
]

export default function Projecten() {
  return (
    <section>
      <h2>Onze projecten</h2>
      <p className="projects-intro">Een greep uit ons werk — schuif de foto's om voor en na te vergelijken.</p>
      <div className="projects-grid">
        {projecten.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
