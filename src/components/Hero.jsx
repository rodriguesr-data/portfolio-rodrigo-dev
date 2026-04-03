import { useEffect, useRef, useState } from "react"

function Hero() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero">
      <div
        ref={ref}
        className={`hero-content fade-in ${visible ? "show" : ""}`}
      >
        <h1>
          Olá, eu sou <span>Rodrigo</span>
        </h1>

        <h2>
          Desenvolvedor focado em Web, Dados e Automação
        </h2>

        <p>
          Construindo projetos reais enquanto evoluo minhas habilidades em
          programação e tecnologia.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            Ver Projetos
          </a>

          <a
            href="https://github.com"
            target="_blank"
            className="btn-outline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero