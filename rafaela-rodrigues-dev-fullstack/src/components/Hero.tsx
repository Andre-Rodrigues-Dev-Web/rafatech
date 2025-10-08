import React from 'react'
import fundoHeader from '../assets/imgs/fundo-header.jpg'

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src={fundoHeader} 
          alt="Background da desenvolvedora Rafaela Rodrigues" 
          className="hero-image"
          loading="eager"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Bem-vinda ao meu portfólio!
          </h1>
          <h2 className="hero-subtitle">
            Rafaela Rodrigues
          </h2>
          <p className="hero-description">
            Desenvolvedora Full Stack apaixonada por criar soluções inovadoras e experiências digitais excepcionais.
          </p>
          <div className="hero-buttons">
            <a href="#about" className="hero-btn primary">
              Conheça meu trabalho
            </a>
            <a href="#contact" className="hero-btn secondary">
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero