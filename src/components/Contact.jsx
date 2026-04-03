function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <h2>Contato</h2>
                <p>Vamos nos conectar</p>
            </div>

            <p className="contact-subtitle">
                Estou aberto a oportunidades e conexões na área de tecnologia.
            </p>

            <div className="contact-container">

                {/* LADO ESQUERDO */}
                <div className="contact-info">
                    <h3>Vamos conversar</h3>

                    <p>
                        Se você está procurando um desenvolvedor dedicado, em constante evolução
                        e com foco em dados e tecnologia, será um prazer conversar com você.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:rodrigo.rodrigues11780@gmail.com" className="contact-item">
                            📧 rodrigo.rodrigues11780@gmail.com
                        </a>

                        <a
                            href="https://github.com"
                            target="_blank"
                            className="contact-item"
                        >
                            💻 GitHub
                        </a>
                    </div>
                </div>

                {/* LADO DIREITO */}
                <div className="contact-actions">
                    <a href="/curriculo.pdf" className="btn" download>
                        Baixar Currículo
                    </a>

                    <a
                        href="mailto:rodrigo.rodrigues11780@gmail.com"
                        className="btn-outline"
                    >
                        Enviar Email
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Contact