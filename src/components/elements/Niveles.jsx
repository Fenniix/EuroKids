import React from 'react';
import { motion } from 'framer-motion';

const nivelesData = [
  {
    id: 1,
    titulo: "Baby Euro",
    edad: "3 - 5 años",
    descripcion: "Despertamos su curiosidad natural.",
    color: "#FFD166", // Amarillo cálido
    features: [
      "Estimulación sensorial",
      "Canciones y juegos",
      "Vocabulario básico",
      "Motricidad fina"
    ]
  },
  {
    id: 2,
    titulo: "Euro Kids",
    edad: "6 - 9 años",
    descripcion: "Construimos bases sólidas.",
    color: "#06D6A0", // Verde menta
    features: [
      "Lectoescritura divertida",
      "Frases completas",
      "Proyectos creativos",
      "Socialización en el idioma"
    ]
  },
  {
    id: 3,
    titulo: "Euro Teens",
    edad: "10 - 15 años",
    descripcion: "Dominio y certificación.",
    color: "#118AB2", // Azul serio
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
        <h2>Programas por Edades</h2>
        <p>Un espacio diseñado para cada etapa de su crecimiento</p>
      </div>

      <div className="niveles-grid">
        {nivelesData.map((nivel, index) => (
          <motion.div 
            key={nivel.id}
            className="nivel-card"
            // Animación de entrada escalonada (stagger)
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Se anima solo la primera vez que lo ves
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ y: -10 }} // Pequeño levantamiento al pasar el mouse
          >
            {/* Cabecera de color */}
            <div className="nivel-top" style={{ backgroundColor: nivel.color }}>
              <h3>{nivel.titulo}</h3>
            </div>

            <div className="nivel-body">
              <div className="nivel-edad-badge">{nivel.edad}</div>
              <p className="nivel-desc">{nivel.descripcion}</p>
              
              {/* Lista de características (Checklist) */}
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