import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../../styles/elements.css"


const imagenesDeEjemplo = [
  {
    id: 1,
    src: "src/assets/img/cls-interactiva.jpg",
    alt: 'Descripción de la imagen 1',
    titulo: 'Aprendizaje Temprano',
    descripcion: 'Con un enfoque lúdico, introducimos conceptos básicos de matemáticas, lectura y ciencias, preparando a los niños para sus próximos retos.',
  },
  {
    id: 2,
    src: "src/assets/img/cls-interactiva.jpg",
    alt: 'Descripción de la imagen 2',
  },
  {
    id: 3,
    src: "src/assets/img/cls-interactiva.jpg",
    alt: 'Descripción de la imagen 3',
  },
  {
    id: 4,
    src: "src/assets/img/cls-interactiva.jpg",
    alt: 'Descripción de la imagen 4',
  },
];

const GaleriaA1 = () => {

  const [imgSeleccionada, setImgSeleccionada] = useState(null);

  const abrirModal = (imagen) => {
    setImgSeleccionada(imagen);
  };

  const cerrarModal = () => {
    setImgSeleccionada(null);
  };

  return(
    <>
      <div className="galeria-container">
        <h2>Nuestra Galería</h2>

        <div className="galeria-grid">
            {imagenesDeEjemplo.map((imagen) => (
            <div
                key={imagen.id}
                className="galeria-item"
                onClick={() => abrirModal(imagen)}
            >
                <img src={imagen.src} alt={imagen.alt} />
            </div>
            ))}
        </div>

        {imgSeleccionada && (
          <div className="modal-galeria" onClick={cerrarModal}>
            
            <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
              <span className="modal-cerrar" onClick={cerrarModal}>
                &times;
              </span>
              <div className="modal-col-texto">
                <h3>{imgSeleccionada.titulo}</h3>
                <p>{imgSeleccionada.descripcion}</p>
              </div>
              <div className="modal-col-imagen">
                <img src={imgSeleccionada.src} alt={imgSeleccionada.alt} />
              </div>
            </div>
          </div>
        )}
      </div>
    
    </>
  )
}

const GaleriaA2 = () => {

  const [imgSeleccionada, setImgSeleccionada] = useState(null);

  const abrirModal = (imagen) => {
    setImgSeleccionada(imagen);
  };

  const cerrarModal = () => {
    setImgSeleccionada(null);
  };

  return(
    <>

      <div className="galeria-container">
        <h2>Nuestra Galería</h2>

        <div className="galeria-grid">
          {imagenesDeEjemplo.map((imagen) => (
            <motion.div
              key={imagen.id}
              className="galeria-item"
              onClick={() => abrirModal(imagen)}
              
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)" 
              }}
              transition={{ duration: 0.3 }}
            >
              <img src={imagen.src} alt={imagen.alt} />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {imgSeleccionada && (
            <motion.div
              className="modal-galeria"
              onClick={cerrarModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="modal-contenido"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, y: -30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }} // ¡Animación de salida!
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span className="modal-cerrar" onClick={cerrarModal}>
                  &times;
                </span>
                <div className="modal-col-texto">
                  <h3>{imgSeleccionada.titulo}</h3>
                  <p>{imgSeleccionada.descripcion}</p>
                </div>
                <div className="modal-col-imagen">
                  <img src={imgSeleccionada.src} alt={imgSeleccionada.alt} />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    
    </>
  )
}


const GaleriaAni = () => {
  return(
    <>
      
     <GaleriaA2/>
     
    </>
  )
}

export default GaleriaAni