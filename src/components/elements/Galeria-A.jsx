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
  // Puedes agregar más imágenes aquí
];

const GaleriaA1 = () => {

  // 2. El estado para saber qué imagen está seleccionada
  // 'null' significa que ninguna está seleccionada (modal cerrado)
  const [imgSeleccionada, setImgSeleccionada] = useState(null);

  // 3. Funciones para abrir y cerrar el modal
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

        {/* 4. La cuadrícula de imágenes (thumbnails) */}
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

        {/* 5. El Modal (con la nueva estructura de 2 columnas) */}
        {imgSeleccionada && (
          <div className="modal-galeria" onClick={cerrarModal}>
            
            <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
              <span className="modal-cerrar" onClick={cerrarModal}>
                &times;
              </span>
              
              {/* ---- INICIO DE LA NUEVA ESTRUCTURA ---- */}
              
              {/* Columna Izquierda: Texto */}
              <div className="modal-col-texto">
                <h3>{imgSeleccionada.titulo}</h3>
                <p>{imgSeleccionada.descripcion}</p>
                {/* Aquí podrías agregar más info, como una lista o botones */}
              </div>

              {/* Columna Derecha: Imagen */}
              <div className="modal-col-imagen">
                <img src={imgSeleccionada.src} alt={imgSeleccionada.alt} />
              </div>
              
              {/* ---- FIN DE LA NUEVA ESTRUCTURA ---- */}
              
            </div>
          </div>
        )}
      </div>
    
    </>
  )
}

const GaleriaA2 = () => {

  // 2. El estado para saber qué imagen está seleccionada
  // 'null' significa que ninguna está seleccionada (modal cerrado)
  const [imgSeleccionada, setImgSeleccionada] = useState(null);

  // 3. Funciones para abrir y cerrar el modal
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
            // <-- 2. Reemplazamos 'div' por 'motion.div'
            <motion.div
              key={imagen.id}
              className="galeria-item"
              onClick={() => abrirModal(imagen)}
              
              // 3. Animación de Hover (reemplaza el CSS :hover)
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)" 
              }}
              transition={{ duration: 0.3 }} // Suavidad
            >
              <img src={imagen.src} alt={imagen.alt} />
            </motion.div>
          ))}
        </div>

        {/* 4. Envolvemos el modal con AnimatePresence */}
        {/* Esto detecta cuándo el modal se "elimina" del DOM para animar su salida */}
        <AnimatePresence>
          {imgSeleccionada && (
            // 5. El fondo del modal también es un 'motion.div'
            <motion.div
              className="modal-galeria"
              onClick={cerrarModal}
              
              // Animaciones del fondo
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* 6. El contenido del modal también */}
              <motion.div
                className="modal-contenido"
                onClick={(e) => e.stopPropagation()}
                
                // Animaciones del contenido (reemplaza 'slideDown')
                initial={{ opacity: 0, y: -30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }} // ¡Animación de salida!
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                
                {/* El contenido de 2 columnas sigue igual */}
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