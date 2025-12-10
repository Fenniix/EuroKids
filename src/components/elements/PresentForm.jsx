import { Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import { motion } from 'framer-motion';

const PresentForm = ({ titulo, destacado }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias! En un momento te contactamos.");
  };

  return (
    <div className="form-present" id="formulario">
      <Container className="position-relative">
        <Row className="align-items-center py-5">
          <Col lg={7} className="text-black mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-4 fw-bold mb-3 posicion-text">
                {titulo} 
                <span className="text-warning display-1 fw-bold"> {destacado}</span>
              </h1>

              {/* Como prueba enn caso de añadir texto desciptivo o iconos */}
              {/* <p className="lead mb-4">

              </p>
              <div className="d-flex gap-4">
                <div className="d-flex align-items-center">

                </div>
              </div> */}
              
            </motion.div>
          </Col>
          {/* imagen para llenar el vacio del inicio */}
          {/* <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="img-niño">
            <img src="src/assets/img/niño-inicio.webp" alt="" width={"40%"}/>
          </motion.div> */}

          <Col lg={5} className="z-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="form-card shadow-lg">
                <div className="text-center mb-4">
                  <h3 className="fw-bold">¡Solicita Información!</h3>
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
                      className="btn-form luz fw-bold"
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