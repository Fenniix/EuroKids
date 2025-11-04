import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// Asegúrate de importar todos los componentes necesarios

const NavbarP = () => {
  return (
    // 1. Navbar principal con tema, expansión y clase para centrar
    <Navbar  expand="lg" className="Nav">
      <Container className="cont-nav">
        {/* 2. Logo y Nombre a la izquierda */}
        <Navbar.Brand href="#home">
          {/* Opcional: Reemplaza o añade una imagen de logo aquí */}
          <img
            alt=""
            src="logo.svg" // Reemplaza con la ruta a tu logo
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          EuroKids
        </Navbar.Brand>

        {/* 3. Toggle button para el modo responsive (móvil) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* 4. Contenido colapsable (opciones del menú) */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* El truco del centrado: flex: 1 y justify-content-center */}
          <Nav className="mx-auto justify-content-center" style={{ flex: 1 }}>
            
            {/* Opción 1 (Normal) */}
            <Nav.Link href="#opcion1" className="mx-3">
              Opción 1
            </Nav.Link>

            {/* Opción 2 (Menú Desplegable) */}
            <NavDropdown title="Menú Desplegable" id="nav-dropdown" className="mx-3">
              <NavDropdown.Item href="#submenu/accion1">Acción 1</NavDropdown.Item>
              <NavDropdown.Item href="#submenu/accion2">Acción 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#submenu/accion3">Separador</NavDropdown.Item>
            </NavDropdown>

            {/* Opción 3 (Normal) */}
            <Nav.Link href="#opcion3" className="mx-3">
              Opción 3
            </Nav.Link>
          </Nav>
          
          {/* Puedes añadir otros elementos aquí que quieras a la derecha,
              como un botón de inicio de sesión, un buscador, etc. */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarP;