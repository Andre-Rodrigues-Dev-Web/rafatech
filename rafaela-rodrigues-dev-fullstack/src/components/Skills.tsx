import React from 'react'

const Skills: React.FC = () => {
  const skills = {
    frontend: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    tools: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code', 'Postman']
  }

  return (
    <section id="skills" className="section skills" role="main" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading">Habilidades</h2>
        <div className="skills-grid">
          <article className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-tags" role="list" aria-label="Tecnologias de frontend">
              {skills.frontend.map(skill => (
                <span key={skill} className="skill-tag" role="listitem">{skill}</span>
              ))}
            </div>
          </article>
          <article className="skill-category">
            <h3>Backend</h3>
            <div className="skill-tags" role="list" aria-label="Tecnologias de backend">
              {skills.backend.map(skill => (
                <span key={skill} className="skill-tag" role="listitem">{skill}</span>
              ))}
            </div>
          </article>
          <article className="skill-category">
            <h3>Ferramentas</h3>
            <div className="skill-tags" role="list" aria-label="Ferramentas de desenvolvimento">
              {skills.tools.map(skill => (
                <span key={skill} className="skill-tag" role="listitem">{skill}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Skills