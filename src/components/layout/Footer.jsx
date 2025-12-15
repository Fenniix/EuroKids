import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../styles/elements.css";

const FooterP = () => {
  return (
    <footer className="footer-section text-white pt-5 pb-3">
      <Container>
        <Row className="justify-content-between align-items-center text-center text-md-start gy-4">
          
          {/* Logo */}
          <Col md={3} className="d-flex justify-content-center justify-content-md-start">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              alt="EuroKids Logo" 
              src="/img/Logo - Kids.webp" 
              height="90"
              className="object-fit-contain"
            />
          </Col>

          {/* Horarios */}
          <Col md={5} className="text-center">
            <h5 className="fw-bold mb-3 text-warning">¡Contáctanos!</h5>
            <div className="horarios-info">
              <p className="mb-1 d-flex align-items-center justify-content-center gap-2">
                <img src="/icons/Phone-wts.png" alt="WhatsApp" width="24" />
                <span className="fw-bold">+52 961 180 9491</span>
              </p>
              <div className="mt-3">
                <p className="mb-1 text-white-50 fw-bold">Horarios de atención</p>
                <p className="mb-0">Lunes a Viernes: 11:00 a.m. - 7:00 p.m.</p>
                <p className="mb-0">Sábados: 9:00 a.m. - 3:00 p.m.</p>
              </div>
            </div>
          </Col>

          {/* Redes sociales */}
          <Col md={3}>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://www.facebook.com/eurokidsidiomas/" target="_blank" rel="noreferrer">
                <div className="icon-ani ani-facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" className="z-1" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path strokeDasharray="24" strokeDashoffset="24" d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/></path><path strokeDasharray="8" strokeDashoffset="8" d="M8 12h7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"/></path></g></svg>
                </div>
              </a>

              <a href="https://www.instagram.com/eurokidsidiomas/" target="_blank" rel="noreferrer">
                <div className="icon-ani ani-instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" className="z-1" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                </div>
              </a>

              <a href="#">
                <div className="icon-ani ani-twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" className="z-1" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg>
                </div>
              </a>
            </div>
          </Col>

        </Row>

        {/* Copyright */}
        <hr className="my-4 border-light opacity-25" />
        <Row>
          <Col className="text-center text-white-50 small">
            <p className="mb-0">
              © {new Date().getFullYear()} Euro Centro de Idiomas de México S.C. | Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterP;