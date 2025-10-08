import React, { useState } from 'react'
import { MdEmail, MdSend } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log('Form submitted:', formData)
    alert('Mensagem enviada com sucesso!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section contact" role="main" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading">Contato</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Vamos conversar!</h3>
            <p>
              Estou sempre aberta a novas oportunidades e projetos interessantes. 
              Entre em contato comigo através do formulário ou pelos canais abaixo.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <MdEmail className="contact-icon" aria-hidden="true" />
                <a href="mailto:rafaela@exemplo.com" aria-label="Enviar email para rafaela@exemplo.com">
                  rafaela@exemplo.com
                </a>
              </div>
              <div className="contact-item">
                <FaLinkedin className="contact-icon" aria-hidden="true" />
                <a 
                  href="https://linkedin.com/in/rafaela-rodrigues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Perfil do LinkedIn de Rafaela Rodrigues"
                >
                  LinkedIn
                </a>
              </div>
              <div className="contact-item">
                <FaGithub className="contact-icon" aria-hidden="true" />
                <a 
                  href="https://github.com/rafaela-rodrigues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Perfil do GitHub de Rafaela Rodrigues"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Nome *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby="name-error"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby="email-error"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby="message-error"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" aria-describedby="submit-help">
              <MdSend className="btn-icon" />
              Enviar Mensagem
            </button>
            <p id="submit-help" className="sr-only">
              Clique para enviar sua mensagem. Todos os campos marcados com * são obrigatórios.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact