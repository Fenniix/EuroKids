import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import LogoEK from "../../assets/img/Euro-centro-lg.png";

const NavbarP = () => {
  return (
    <Navbar  expand="lg" className="Nav">
      <Container className="cont-nav">
        <Navbar.Brand href="#home">
          <img alt="" src={LogoEK} height="60" className="d-inline-block align-top me-2"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-center" style={{ flex: 1 }}>
            <Nav.Link href="#opcion1" className="mx-3">
              Opción 1
            </Nav.Link>
            <NavDropdown title="Opción2" id="nav-dropdown" className="mx-3">
              <NavDropdown.Item href="/Ekcanoitas">EK Canoitas</NavDropdown.Item>
              <NavDropdown.Item href="/Ekmoctezuma">EK Moctezuma</NavDropdown.Item>
              {/*<NavDropdown.Divider />*/}
              <NavDropdown.Item href="/Eklaureles">EuroKids Laureles</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#opcion3" className="mx-3">
              Opción 3
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarP;