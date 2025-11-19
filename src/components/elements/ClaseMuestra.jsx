import React from 'react';
import { motion } from 'framer-motion';

const ClaseMuestra = () => {
  return (
    <section className="cta-section">
      
      {/* 1. El Separador de Ola (SVG) */}
      {/* "fill" debe ser del mismo color que la sección ANTERIOR (blanco) */}
      <div className="custom-shape-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      {/* 2. El Contenido */}
      <div className="cta-content">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¿Tu hijo está listo para la aventura? 🚀
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No dejes que se lo cuenten. Agenda hoy una <strong>clase muestra sin costo</strong> y descubre por qué los niños aman aprender en EuroKids.
        </motion.p>

        {/* 3. El Botón con "Latido" */}
        <motion.button 
          className="cta-btn"
          animate={{ 
            scale: [1, 1.05, 1], // Crece un 5% y regresa
            boxShadow: [
              "0px 0px 0px rgba(255,255,255,0.7)",
              "0px 0px 20px rgba(255,255,255,0)", // Efecto de onda expandiéndose
              "0px 0px 0px rgba(255,255,255,0)"
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, // Se repite por siempre
            ease: "easeInOut" 
          }}
          whileHover={{ scale: 1.1 }} // Al pasar el mouse crece más
          whileTap={{ scale: 0.95 }}
        >
          ¡Quiero mi clase GRATIS!
        </motion.button>
        
        <p className="cta-disclaimer">*Cupos limitados por grupo para garantizar la atención personalizada.</p>
      </div>
    </section>
  );
};

export default ClaseMuestra;