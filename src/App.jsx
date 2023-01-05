import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import './styles/components/app.sass';

function App() {
  return (
    <main id="portfolio">
      <h1>Philip Lages</h1>
      <Sidebar />
      <MainContent />
    </main>
  )
};

export default App;
