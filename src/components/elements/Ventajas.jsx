import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

// Prompts para un mejor manejo de la información de las tarjetas
const ventajasData = [
  {
    id: 1,
    titulo: "Aulas Climatizadas",
    texto: "Sabemos que el calor en Tuxtla es fuerte. Todas nuestras aulas cuentan con aire acondicionado para que el aprendizaje sea fresco y cómodo.",
    icono: <img src="src/assets/icons/climate-icon.png" alt="climate" />,
    color: "#00b4d8"
  },
  {
    id: 2,
    titulo: "Fácil Acceso",
    texto: "Ubicados en una zona estratégica para evitar el tráfico pesado del centro. Llegar y dejar a tus hijos es rápido y sin estrés.",
    icono: <img src="src/assets/icons/access-icon.png" alt="access" />,
    color: "#f4a261"
  },
  {
    id: 3,
    titulo: "Seguridad Total",
    texto: "Circuito cerrado de cámaras y control estricto de entrada/salida. Solo tú o personas autorizadas pueden recoger a los alumnos.",
    icono: <img src="src/assets/icons/security-icon.png" alt="security" />,
    color: "#2a9d8f"
  },
  {
    id: 4,
    titulo: "WiFi en Sala de Espera",
    texto: "¿Llegaste temprano? Disfruta de nuestra conexión gratuita en la sala de espera mientras tus hijos terminan su clase.",
    icono: <img src="src/assets/icons/wifi-icon.png" alt="wifi" />,
    color: "#9b5de5"
  }
];

// Uso de const para controlar la aparicion de las tarjetas dependiendo de la aparicion de contenedor padre
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
    <section className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Ventajas de elegir EuroKids Canoitas</h2>
          {/* <p className="text-muted">Pensamos en la comodidad de tus hijos y en la tuya</p> */}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // controla si la animacion se repite o no
        >
          <Row className="g-4">
            {ventajasData.map((item) => (
              <Col md={6} lg={3} key={item.id} >
                <motion.div variants={cardVariants} className="">
                  <Card 
                    className="border-0 text-center py-4 px-3 card-ventajas"
                    as={motion.div}
                    whileHover={{ y: -10 }}
                  >
                    <div 
                      className="d-flex align-items-center justify-content-center mx-auto mb-3"
                      // CSS Puesto aqui debido a el uso de item.color
                      style={{ 
                        width: "70px", 
                        height: "70px", 
                        borderRadius: "50%", 
                        backgroundColor: `${item.color}20`,
                        color: item.color,
                        fontSize: "2rem"
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