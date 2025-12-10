import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../styles/home.css';


const springAnim = {
  type: "spring",
  stiffness: 100,
  damping: 8,
  mass: 0.5
};

const CardRazones = () => {
  return (
    <div className="promociones py-5 overflow-hidden">
      <Container>
        <h1 className="text-center mb-5 fw-bold">Razones para elegir EuroKids</h1>

        {/* Card 1 texto izquierda - imagen derecha */}
        <Row className="align-items-center mb-5 gy-4">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springAnim}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center text-lg-start px-4"
            >
              <h2 className="fw-bold mb-3">Aprendizaje Lúdico</h2>
              <p className="lead text-muted">
                Olvídate de las clases aburridas. Aquí tus hijos aprenden jugando, 
                cantando y creando, haciendo que el idioma se vuelva parte natural de su vida.
              </p>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springAnim}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="card-razon card-derecha shadow-lg border-0">
                <Card.Img
                  src="src/assets/img/cls-platica.jpeg"
                  alt="Niños jugando"
                  className="img-fluid h-100 object-fit-cover"
                />
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Card 2 texto derecha - imagen izquierda */}
        <Row className="align-items-center mb-5 gy-4 flex-lg-row-reverse">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springAnim}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center text-lg-start px-4"
            >
              <h2 className="fw-bold mb-3">Certificaciones Oficiales</h2>
              <p className="lead text-muted">
                No solo aprenden, lo demuestran. Preparamos a tus hijos para obtener 
                certificaciones internacionales (Cambridge, DELF) desde temprana edad.
              </p>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springAnim}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="card-razon card-izquierda shadow-lg border-0">
                <Card.Img 
                  src="src/assets/img/cls-interactiva.jpg" 
                  alt="Certificado escolar"
                  className="img-fluid h-100 object-fit-cover"
                />
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Card 3 texto izquierda - imagen derecha */}
        <Row className="align-items-center mb-5 gy-4">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springAnim}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center text-lg-start px-4"
            >
              <h2 className="fw-bold mb-3">Espacios Seguros</h2>
              <p className="lead text-muted">
                Instalaciones diseñadas pensando 100% en niños, con protocolos de seguridad 
                estrictos para que tú tengas total tranquilidad mientras ellos aprenden.
              </p>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springAnim}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="card-razon card-derecha shadow-lg border-0">
                <Card.Img 
                  src="src/assets/img/cls-juegos.jpg" 
                  alt="Aula segura"
                  className="img-fluid h-100 object-fit-cover"
                />
              </Card>
            </motion.div>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default CardRazones;