import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavbarP, FooterP, ClaseMuestra, Backtop, GaleriaAni, Ventajas, VisitanosEKC, PresentForm, BienvenidaEKC } from "../components";
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

      <PresentForm
      titulo={"EuroKids"}
      destacado={"Canoitas"}
      />
     
      {/* Bienvenida */}
      <BienvenidaEKC
      sede={"Sede Canoitas"}
      />

      {/* Ventajas */}
      <Ventajas/>

      {/* Visitanos - mapa de ubicación */}
      <VisitanosEKC
      mapaUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.48526020212!2d-93.12890042536718!3d16.75251608403034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8f7365ed81f%3A0x1679c94ff8ab27b9!2sEurokids%20Sucursal%20Canoitas%20-%20Ingl%C3%A9s%20para%20ni%C3%B1os!5e0!3m2!1ses-419!2smx!4v1764100067573!5m2!1ses-419!2smx"}
      />

      <GaleriaAni/>
      {/* <section className="mb-4 py-5">
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
      </section> */}

      <ClaseMuestra />
      <FooterP />
    </>
  );
};

export default EkCanoitas;