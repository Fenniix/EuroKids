import { Accordion, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

// información dentro de cada pregunta
const preguntasData = [
  {
    id: "1",
    question: "¿A partir de qué edad pueden ingresar?",
    answer: "Respuesta."
  },
  {
    id: "2",
    question: "¿Cuántos alumnos hay por grupo?",
    answer: "Respuesta."
  },
  {
    id: "3",
    question: "¿Tienen certificaciones oficiales?",
    answer: "Respuesta."
  },
  {
    id: "4",
    question: "¿Ofrecen clases de recuperación?",
    answer: "Respuesta."
  },
];

const Preguntas = () => {
  return (
    <section className="pt-5 pb-5" id="preguntas">
      <Container>
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fw-bold"
            style={{ color: "#333" }}
          >
            ¿Tienes dudas?
          </motion.h2>
          <p className="text-muted">Aquí resolvemos las preguntas más comunes de los papás</p>
        </div>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Accordion className="accordion-sec">
              {preguntasData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.9 }}
                >
                  <Accordion.Item eventKey={item.id} className="mb-3 border-0 shadow-sm overflow-hidden">
                    <Accordion.Header>
                      <span>{item.question}</span>
                    </Accordion.Header>
                    <Accordion.Body className="text-secondary bg-light">
                      {item.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                </motion.div>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Preguntas;