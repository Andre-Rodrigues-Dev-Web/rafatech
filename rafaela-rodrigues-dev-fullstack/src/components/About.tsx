import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="section about" role="main" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading">Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text">
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
            <div className="image-placeholder">
              <svg viewBox="0 0 200 200" className="profile-svg" role="img" aria-label="Ilustração de perfil de Rafaela Rodrigues">
                <circle cx="100" cy="100" r="90" fill="#6366f1"/>
                <circle cx="100" cy="80" r="30" fill="#fff"/>
                <path d="M100 120 Q70 140 70 180 L130 180 Q130 140 100 120" fill="#fff"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About