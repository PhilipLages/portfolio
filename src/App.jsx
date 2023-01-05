import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import './styles/components/app.sass';

function App() {
  return (
    <section id="portfolio">
      <h1>Philip Lages</h1>
      <Sidebar />
      <MainContent />
    </section>
  )
};

export default App;
