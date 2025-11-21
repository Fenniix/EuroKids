import { Accordion, Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion';

const PreguntasPrueba1 = () => {
  return(
    <>
      <div className="d-flex flex-column align-items-center pt-5 pb-5">
        <h2 className="m-0">Preguntas frecuentes</h2>
        <Accordion className="pregunta">

          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body className="respuesta">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Accordion Item #4</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    </>
  )
}

const contenido = [
  {
    question: "¿A partir de qué edad pueden ingresar?",
    answer: "Respuesta."
  },
  {
    question: "¿Cuántos alumnos hay por grupo?",
    answer: "Respuesta."
  },
  {
    question: "¿Tienen certificaciones oficiales?",
    answer: "Respuesta."
  },
  {
    question: "¿Ofrecen clases de recuperación?",
    answer: "Respuesta."
  },
];

const PreguntasPrueba2 = () => {
  return (
    <section className="pt-5 pb-5">
      <Container>
        <div className="text-center mb-5">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fw-bold"
            style={{ color: '#333' }}
          >
            ¿Tienes dudas?
          </motion.h2>
          <p className="text-muted">Aquí resolvemos las preguntas más comunes de los papás</p>
        </div>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Accordion className="accordion-sec">
              {contenido.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.9 }}
                >
                  <Accordion.Item eventKey={index.toString()} className="mb-3 border-0 shadow-sm overflow-hidden">
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

const Preguntas = () => {

  return(
    <>
      {/* <PreguntasPrueba1/> */}
      <PreguntasPrueba2/>
    </>
  )
}

export default Preguntas;