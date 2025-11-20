import React from 'react';
import { motion } from 'framer-motion';

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

const NivelesCamino = () => {
  return (
    <section className="camino-section">
      <div className="camino-header">
        <h2>{/*El Camino a la Fluidez*/}Programas por Edades</h2>
        <p>Acompañamos a tu hijo en cada etapa de su aprendizaje</p>
      </div>

      <div className="camino-container">
        <div className="linea-conector-fondo"></div>

        {nivelesData.map((nivel, index) => (
          <div className="camino-step-wrapper" key={nivel.id}>
            
            <motion.div 
              className="camino-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 60 }}
              whileHover={{ y: -10, borderColor: nivel.color }}
            >
              <div className="camino-icon-circle" style={{ backgroundColor: nivel.color }}>
                {nivel.icono}
              </div>
              
              <h3>{nivel.titulo}</h3>
              <span className="camino-edad">{nivel.edad}</span>
              <p className="camino-desc">{nivel.descripcion}</p>
              
              <ul className="card-checklist">
                {nivel.features.map((feature, i) => (
                  <li key={i}>
                    <span style={{ color: nivel.color }}>✔</span> {feature}
                  </li>
                ))}
              </ul>

            </motion.div>

            {index < nivelesData.length - 1 && (
              <div className="flecha-conector">➜</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NivelesCamino;