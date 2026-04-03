import { useEffect, useRef, useState } from "react"

function About() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      {
        threshold: 0.2
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about-section">
      <p className="about-subtitle">
        Conheça a pessoa por trás do código
      </p>

      <div
        ref={ref}
        className={`about-container fade-in ${visible ? "show" : ""}`}
      >
        <div className="about-image">
          <img
            src="/foto-rodrigo.jpg"
            alt="Rodrigo"
            className="profile-img"
          />
        </div>

        <div className="about-content">
          <h2>
            Desenvolvedor focado em Web, Dados e Automação
          </h2>

          <p>
            Sou estudante de tecnologia com foco em desenvolvimento web e análise de dados.
            Estou construindo minha base com projetos práticos e evoluindo constantemente.
          </p>

          <p>
            Meu objetivo é conquistar minha primeira oportunidade na área.
          </p>

          <a href="/curriculo.pdf" className="btn" download>
            Baixar Currículo
          </a>
        </div>
      </div>
    </section>
  )
}

export default About