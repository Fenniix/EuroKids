import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlagUS from '../../assets/icons/Flag-US.jpg';

const idiomasData = [
  {
    id: 'ing',
    titulo: 'Inglés',
    icono: FlagUS, 
    descripcion: 'El idioma universal. Preparamos a tus hijos para certificaciones Cambridge desde niveles iniciales con métodos 100% conversacionales.',
    color: '#E63946'
  },
  {
    id: 'fra',
    titulo: 'Francés',
    icono: 'https://flagcdn.com/w320/fr.png',
    descripcion: 'El idioma de la cultura y las artes. Clases dinámicas enfocadas en la pronunciación y la inmersión cultural temprana.',
    color: '#457B9D'
  },
  {
    id: 'ale',
    titulo: 'Alemán',
    icono: 'https://flagcdn.com/w320/de.png',
    descripcion: 'Desarrolla el pensamiento lógico. Ideal para niños curiosos, con materiales didácticos traídos directamente de Alemania.',
    color: '#F4A261'
  },
  {
    id: 'ita',
    titulo: 'Italiano',
    icono: 'https://flagcdn.com/w320/it.png',
    descripcion: 'Divertido y sonoro. Un acercamiento amigable a una nueva lengua a través de la música, la cocina y el juego.',
    color: '#35be63ff'
  }
];

const Idiomas = () => {
  const [idSeleccionado, setIdSeleccionado] = useState(null);

  return (
    <div className="idiomas-container" id="idiomas">
      <h2>Nuestros Idiomas</h2>
      <p className="idiomas-subtitulo">Elige el camino para su futuro</p>

      <div className="idiomas-grid">
        {idiomasData.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            className="idioma-card"
            onClick={() => setIdSeleccionado(item.id)}
            whileHover={{ scale: 1.03 }}
            style={{ borderTop: `5px solid ${item.color}` }}
          >
            <motion.img 
              layoutId={`icono-${item.id}`} 
              className="idioma-img-icono" 
              src={item.icono} 
              alt={`${item.titulo} Icono`} 
            />
            
            <motion.h3 layoutId={`titulo-${item.id}`} className="idioma-titulo">
              {item.titulo}
            </motion.h3>
            <motion.p className="ver-mas">Click para ver más</motion.p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {idSeleccionado && (
          <>
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIdSeleccionado(null)}
            />

            <div className="modal-wrapper">
              {idiomasData.filter(item => item.id === idSeleccionado).map((item) => (
                <motion.div
                  layoutId={`card-${item.id}`}
                  className="idioma-modal"
                  key={item.id}
                >
                  <motion.button 
                    className="btn-cerrar"
                    onClick={() => setIdSeleccionado(null)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.5 } }}
                  >
                    &times;
                  </motion.button>

                  <div className="modal-header" style={{ backgroundColor: item.color }}>
                    <motion.h3 layoutId={`titulo-${item.id}`} className="modal-titulo">
                      {item.titulo}
                    </motion.h3>
                    
                    <motion.img 
                      layoutId={`icono-${item.id}`} 
                      className="modal-img-icono-mini" 
                      src={item.icono} 
                      alt={`${item.titulo} Icono`}
                    />
                  </div>

                  <motion.div 
                    className="modal-body"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p>{item.descripcion}</p>
                    <a href="#formulario" className="w-100 text-center">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-info luz fw-bold"
                        onClick={() => setIdSeleccionado(null)}
                      >
                        Solicitar info de {item.titulo}
                      </motion.button>
                    </a>
                    
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Idiomas;