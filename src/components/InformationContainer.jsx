import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/informationContainer.sass';

const InformationContainer = () => {
  return (
    <section id='information-container'>
      <div className="info-card">
        <AiFillPhone id='phone-icon' />
        <div>
          <h3>Telefone</h3>
          <p>(27) 9 9793-6892</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id='email-icon'/>
        <div>
          <h3>E-mail</h3>
          <p>psilvaelages@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id='location-icon'/>
        <div>
          <h3>Localização</h3>
          <p>Vila Velha - ES</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer