import Avatar from '../img/me.jpg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={ Avatar } alt="Philip Lages" />
      <p className="title">Desenvolvedor</p>
      <p>Redes sociais</p>
      <p>Contato</p>
      <a href="" className="btn">
        baixar currículo
      </a>
    </aside>
  )
}

export default Sidebar;