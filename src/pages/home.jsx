import NavbarP from "../components/layout/Navbar"
import {Container, Card, Nav, Button, Tab, Tabs} from "react-bootstrap"
import { useEffect } from "react"
import "../styles/home.css"

const home = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible-1");
          }
        });
      },
      { threshold: 0.2 } // se activa cuando el 20% es visible
    );

    const botones = document.querySelectorAll(".cont-animado");
    botones.forEach((btn) => observer.observe(btn));

    return () => {
      botones.forEach((btn) => observer.unobserve(btn));
    };
  }, []);

  return (
    <>
      <NavbarP/>
      <div className="font-pre">
        {/* Video de fondo 
        <video autoPlay loop muted playsInline src="" className="videoEK"></video>
        */}
        <Container className="cont-p cont-animado">
          <h1 className="display-1 fw-bold">EUROKIDS</h1>
          {/*<p className="lead">¡Explora, aprende y diviértete!</p>*/}
        </Container>
      </div>

      <div className="mt-5 ">
        <h1 className="aprendizaje">¿Como aprenderán en EuroKids?</h1>

        <Tabs defaultActiveKey="clases" id="aprendizaje-eurokids" className="mb-3 p-2 tabs-cont" variant="underline" transition={true}>
          <Tab eventKey="clases" title="Clases interactivas">
            <Card className="card-cont">
              <Card.Body>
                <Card.Title>Números y Lógica</Card.Title>
                <Card.Text>
                  Con juegos interactivos, los niños aprenderán a contar, sumar y desarrollar el pensamiento lógico.
                </Card.Text>
                <Button variant="success">Ver Planes</Button>
              </Card.Body>
            </Card>
          </Tab>

          <Tab eventKey="idiomas" title="Juegos">
            <Card className="card-cont">
              <Card.Body>
                <Card.Title>Primeras Palabras</Card.Title>
                <Card.Text>
                  Clases didácticas y canciones para que los niños se familiaricen con el inglés de forma natural.
                </Card.Text>
                <Button variant="info">Ver Horarios</Button>
              </Card.Body>
            </Card>
          </Tab>

          <Tab eventKey="arte" title="Platicas">
            <Card className="card-cont">
              <Card.Body>
                <Card.Title>Expresión y Color</Card.Title>
                <Card.Text>
                  Desarrollo de habilidades motoras finas a través de pintura, modelado y música.
                </Card.Text>
                <Button variant="warning">Explorar</Button>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </div>

      {/*
      <div className="presentacion">
        <div></div>
        <div></div>
      </div>
      */}
      <div className="Prueba"></div>
      <div id="homes"></div>
      <h1>hola</h1>
      <img src="./assets/img/Euro-centro-lg.png" alt="" />
    </>
  )
}

export default home