import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars1.githubusercontent.com/u/43308192?s=460&u=d06212ec346a68011edebd84efcd671ec7862319&v=4" alt="Leandro Souza" />
            <div>
              <strong>Leandro Souza</strong>
              <span>Química</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/><br/>
            Apaixonado por expoldir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas ja passaram por uma das minhas explosões.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 200,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;