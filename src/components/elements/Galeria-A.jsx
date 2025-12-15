import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";


const GaleriaAni = ({ imagenes }) => {

  // control de estado de las cards
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="py-5 mb-4">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Nuestra Galería</h2>

        {/* contenido de las cards pequeñas */}
        <div className="galeria-cont">
          {imagenes.map((imagen) => (
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              key={imagen.id}
              layoutId={`container-${imagen.id}`}
              onClick={() => setSelectedId(imagen.id)}
              whileHover={{ scale: 1.03 }}
              className="img-cont"
            >
              <motion.img 
                layoutId={`img-${imagen.id}`}
                src={imagen.src} 
                alt={imagen.alt}
                className="img-m"
              />
            </motion.div>
          ))}
        </div>

        {/* contenido del modal */}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="modal-ani"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={`container-${selectedId}`}
                className="modal-cont"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="btn-close position-absolute top-0 end-0 m-3"
                ></button>
                
                {/* Contenido del modal */}
                <Container fluid className="p-0">
                  <Row className="g-0">
                    <Col md={7} className="modal-img">
                      <motion.img 
                        layoutId={`img-${selectedId}`}
                        src={imagenes.find(i => i.id === selectedId).src}
                        alt="Detalle"
                        className="modal-img-position"
                      />
                    </Col>
                    
                    <Col md={5} className="modal-desc-position text-center p-4">
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="fw-bold mb-3"
                      >
                        {imagenes.find(i => i.id === selectedId).titulo}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                        className=""
                      >
                        {imagenes.find(i => i.id === selectedId).descripcion}
                      </motion.p>
                    </Col>
                  </Row>
                </Container>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default GaleriaAni;