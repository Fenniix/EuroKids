import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavbarP = () => {
  return (
    <Navbar  expand="lg" className="Nav">
      <Container className="cont-nav">
        <Navbar.Brand href="#home">
          <img alt="" src="src/assets/img/Euro-centro-lg.png" height="60" className="d-inline-block align-top me-2"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-center" style={{ flex: 1 }}>
            <Nav.Link href="#opcion1" className="mx-3 text-white">
              Opción 1
            </Nav.Link>
            <NavDropdown title="Opción2" id="nav-dropdown" className="mx-3 color-texto">
              <NavDropdown.Item href="/Ekcanoitas">EK Canoitas</NavDropdown.Item>
              <NavDropdown.Item href="/Ekmoctezuma">EK Moctezuma</NavDropdown.Item>
              {/*<NavDropdown.Divider />*/}
              <NavDropdown.Item href="/Eklaureles">EuroKids Laureles</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#opcion3" className="mx-3 text-white">
              Opción 3
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarP;