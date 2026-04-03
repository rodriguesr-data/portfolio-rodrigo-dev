import { useEffect, useState } from "react"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll("section")
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id")
        }
      })

      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h1>Rodrigo</h1>

      <ul>
        <li>
          <a href="#about" className={active === "about" ? "active" : ""}>
            Sobre
          </a>
        </li>

        <li>
          <a href="#projects" className={active === "projects" ? "active" : ""}>
            Projetos
          </a>
        </li>

        <li>
          <a href="#contact" className={active === "contact" ? "active" : ""}>
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar