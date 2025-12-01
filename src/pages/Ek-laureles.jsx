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
      destacado={"Laureles"}
      />
      {/* <div className="font-pre">
        <Container className="cont-p cont-animado">
          <h1 className="display-1 fw-bold">EUROKIDS <br /><span className="letra"> CANOITAS </span></h1>
        </Container>
      </div> */}

      {/* Bienvenida */}
      <BienvenidaEKC
      sede={"Sede Laureles"}
      />

      {/* Ventajas */}
      <Ventajas/>

      {/* Visitanos - mapa de ubicación */}
      <VisitanosEKC
      mapaUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.3593060101853!2d-93.16784312536701!3d16.75879018402518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd99d9b5ec3c3%3A0x1782a0c0d7ded9ec!2sEurokids%20Sucursal%20Laureles%20-%20Ingl%C3%A9s%20para%20ni%C3%B1os!5e0!3m2!1ses-419!2smx!4v1764617895497!5m2!1ses-419!2smx"}
      />

      <section className="mb-4 py-5">
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