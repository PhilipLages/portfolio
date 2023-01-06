import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TecnologiesContainer from './TechnologiesContainer';

import '../styles/components/mainContent.sass';

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <TecnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent