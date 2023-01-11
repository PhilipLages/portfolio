import SocialNetworks from './SocialNetworks';
import InformatiobContainer from './InformationContainer';
import Avatar from '../img/me.jpg'

import '../styles/components/sidebar.sass';

const Sidebar = () => {
  const cvUrl = "https://1drv.ms/b/s!Ao9AkE6EH0S_gYFP_K1KMgqsLtntAQ?e=GKjyw2";

  return (
    <aside id="sidebar">
      <img src={ Avatar } alt="Philip Lages" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformatiobContainer />
      <a href={ cvUrl } className="btn">
        Acessar currículo
      </a>
    </aside>
  )
}

export default Sidebar;