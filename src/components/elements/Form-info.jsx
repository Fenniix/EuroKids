import React from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import { motion } from 'framer-motion';


const HeroForm = () => {
  
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
                {/* El futuro de tus hijos*/}EuroKids
                <span className="text-warning display-1 fw-bold">Canoitas {/*empieza hoy.*/}</span>
              </h1>
              <p className="lead mb-4" >
                {/* Inglés, Francés y Alemán con el método más divertido y efectivo de Chiapas. 
                Agenda una clase muestra gratis y compruébalo. */}
              </p>
              
              <div className="d-flex gap-4">
                <div className="d-flex align-items-center">
                  {/* <p>por probar</p> */}
                </div>
                <div className="d-flex align-items-center">
                  {/* <p>tambien</p> */}
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
                  {/* <p className="text-muted small">Déjanos tus datos y te contactamos vía WhatsApp</p> */}
                </div>

                <Form onSubmit={handleSubmit}>
                  <FloatingLabel controlId="floatingName" label="Nombre Completo" className="mb-3">
                    <Form.Control type="text" placeholder="Nombre" required />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingPhone" label="Teléfono" className="mb-3">
                    <Form.Control type="tel" placeholder="Teléfono" required />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingSelect" label="Me interesa:" className="mb-3">
                    <Form.Select aria-label="Selecciona idioma">
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

const Buttonform = () => {
  return(
    <>
      <div className="mientras d-flex justify-content-center align-items-center">
        <Button className="btn-enviar luz">
            Enviar
        </Button>
      </div>
    
    </>
  )
}

const FormInfo = () => {
  return(
    <>
      <div className="form-box mt-5">
        <h3 className="text-center p-3 m-0">Solita información</h3>
        <form action="">
            <div className="form-opt pt-0">
              <label htmlFor="">Nombre</label>
              <input type="text" className="form-input"/>
            </div>

            <div className="form-opt">
              <label htmlFor="">Apellido</label>
              <input type="text" className="form-input"/>
            </div>

            <div className="form-opt">
              <label htmlFor="">Numero telefonico</label>
              <input type="number" className="form-input"/>
            </div>
            <Buttonform/>
        </form>
      </div>
      
    </>
  )
}

const Pruebaform = () => {
  return(
    <>
      {/* <Buttonform/> */}
      {/* <FormInfo/> */}
      <HeroForm/>
    </>
  )
}

export default Pruebaform;