import SocialNetworks from './SocialNetworks';
import InformatiobContainer from './InformationContainer';
import Avatar from '../img/me.jpg'

import '../styles/components/sidebar.sass';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={ Avatar } alt="Philip Lages" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformatiobContainer />
      <a href="" className="btn">
        Baixar currículo
      </a>
    </aside>
  )
}

export default Sidebar;