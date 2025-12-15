import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Sucursalesnav } from "../index"

const LinkAnimado = ({ href, children }) => {
  return (
    <Nav.Link href={href} className="mx-3 text-white nav-link-custom" >
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
            src="/img/Logo - Kids.webp" 
            height="60" 
            className="d-inline-block align-top ms-3 me-2 z-1 position-relative"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-position">
          <Nav className="mx-auto justify-content-center" style={{ flex: 1 }}>
            <LinkAnimado href="#idiomas">
              <p className="m-0">Idiomas</p>
            </LinkAnimado>

            {/* Componente en donde se ubica la navegación entre las sucursales */}
            <Sucursalesnav/>

            <LinkAnimado href="#preguntas">
              <p className="m-0">Preguntas</p>
            </LinkAnimado>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarP;