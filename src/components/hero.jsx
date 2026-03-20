import { motion } from "framer-motion"

function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>
        Olá, eu sou <span>Rodrigo</span>
      </h1>

      <p>
        Desenvolvedor focado em Node.js, dados e automação.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">Ver Projetos</a>
        <a href="#" className="btn-outline">GitHub</a>
      </div>
    </motion.section>
  )
}

export default Hero