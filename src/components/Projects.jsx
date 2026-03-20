import { motion } from "framer-motion"

function Projects() {
  return (
    <section id="projects" className="projects">

      <h2>Projetos</h2>

      <div className="projects-grid">

        {[1,2,3].map((item, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>Projeto {index + 1}</h3>
            <p>Descrição do projeto aqui</p>
          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default Projects