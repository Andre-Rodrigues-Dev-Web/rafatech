import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="section about" role="main" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 id="about-heading">Sobre Mim</h2>
            <p>
              Sou uma desenvolvedora full stack apaixonada por tecnologia e inovação. 
              Com experiência em desenvolvimento web moderno, crio soluções eficientes 
              e escaláveis que fazem a diferença na vida das pessoas.
            </p>
            <p>
              Minha jornada na programação começou com curiosidade e se transformou 
              em uma paixão por resolver problemas complexos através do código. 
              Estou sempre em busca de novos desafios e oportunidades de aprendizado.
            </p>
          </div>
          <div className="about-image">
            <div className="image-container">
              <img 
                src="/src/assets/imgs/eu.png" 
                alt="Foto de Rafaela Rodrigues - Desenvolvedora Full Stack" 
                className="profile-photo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About