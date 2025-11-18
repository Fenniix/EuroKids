import { Accordion } from "react-bootstrap";

const Preguntas = () => {

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

export default Preguntas;