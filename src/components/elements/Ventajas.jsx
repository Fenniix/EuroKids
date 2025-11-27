import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ventajasData = [
  {
    id: 1,
    titulo: "Aulas Climatizadas",
    texto: "Sabemos que el calor en Tuxtla es fuerte. Todas nuestras aulas cuentan con aire acondicionado para que el aprendizaje sea fresco y cómodo.",
    icono: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000ff"><path d="M800-480H160q-33 0-56.5-23.5T80-560v-240q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v240q0 33-23.5 56.5T800-480ZM160-200v-80q50 0 85-35t35-85h80q0 83-58.5 141.5T160-200Zm640 0q-83 0-141.5-58.5T600-400h80q0 50 35 85t85 35v80Zm-360 40v-240h80v240h-80Zm360-400H160h640Zm-560 0v-80q0-33 23.5-56.5T320-720h320q33 0 56.5 23.5T720-640v80h-80v-80H320v80h-80Zm-80 0h640v-240H160v240Z"/></svg>,
    color: "#00b4d8"
  },
  {
    id: 2,
    titulo: "Fácil Acceso",
    texto: "Ubicados en una zona estratégica para evitar el tráfico pesado del centro. Llegar y dejar a tus hijos es rápido y sin estrés.",
    icono: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000ff"><path d="M673-480ZM80-200v-160h160v160H80Zm320-120-56-56 63-64H80v-80h327l-63-64 56-56 160 160-160 160ZM80-600v-160h160v160H80ZM400-80v-160h80v80h320v-640H480v80h-80v-160h480v205h40v190h-40v405H400Z"/></svg>,
    color: "#f4a261"
  },
  {
    id: 3,
    titulo: "Seguridad Total",
    texto: "Circuito cerrado de cámaras y control estricto de entrada/salida. Solo tú o personas autorizadas pueden recoger a los alumnos.",
    icono: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000ff"><path d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z"/></svg>,
    color: "#2a9d8f"
  },
  {
    id: 4,
    titulo: "WiFi en Sala de Espera",
    texto: "¿Llegaste temprano? Disfruta de nuestra conexión gratuita en la sala de espera mientras tus hijos terminan su clase.",
    icono: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000ff"><path d="M480-120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM254-346l-84-86q59-59 138.5-93.5T480-560q92 0 171.5 35T790-430l-84 84q-44-44-102-69t-124-25q-66 0-124 25t-102 69ZM84-516 0-600q92-94 215-147t265-53q142 0 265 53t215 147l-84 84q-77-77-178.5-120.5T480-680q-116 0-217.5 43.5T84-516Z"/></svg>,
    color: "#9b5de5"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Ventajas = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Ventajas de elegir EuroKids Canoitas</h2>
          {/* <p className="text-muted">Pensamos en la comodidad de tus hijos y en la tuya</p> */}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Row className="g-4">
            {ventajasData.map((item) => (
              <Col md={6} lg={3} key={item.id}>
                <motion.div variants={cardVariants}>
                  <Card 
                    className="border-0 shadow-sm text-center py-4 px-3 card-ventajas"
                    style={{ borderRadius: '20px', cursor: 'default' }}
                    as={motion.div}
                    whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                  >
                    <div 
                      className="d-flex align-items-center justify-content-center mx-auto mb-3"
                      style={{ 
                        width: '70px', 
                        height: '70px', 
                        borderRadius: '50%', 
                        backgroundColor: `${item.color}20`,
                        color: item.color,
                        fontSize: '2rem'
                      }}
                    >
                      {item.icono}
                    </div>
                    <Card.Title className="fw-bold mb-3">{item.titulo}</Card.Title>
                    <Card.Text className="text-muted small">
                      {item.texto}
                    </Card.Text>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Ventajas;