import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Rafaela Rodrigues. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a 
              href="#about" 
              aria-label="Ir para seção Sobre Mim"
            >
              Sobre
            </a>
            <a 
              href="#skills" 
              aria-label="Ir para seção Habilidades"
            >
              Habilidades
            </a>
            <a 
              href="#projects" 
              aria-label="Ir para seção Projetos"
            >
              Projetos
            </a>
            <a 
              href="#contact" 
              aria-label="Ir para seção Contato"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer