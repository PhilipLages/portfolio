import { 
  DiHtml5, 
  DiJsBadge, 
  DiReact, 
  DiCss3, 
  DiNodejsSmall,
  DiMysql,
  DiPostgresql,
} from 'react-icons/di';
import { SiTypescript, SiJest } from 'react-icons/si'

import '../styles/components/technologiesContainer.sass';

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "ts", name: "TypeScript", icon: <SiTypescript /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "postgresql", name: "PostgreSQL", icon: <DiPostgresql /> },
  { id: "jest", name: "Jest", icon: <SiJest /> }

];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        { technologies.map(({ id, name, icon }) => (
          <div className="technology-card" id={ id } key={ id }>
            { icon }
            <div className="technology-info">
              <h3>{ name }</h3>
            </div>
          </div>
        )) }
      </div>
    </section>
  )
}

export default TechnologiesContainer;