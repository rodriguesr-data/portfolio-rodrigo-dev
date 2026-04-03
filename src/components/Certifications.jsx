function Certifications() {
    const certs = [
        {
            title: "Google Data Analytics Specialization",
            org: "Google",
            highlight: true
        },
        {
            title: "AZ-900: Fundamentos de Cloud",
            org: "SENAI",
        },
        {
            title: "Excel Avançado",
            org: "Fundação Bradesco",
        },
        {
            title: "Jira Software",
            org: "Coursera",
        }
    ]

    return (
        <section className="cert-section">
            <div className="section-header">
                <h2>Certificações</h2>
            </div>

            <div className="cert-grid">
                {certs.map((cert, index) => (
                    <div
                        key={index}
                        className={`cert-card ${cert.highlight ? "highlight" : ""}`}
                    >
                        <h3>{cert.title}</h3>
                        <p>{cert.org}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Certifications