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
    title: 'Voortuin Snoeiwerk',
    description: 'Verouderde en verwilderde beplanting grondig teruggesnoeid en opnieuw in vorm gebracht. De hagen en borders werden opgefrist voor een strakkere, verzorgde tuin.',
    beforeImg: project1Voor,
    afterImg: project1Na,
  },
  {
    title: 'Haag verwijderen & terrein herstellen',
    description: 'De bestaande haag en beplanting werden volledig verwijderd. Daarna werd de ondergrond geëgaliseerd en netjes afgewerkt, klaar voor een nieuwe aanleg of verdere inrichting.',
    beforeImg: project2Voor,
    afterImg: project2Na,
  },
  {
    title: 'Tuinonderhoud',
    description: 'Uitgegroeide haag strak gesnoeid voor een verzorgde uitstraling en vrije doorgang.',
    beforeImg: project3Voor,
    afterImg: project3Na,
  },
]

export default function Projecten() {
  return (
    <section>
      <div className="page-header">
        <h2>Onze projecten</h2>
        <p className="projects-intro">Een greep uit ons werk — schuif de foto's om voor en na te vergelijken.</p>
      </div>
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
