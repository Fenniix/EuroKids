import { motion } from "framer-motion";

const ClaseMuestra = () => {
  return (
    <section className="cta-section">

      {/* Ola superior */}
      <div className="custom-shape-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      {/* contenido principal */}
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

        <a href="#formulario">
          <motion.button 
            className="cta-btn"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#formulario"
          >
            ¡Quiero mi clase GRATIS!
          </motion.button>
        </a>
        <p className="cta-disclaimer fs-6">*Cupos limitados por grupo para garantizar la atención personalizada.</p>
      </div>

      {/* Ola inferior */}
      <div class="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default ClaseMuestra;