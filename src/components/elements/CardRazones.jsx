import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../styles/home.css";

// animación para las cards
const springAnim = {
  type: "spring", stiffness: 100, damping: 8, mass: 0.5
};

const CardRazones = () => {
  return (
    <div className="promociones py-5 overflow-hidden">
      <Container className="me-0 ms-0 p-0 cambio-width">
        <h1 className="text-center mb-5 fw-bold">Razones para elegir EuroKids</h1>

        {/* Card 1 texto izquierda - imagen derecha */}
        <Row className="align-items-center mb-5 gy-4">
          {/* card texto */}
          <Col lg={6} className="ps-5 pe-4">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springAnim}
              className="text-center text-lg-start pe-lg-5 ps-lg-5"
            >
              <h2 className="fw-bold mb-3">Aprendizaje Lúdico</h2>
              <p className="lead text-muted">
                Olvídate de las clases aburridas. Aquí tus hijos aprenden jugando, 
                cantando y creando, haciendo que el idioma se vuelva parte natural de su vida.
              </p>
            </motion.div>
          </Col>
          {/* card vacia y de img */}
          <Col lg={6} className="position-relative">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springAnim}
              className="d-flex justify-content-end"
            >
              <motion.img
                src="/icons/niños-1.png" 
                alt="Niños jugando"
                className="img-flotante-derecha"
              />
              <Card className="card-razon-pru card-derecha-pru shadow-lg border-0"></Card>
            </motion.div>
          </Col>
        </Row>

        {/* Card 2 texto derecha - imagen izquierda */}
        <Row className="align-items-center mb-5 gy-4 flex-lg-row-reverse">
          {/* card texto */}
          <Col lg={6} className="ps-4 pe-5">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springAnim}
              className="text-center text-lg-start pe-lg-5 ps-lg-5"
            >
              <h2 className="fw-bold mb-3">Certificaciones Oficiales</h2>
              <p className="lead text-muted">
                No solo aprenden, lo demuestran. Preparamos a tus hijos para obtener 
                certificaciones internacionales (Cambridge, DELF) desde temprana edad.
              </p>
            </motion.div>
          </Col>
          {/* card vacia y de img */}
          <Col lg={6} className="position-relative">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springAnim}
              className="d-flex justify-content-start"
            >
              <motion.img
                src="/icons/niños-1.png" 
                alt="Niños jugando"
                className="img-flotante-izquierda"
              />
              <Card className="card-razon-pru card-izquierda-pru shadow-lg border-0"></Card>
            </motion.div>
          </Col>
        </Row>

        {/* Card 3 texto izquierda - imagen derecha */}
        <Row className="align-items-center mb-5 gy-4">
          {/* card texto */}
          <Col lg={6} className="ps-5 pe-4">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springAnim}
              className="text-center text-lg-start pe-lg-5 ps-lg-5"
            >
              <h2 className="fw-bold mb-3">Aprendizaje Lúdico</h2>
              <p className="lead text-muted">
                Olvídate de las clases aburridas. Aquí tus hijos aprenden jugando, 
                cantando y creando, haciendo que el idioma se vuelva parte natural de su vida.
              </p>
            </motion.div>
          </Col>
          {/* card vacia y de img */}
          <Col lg={6} className="position-relative">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={springAnim}
              className="d-flex justify-content-end"
            >
              <motion.img
                src="/icons/niños-1.png" 
                alt="Niños jugando"
                className="img-flotante-derecha"
              />
              <Card className="card-razon-pru card-derecha-pru shadow-lg border-0"></Card>
            </motion.div>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
};

export default CardRazones;