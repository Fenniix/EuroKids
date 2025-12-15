import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Ventajas = ({ datos }) => {
  
  const nombreSucursal = datos.sucursal;
  const cards = datos.items;

  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Ventajas de elegir EuroKids {nombreSucursal}</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <Row className="g-4">
            
            {cards.map((item) => (
              
              <Col md={6} lg={3} key={item.id}>
                
                <motion.div variants={cardVariants} className="">
                  <Card 
                    className="border-0 text-center py-4 px-3 card-ventajas"
                    as={motion.div}
                    whileHover={{ y: -10 }}
                  >
                    <div 
                      className="d-flex align-items-center justify-content-center mx-auto mb-3"
                      // CSS Puesto aqui debido a el uso de item.color
                      style={{ 
                        width: "70px", 
                        height: "70px", 
                        borderRadius: "50%", 
                        backgroundColor: `${item.color}35`,
                        color: item.color, 
                        fontSize: "2rem"
                      }}
                    >
                      <img src={item.icono} alt="" />
                    </div>
                    
                    <Card.Title className="fw-bold mb-3">{item.titulo}</Card.Title>
                    <Card.Text className="text-muted small">
                      {item.texto}
                    </Card.Text>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Ventajas;