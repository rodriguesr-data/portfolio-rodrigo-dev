function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>Habilidades</h2>
        <p>Minhas principais competências técnicas</p>
      </div>

      <div className="skills-grid">

        <div className="skill-card featured">
          <h3>Análise de Dados</h3>
          <p>
            Experiência com análise exploratória, limpeza de dados e criação de dashboards.
            Transformo dados em insights para tomada de decisão.
          </p>
          <span>Excel • SQL • MySQL • Dashboards</span>
        </div>

        <div className="skill-card">
          <h3>Desenvolvimento Web</h3>
          <p>
            Criação de interfaces modernas, responsivas e bem estruturadas.
          </p>
          <span>HTML • CSS • JavaScript • React</span>
        </div>

        <div className="skill-card">
          <h3>Banco de Dados</h3>
          <p>
            Modelagem, consultas SQL e manipulação de dados relacionais.
          </p>
          <span>MySQL • SQL • Data Modeling</span>
        </div>

        <div className="skill-card">
          <h3>Ferramentas</h3>
          <p>
            Fluxo completo de desenvolvimento e versionamento.
          </p>
          <span>Git • GitHub • Vercel • VS Code</span>
        </div>

        <div className="skill-card">
          <h3>Automação</h3>
          <p>
            Desenvolvimento de soluções com Arduino e integração com sistemas.
          </p>
          <span>Arduino • Sensores • IoT</span>
        </div>

        <div className="skill-card">
          <h3>Conceitos</h3>
          <p>
            Base sólida em lógica, organização de código e resolução de problemas.
          </p>
          <span>Lógica • Clean Code • Pensamento Analítico</span>
        </div>

      </div>
    </section>
  )
}

export default Skills