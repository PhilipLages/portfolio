import { FaLinkedinIn,  FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialNetworks.sass';

const socialNetworks = [
  { name: "linkedIn", icon: <FaLinkedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> }
];

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
      { socialNetworks.map(({ name, icon }) => (
        <a href="#" className='social-btn' id={ name } key={ name }>
          { icon }
        </a>
      )) }
    </section>
  )
}

export default SocialNetworks;