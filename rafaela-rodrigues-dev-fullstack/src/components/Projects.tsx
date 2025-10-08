import React from 'react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  link: string
  image: string
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com carrinho de compras, pagamentos e painel administrativo.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#',
      image: 'ecommerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      link: '#',
      image: 'taskmanager'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico com previsões detalhadas e mapas interativos.',
      technologies: ['Vue.js', 'Express', 'Weather API', 'Chart.js'],
      link: '#',
      image: 'weather'
    }
  ]

  const getProjectImage = (imageType: string) => {
    const images = {
      ecommerce: (
        <svg viewBox="0 0 200 120" className="project-image" role="img" aria-label="Ícone de e-commerce">
          <rect width="200" height="120" fill="#f3f4f6"/>
          <rect x="20" y="20" width="160" height="80" fill="#32D99C" rx="8"/>
          <circle cx="60" cy="60" r="15" fill="#fff"/>
          <rect x="85" y="45" width="80" height="8" fill="#fff" rx="4"/>
          <rect x="85" y="60" width="60" height="6" fill="#e5e7eb" rx="3"/>
          <rect x="85" y="72" width="40" height="6" fill="#e5e7eb" rx="3"/>
        </svg>
      ),
      taskmanager: (
        <svg viewBox="0 0 200 120" className="project-image" role="img" aria-label="Ícone de gerenciador de tarefas">
          <rect width="200" height="120" fill="#f3f4f6"/>
          <rect x="20" y="20" width="160" height="80" fill="#32D99C" rx="8"/>
          <rect x="40" y="35" width="120" height="6" fill="#fff" rx="3"/>
          <rect x="40" y="50" width="100" height="6" fill="#d1fae5" rx="3"/>
          <rect x="40" y="65" width="80" height="6" fill="#d1fae5" rx="3"/>
          <circle cx="30" cy="38" r="3" fill="#fff"/>
          <circle cx="30" cy="53" r="3" fill="#d1fae5"/>
          <circle cx="30" cy="68" r="3" fill="#d1fae5"/>
        </svg>
      ),
      weather: (
        <svg viewBox="0 0 200 120" className="project-image" role="img" aria-label="Ícone de dashboard meteorológico">
          <rect width="200" height="120" fill="#f3f4f6"/>
          <rect x="20" y="20" width="160" height="80" fill="#32D99C" rx="8"/>
          <circle cx="70" cy="50" r="20" fill="#fbbf24"/>
          <path d="M110 65 Q120 55 130 65 Q140 55 150 65 Q140 75 130 65 Q120 75 110 65" fill="#fff"/>
          <rect x="40" y="80" width="15" height="3" fill="#fff" rx="1"/>
          <rect x="60" y="80" width="20" height="3" fill="#fff" rx="1"/>
          <rect x="85" y="80" width="10" height="3" fill="#fff" rx="1"/>
        </svg>
      )
    }
    return images[imageType as keyof typeof images] || images.ecommerce
  }

  return (
    <section id="projects" className="section projects" role="main" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading">Projetos</h2>
        <div className="projects-grid" role="list" aria-label="Lista de projetos">
          {projects.map(project => (
            <article key={project.id} className="project-card" role="listitem">
              <div className="project-image-container">
                {getProjectImage(project.image)}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies" role="list" aria-label={`Tecnologias usadas no projeto ${project.title}`}>
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag" role="listitem">{tech}</span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="project-link"
                  aria-label={`Ver detalhes do projeto ${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects