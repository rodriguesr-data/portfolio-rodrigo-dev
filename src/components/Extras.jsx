function Extras() {
    const extras = [
        "Comunicação",
        "Trabalho em equipe",
        "Proatividade",
        "Responsabilidade",
        "Organização",
        "Pensamento lógico",
        "Resolução de problemas",
        "Aprendizado rápido",
        "Autodidata",
        "Curiosidade tecnológica",
        "Visão de produto",
        "Foco em resultados",
        "Adaptabilidade",
        "Gestão de tempo",
        "Atenção aos detalhes",
        "Clean Code",
        "Boas práticas",
        "Estrutura de projetos",
        "Versionamento com Git",
        "Leitura de documentação",
        "Debugging",
        "Análise de dados",
        "Criação de dashboards",
        "Interpretação de dados",
        "Melhoria contínua",
        "Trabalho sob pressão"
    ]

    return (
        <section className="extras-section">
            <div className="section-header">
                <h2>Competências adicionais</h2>
            </div>

            <div className="extras-tags">
                {extras.map((item, index) => (
                    <span key={index} className="extra-tag">
                        {item}
                    </span>
                ))}
            </div>
        </section>
    )
}

export default Extras