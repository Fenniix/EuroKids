import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { motion } from "framer-motion";

const LinkAnimado = ({ href, children }) => {
  return (
    <Nav.Link href={href} className="mx-3 text-white nav-link-custom">
      <motion.div
        className="link-content"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
      {children}
      <motion.span
        className="underline"
        variants={{
          rest: { width: 0, opacity: 0 },
          hover: { width: "100%", opacity: 1 }
        }}
        transition={{ duration: 0.3 }}
      />
      </motion.div>
    </Nav.Link>
  );
};

const NavbarP = () => {
  return (
    <Navbar expand="lg" className="Nav">
      <Container className="cont-nav">
        <Navbar.Brand href="/">
          <motion.img 
            whileHover={{ scale: 1.1, rotate: -5 }}
            alt="EuroKids Logo" 
            src="src/assets/img/Euro-centro-lg.png" 
            height="60" 
            className="d-inline-block align-top ms-3 me-2 z-1 position-relative"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav-position'>
          <Nav className="mx-auto justify-content-center" style={{ flex: 1 }}>
            <LinkAnimado href="#opcion1">Opción 1</LinkAnimado>
            <NavDropdown title={<span className="dropdown-title">Sucursales</span>} id="nav-dropdown" className="mx-3 color-texto">
              <NavDropdown.Item href="/Ekcanoitas">EK Canoitas</NavDropdown.Item>
              <NavDropdown.Item href="/Ekmoctezuma">EK Moctezuma</NavDropdown.Item>
              <NavDropdown.Item href="/Eklaureles">EK Laureles</NavDropdown.Item>
              <NavDropdown.Item href="/">Inicio</NavDropdown.Item>
            </NavDropdown>
            <LinkAnimado href="#opcion3">Opción 3</LinkAnimado>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarP;