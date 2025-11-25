import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavbarP, FooterP, ClaseMuestra, Backtop } from "../components";
import "../styles/sucursales.css";

const EkCanoitas = () => {
  return (
    <>
      <NavbarP />
      <Backtop />

      {/* 1. HERO DE SUCURSAL */}
      <div className="sucursal-hero">
        <div className="hero-overlay">
          <Container className="text-center text-white">
            <motion.h1 
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="display-3 fw-bold"
            >
              Sede Canoitas
            </motion.h1>
            <p className="lead">El corazón de EuroKids en el centro de la ciudad</p>
          </Container>
        </div>
      </div>

      {/* 2. INFORMACIÓN Y MAPA */}
      <section className="sucursal-info-section">
        <Container>
          <Row className="g-5 align-items-center">
            
            {/* COLUMNA IZQ: DATOS DE CONTACTO */}
            <Col lg={5}>
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 text-primary fw-bold">Visítanos</h2>
                
                <div className="info-item">
                  <div className="icon-box"></div>
                  <div>
                    <h5>Dirección</h5>
                    <p className="text-muted">
                      Av 3a. Sur Pte 1204, Las Canoitas,<br />
                      29060 Tuxtla Gutiérrez, Chis.
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"></div>
                  <div>
                    <h5>Teléfono</h5>
                    <p className="text-muted">961 611 3802</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box"></div>
                  <div>
                    <h5>Horarios de Atención</h5>
                    <p className="text-muted mb-0">Lunes a Viernes: 9:00 AM - 8:00 PM</p>
                    <p className="text-muted">Sábados: 9:00 AM - 3:00 PM</p>
                  </div>
                </div>

                <div className="mt-4">
                  <Button variant="success" size="lg" className="rounded-pill px-4 d-flex align-items-center gap-2">
                     Enviar Mensaje a Canoitas
                  </Button>
                </div>
              </motion.div>
            </Col>

            <Col lg={7}>
              <motion.div 
                className="map-container shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <iframe 
                  title="Mapa EuroKids Canoitas"
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  allowFullScreen 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.48526020212!2d-93.12890042536718!3d16.75251608403034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8f7365ed81f%3A0x1679c94ff8ab27b9!2sEurokids%20Sucursal%20Canoitas%20-%20Ingl%C3%A9s%20para%20ni%C3%B1os!5e0!3m2!1ses-419!2smx!4v1764100067573!5m2!1ses-419!2smx"
                ></iframe>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 3. GALERÍA DE INSTALACIONES (Placeholder) */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Conoce nuestras instalaciones</h2>
          <Row className="g-4">
            {[1, 2, 3].map((item) => (
              <Col md={4} key={item}>
                <Card className="border-0 shadow-sm h-100 overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    src={`https://via.placeholder.com/400x300?text=Instalación+${item}`} 
                    alt="Salon de clases" 
                    className="img-fluid"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <ClaseMuestra />
      <FooterP />
    </>
  );
};

export default EkCanoitas;