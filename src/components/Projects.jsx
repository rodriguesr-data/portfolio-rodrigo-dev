function Projects() {
  const projects = [
    {
      title: "Portfólio Pessoal",
      description:
        "Site desenvolvido com React para apresentar minhas habilidades e evolução como desenvolvedor.",
      tech: "React • CSS • Vite",
      image: "/projeto1.png",
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Sistema de Enchentes",
      description:
        "Projeto com Arduino para monitorar nível da água e enviar dados para banco de dados.",
      tech: "Arduino • MySQL",
      image: "/projeto2.png",
      github: "https://github.com",
      demo: "#"
    },
    {
      title: "Dashboard de Dados",
      description:
        "Análise de dados com visualizações e insights para tomada de decisão.",
      tech: "SQL • Excel • DataViz",
      image: "/projeto3.png",
      github: "https://github.com",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>Projetos</h2>
        <p>Projetos que demonstram minhas habilidades na prática</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            <img src={project.image} alt={project.title} />

            <div className="project-overlay">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="tech">{project.tech}</span>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  className="btn-outline"
                >
                  GitHub
                </a>

                <a href={project.demo} className="btn">
                  Ver Projeto
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects