import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

// contenido dentro de la sección
const nivelesData = [
  {
    id: 1,
    titulo: "Titulo",
    edad: "3 - 5 años",
    icono: "👶",
    descripcion: "Descubrimiento y Juegos",
    color: "#FFD166",
    features: [
      "Estimulación sensorial",
      "Canciones y juegos",
      "Vocabulario básico"
    ]
  },
  {
    id: 2,
    titulo: "Titulo",
    edad: "6 - 9 años",
    icono: "👦",
    descripcion: "Crecimiento y Creatividad",
    color: "#06D6A0",
    features: [
      "Lectoescritura divertida",
      "Frases completas",
      "Socialización"
    ]
  },
  {
    id: 3,
    titulo: "Titulo",
    edad: "10 - 15 años",
    icono: "🧑‍🎓",
    descripcion: "Dominio y Certificación",
    color: "#118AB2",
    features: [
      "Gramática avanzada",
      "Conversación fluida",
      "Certificación"
    ]
  }
];

const Programas = () => {
  return (
    <section className="programas-section" id="Programas">
      <Card.Body className="programas-title">
        <h2>Programas por Edades</h2>
        <p className="text-secondary pt-2">Acompañamos a tu hijo en cada etapa de su aprendizaje</p>
      </Card.Body>

      {/* estructrura de la card */}
      <Card.Body className="programas-container">
        {nivelesData.map((nivel, index) => (
          <Card.Body className="d-flex align-items-center flex-grow-0" key={nivel.id}>
            <motion.div 
              className="programas-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 60 }}
              whileHover={{ y: -10, borderColor: nivel.color }}
            >
              <Card.Body className="programas-circle" style={{ backgroundColor: nivel.color }}>
                {nivel.icono}
              </Card.Body>
              
              <h3 className="mt-4 pt-3">{nivel.titulo}</h3>
              <span className="programas-edad">{nivel.edad}</span>
              <p className="programas-desc mb-4">{nivel.descripcion}</p>
              
              <ul className="card-checklist p-0">
                {nivel.features.map((feature, i) => (
                  <li key={i}>
                    <span style={{ color: nivel.color }}>✔</span> {feature}
                  </li>
                ))}
              </ul>

            </motion.div>
            
            {index < nivelesData.length - 1 && (
              <Card.Body className="flecha-conector">➜</Card.Body>
            )}
          </Card.Body>
        ))}
      </Card.Body>
    </section>
  );
};

export default Programas;