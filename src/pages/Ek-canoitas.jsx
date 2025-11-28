import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavbarP, FooterP, ClaseMuestra, Backtop, GaleriaAni, Ventajas, VisitanosEKC, Pruebaform, BienvenidaEKC } from "../components";
import "../styles/sucursales.css";

const EkCanoitas = () => {
  useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible-1");
            }
          });
        },
        { threshold: 0.2 }
      );
  
      const botones = document.querySelectorAll(".cont-animado");
      botones.forEach((btn) => observer.observe(btn));
  
      return () => {
        botones.forEach((btn) => observer.unobserve(btn));
      };
    }, []);


  return (
    <>

      {/* Barra de navegacion */}
      <NavbarP />

      {/* Backtop */}
      <Backtop />

      {/* <div className="box-prueba">
        
      </div> */}
      <Pruebaform/>
      {/* <div className="font-pre">
        <Container className="cont-p cont-animado">
          <h1 className="display-1 fw-bold">EUROKIDS <br /><span className="letra"> CANOITAS </span></h1>
        </Container>
      </div> */}

      {/* Bienvenida */}
      <BienvenidaEKC/>

      {/* Ventajas */}
      <Ventajas/>

      {/* Visitanos - mapa de ubicación */}
      <VisitanosEKC/>

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
                    src= "src/assets/img/cls-interactiva.jpg" 
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