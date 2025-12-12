import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'

const VisitanosEKC = ({nombre ,direccion , telefono, horarios, mapaUrl}) => {
  return (
    <>
      <section className="sucursal-info-section mt-5">
        <Container>
          <Row className="g-5 align-items-center">
            
            <Col lg={5}>
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 text-primary fw-bold d-flex justify-content-center">Visítanos</h2>
                
                <div className="info-item">
                  <div className="box-location">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                  </div>
                  <div>
                    <h5>Dirección</h5>
                    <p className="text-muted">
                      {direccion}
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="box-call">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                  </div>
                  <div>
                    <h5>Teléfono</h5>
                    <p className="text-muted">{telefono}</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="box-clock">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffffff"><path d="M582-298 440-440v-200h80v167l118 118-56 57ZM440-720v-80h80v80h-80Zm280 280v-80h80v80h-80ZM440-160v-80h80v80h-80ZM160-440v-80h80v80h-80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                  </div>
                  <div>
                    <h5>Horarios de Atención</h5>
                    <p className="text-muted mb-0">{horarios.semana}</p>
                    <p className="text-muted">{horarios.sabado}</p>
                  </div>
                </div>

                <div className="mt-4 d-flex justify-content-center">
                  <Button className="btn-message luz">
                     Enviar Mensaje a {nombre}
                  </Button>
                </div>
              </motion.div>
            </Col>

            <Col lg={7}>
              <motion.div 
                className="map-container shadow-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <iframe title="Ubicación EuroKids Canoitas" width="100%" height="450" loading="lazy" allowFullScreen 
                  src={mapaUrl}
                ></iframe>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      
    </>
  )
}

export default VisitanosEKC