import React from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';
import { motion } from 'framer-motion';


const HeroForm = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias! En un momento te contactamos.");
    // Aquí conectarías después con tu backend o servicio de correos
  };

  return (
    <div className="hero-form-section">
      {/* Fondo decorativo (puede ser imagen o color) */}
      <div className="hero-bg-overlay"></div>

      <Container className="position-relative z-2">
        <Row className="align-items-center py-5">
          
          {/* --- COLUMNA 1: TEXTO (Izquierda) --- */}
          {/* order-2 order-lg-1: En móvil baja, en PC va primero */}
          <Col lg={7} className="text-white mb-5 mb-lg-0 order-2 order-lg-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-3 fw-bold mb-3">
                El futuro de tus hijos <br />
                <span className="text-warning">empieza hoy.</span>
              </h1>
              <p className="lead mb-4" style={{ fontSize: '1.25rem', opacity: 0.9 }}>
                Inglés, Francés y Alemán con el método más divertido y efectivo de Chiapas. 
                Agenda una clase muestra gratis y compruébalo.
              </p>
              
              {/* Pequeña prueba social o iconos */}
              <div className="d-flex gap-4">
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: '1.5rem' }}>🎓</span>
                  <span>Certificaciones</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: '1.5rem' }}>🏫</span>
                  <span>Instalaciones Seguras</span>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* --- COLUMNA 2: FORMULARIO (Derecha) --- */}
          {/* order-1 order-lg-2: En móvil va primero (opcional) o segundo */}
          <Col lg={5} className="order-1 order-lg-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="form-card shadow-lg">
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-dark">¡Solicita Informes!</h3>
                  <p className="text-muted small">Déjanos tus datos y te contactamos vía WhatsApp</p>
                </div>

                <Form onSubmit={handleSubmit}>
                  {/* Nombre */}
                  <FloatingLabel controlId="floatingName" label="Nombre Completo" className="mb-3">
                    <Form.Control type="text" placeholder="Nombre" required />
                  </FloatingLabel>

                  {/* Teléfono (El más importante) */}
                  <FloatingLabel controlId="floatingPhone" label="Teléfono / WhatsApp" className="mb-3">
                    <Form.Control type="tel" placeholder="Teléfono" required />
                  </FloatingLabel>

                  {/* Interés */}
                  <FloatingLabel controlId="floatingSelect" label="Me interesa:" className="mb-3">
                    <Form.Select aria-label="Selecciona idioma">
                      <option value="ingles">Inglés para Niños</option>
                      <option value="frances">Francés</option>
                      <option value="aleman">Alemán</option>
                      <option value="costos">Saber Costos</option>
                    </Form.Select>
                  </FloatingLabel>

                  {/* Botón Submit */}
                  <div className="d-grid">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn btn-primary btn-lg fw-bold"
                      type="submit"
                      style={{ backgroundColor: 'blueviolet', border: 'none' }}
                    >
                      QUIERO INFORMACIÓN
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