import { motion } from "framer-motion"

function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Rodrigo.dev</h2>

      <ul>
        <li><a href="#hero">Início</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projetos</a></li>
      </ul>
    </motion.nav>
  )
}

export default Navbar