import { FaLinkedinIn,  FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialNetworks.sass';

const socialNetworks = [
  { 
    name: "linkedIn",
    url: "https://www.linkedin.com/in/philiplages/",
    icon: <FaLinkedinIn /> 
  },
  { 
    name: "github",
    url: "https://github.com/PhilipLages",
    icon: <FaGithub /> 
  },
  { 
    name: "instagram",
    url: "https://www.instagram.com/philiplages/",
    icon: <FaInstagram /> 
  }
];

const SocialNetworks = () => {
  return (
    <section id='social-networks'>
      { socialNetworks.map(({ name, url, icon }) => (
        <a href={ url } target='_blank' className='social-btn' id={ name } key={ name }>
          { icon }
        </a>
      )) }
    </section>
  )
};

export default SocialNetworks;