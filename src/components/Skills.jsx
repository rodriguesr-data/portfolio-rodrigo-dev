import { motion } from "framer-motion"

function Skills() {
  const skills = ["JavaScript", "Node.js", "Git", "React", "SQL", "Python"]

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills