import "../styles/home.css"
import NavbarP from "../components/layout/Navbar"
import { Container } from "react-bootstrap"
import {Card, Nav, Button} from "react-bootstrap"


const home = () => {
  return (
    <>
      <NavbarP/>
      <div className="video-cont">
        {/* Video de fondo */}
        <video autoPlay loop muted playsInline src="" className="videoEK"></video>

        <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-black cont-p">
          <h1 className="display-1 fw-bold">EUROKIDS</h1>
          {/*<p className="lead">¡Explora, aprende y diviértete!</p>*/}
        </Container>
      </div>

      <div>
        <h1>¿Que aprenderan en EuroKids?</h1>
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Opción 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Opción 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#disabled">Opción 3</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
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