import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ventajasData = [
  {
    id: 1,
    titulo: "Aulas Climatizadas",
    texto: "Sabemos que el calor en Tuxtla es fuerte. Todas nuestras aulas cuentan con aire acondicionado para que el aprendizaje sea fresco y cómodo.",
    icono: "",
    color: "#00b4d8" // Azul hielo
  },
  {
    id: 2,
    titulo: "Fácil Acceso",
    texto: "Ubicados en una zona estratégica para evitar el tráfico pesado del centro. Llegar y dejar a tus hijos es rápido y sin estrés.",
    icono: "",
    color: "#f4a261" // Naranja tráfico/calle
  },
  {
    id: 3,
    titulo: "Seguridad Total",
    texto: "Circuito cerrado de cámaras y control estricto de entrada/salida. Solo tú o personas autorizadas pueden recoger a los alumnos.",
    icono: "",
    color: "#2a9d8f" // Verde seguridad
  },
  {
    id: 4,
    titulo: "WiFi en Sala de Espera",
    texto: "¿Llegaste temprano? Disfruta de nuestra conexión gratuita en la sala de espera mientras tus hijos terminan su clase.",
    icono: "",
    color: "#9b5de5" // Morado WiFi
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
                    className="h-100 border-0 shadow-sm text-center py-4 px-3"
                    style={{ borderRadius: '20px', cursor: 'default' }}
                    // Animación Hover: Levitación
                    as={motion.div}
                    whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                  >
                    <div 
                      className="d-flex align-items-center justify-content-center mx-auto mb-3"
                      style={{ 
                        width: '70px', 
                        height: '70px', 
                        borderRadius: '50%', 
                        backgroundColor: `${item.color}20`, // Color con 20% transparencia
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