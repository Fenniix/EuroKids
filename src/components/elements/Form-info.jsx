import React from 'react';
import { Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import { motion } from 'framer-motion';

// 1. Aquí recibimos las "instrucciones" (props) de qué texto poner
const PresentForm = ({ titulo, destacado }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias! En un momento te contactamos.");
  };

  return (
    <div className="form-present" id='formulario'>
      <Container className="position-relative z-2">
        <Row className="align-items-center py-5">
          <Col lg={7} className="text-black mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-4 fw-bold mb-3 posicion-text">
                {/* 2. Aquí usamos la variable 'titulo' (Ej: EuroKids) */}
                {titulo} 
                
                {/* 3. Aquí usamos la variable 'destacado' (Ej: Canoitas) */}
                {/* Si no mandas nada en 'destacado', el span no mostrará nada */}
                <span className="text-warning display-1 fw-bold"> {destacado}</span>
              </h1>
              
              <p className="lead mb-4">
                 {/* Aquí dejé el espacio por si luego quieres activar la descripción */}
              </p>
              
              <div className="d-flex gap-4">
                <div className="d-flex align-items-center">
                  {/* Espacio para iconos futuros */}
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={5} className="">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="form-card shadow-lg">
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-dark">¡Solicita Información!</h3>
                </div>

                <Form onSubmit={handleSubmit}>
                  <FloatingLabel controlId="floatingName" label="Nombre Completo" className="mb-3">
                    <Form.Control type="text" placeholder="Nombre" required />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingPhone" label="Teléfono" className="mb-3">
                    <Form.Control type="tel" placeholder="Teléfono" required />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingSelect" label="Me interesa:" className="mb-3">
                    <Form.Select aria-label="Selecciona idioma" defaultValue={"selecciona"}>
                      <option value="selecciona" disabled>--Selecciona un idioma--</option>
                      <option value="ingles">Inglés</option>
                      <option value="frances">Francés</option>
                      <option value="aleman">Alemán</option>
                      <option value="italiano">Italiano</option>
                    </Form.Select>
                  </FloatingLabel>

                  <div className="btn-form-cont">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-form luz"
                      type="submit"
                    >
                      Enviar información
                    </motion.button>
                  </div>
                </Form>
              </div>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default PresentForm;