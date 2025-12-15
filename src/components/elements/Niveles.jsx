import { motion } from "framer-motion";

// PENDIENTE PARA DEFINIR SU PROPOSITO

// informcación dentro de cada card
const nivelesData = [
  {
    id: 1,
    titulo: "Titulo",
    edad: "3 - 5 años",
    descripcion: "Despertamos su curiosidad natural.",
    color: "#FFD166",
    features: [
      "Estimulación sensorial",
      "Canciones y juegos",
      "Vocabulario básico",
      "Motricidad fina"
    ]
  },
  {
    id: 2,
    titulo: "Titulo",
    edad: "6 - 9 años",
    descripcion: "Construimos bases sólidas.",
    color: "#06D6A0",
    features: [
      "Lectoescritura divertida",
      "Frases completas",
      "Proyectos creativos",
      "Socialización en el idioma"
    ]
  },
  {
    id: 3,
    titulo: "Titulo",
    edad: "10 - 15 años",
    descripcion: "Dominio y certificación.",
    color: "#118AB2",
    features: [
      "Gramática avanzada",
      "Conversación fluida",
      "Preparación para certificación",
      "Club de debate"
    ]
  }
];

const Niveles = () => {
  return (
    <section className="niveles-section">
      <div className="niveles-header">
        <h2>Titulo</h2>
        <p>Descripción</p>
      </div>

      <div className="niveles-grid">
        {nivelesData.map((nivel, index) => (
          <motion.div 
            key={nivel.id}
            className="nivel-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ y: -10 }}
          >
            
            <div className="nivel-top" style={{ backgroundColor: nivel.color }}>
              <h3>{nivel.titulo}</h3>
            </div>

            <div className="nivel-body">
              <div className="nivel-edad-badge">{nivel.edad}</div>
              <p className="nivel-desc">{nivel.descripcion}</p>
              
              
              <ul className="nivel-lista">
                {nivel.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check-icon" style={{ color: nivel.color }}>✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="nivel-btn" style={{ borderColor: nivel.color, color: nivel.color }}>
                Más detalles
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Niveles;