import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const BienvenidaEKC = ({ sucursal, titulo, tituloSpan}) => {
  return (
    <section className="bienvenida-section">
      <Container>
        <Row className="align-items-center gy-5">
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="badge-sede">{sucursal}</span>
              <h2 className="display-5 fw-bold mb-4">
                {titulo} <br /> 
                <span className="color-sede">{tituloSpan}</span>
              </h2>
              
              <p className="lead text-muted mb-4">
                Descripción breve de la sede Canoitas.
                {/* Bienvenidos a EuroKids Canoitas. Desde nuestra apertura, nos hemos dedicado a crear un ambiente donde el aprendizaje del idioma se siente natural y seguro. */}
              </p>
              
              <p className="text-secondary mb-5">
                Caracterizticas de la sede.
                {/* Nuestra sede se caracteriza por ser un espacio cálido y cercano. Aquí, los directores y maestros conocen a cada alumno por su nombre. No eres una matrícula más; eres parte de nuestra historia. Combinamos la excelencia académica de EuroKids con la calidez de un trato 100% personalizado. */}
              </p>

              <div className="d-flex gap-5 border-top pt-4">
                <div>
                  <h3 className="fw-bold text-dark mb-0">+10</h3>
                  <small className="text-muted">Años activos en el lugar</small>
                </div>
                <div>
                  <h3 className="fw-bold text-dark mb-0">+500</h3>
                  <small className="text-muted">Alumnos inscritos</small>
                </div>
                <div>
                  <h3 className="fw-bold text-dark mb-0">100%</h3>
                  <small className="text-muted">Certificados</small>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <div className="collage-container">
              <motion.img 
                src="src/assets/img/cls-juegos.jpg" 
                alt="Principal" 
                className="img-main shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Foto Secundaria - flotante */}
              <motion.img 
                src="src/assets/img/cls-platica.jpeg" 
                alt="Secundario" 
                className="img-secondary shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BienvenidaEKC;