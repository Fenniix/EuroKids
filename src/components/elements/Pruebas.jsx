// Hero.jsx
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <Container>
        <Row className="align-items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <Col lg={6}>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#333' }}
            >
              El mundo habla <span style={{ color: 'blueviolet' }}>muchos idiomas</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ fontSize: '1.2rem', color: '#666', marginTop: '20px' }}
            >
              Preparamos a tus hijos para un futuro global con un método divertido, natural y certificado.
            </motion.p>
            <div className="mt-4">
                <Button variant="warning" size="lg" className="text-white fw-bold">Conoce los cursos</Button>
            </div>
          </Col>

          {/* COLUMNA DERECHA: IMAGEN/ANIMACIÓN */}
          <Col lg={6} className="text-center">
            {/* Aquí iría una foto de un niño, o el logo grande animado */}
             <motion.img 
                src="src/assets/img/Euro-centro-lg.png" // O una foto de stock de niños
                alt="Niños aprendiendo"
                style={{ maxWidth: '100%', maxHeight: '400px' }}
                animate={{ y: [0, -20, 0] }} // Flotar suavemente
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

const testimonios = [
  {
    id: 1,
    nombre: "Nombre",
    rol: "¿Que es?-Mama, papa, estudiante",
    texto: "Descripción",
    avatar: "👩"
  },
  {
    id: 2,
    nombre: "Nombre",
    rol: "¿Que es?-Mama, papa, estudiante",
    texto: "Descripción",
    avatar: "👨"
  },
  {
    id: 3,
    nombre: "Nombre",
    rol: "¿Que es?-Mama, papa, estudiante",
    texto: "Descripción",
    avatar: "👩‍🦱"
  },
  {
    id: 4,
    nombre: "Nombre",
    rol: "¿Que es?-Mama, papa, estudiante o lugar",
    texto: "Descripción",
    avatar: "🏠"
  },
];

const Testimonios = () => {
  const testimoniosInfinitos = [...testimonios, ...testimonios];

  return (
    <section className="testimonios-section">
      <div className="testimonios-header mt-3">
        <h2>Lo que dicen nuestros estudiantes</h2>
        <p>La confianza de los padres es nuestra mejor calificación</p>
      </div>

      <div className="marquee-container">
        
        <motion.div 
          className="marquee-track"
          animate={{ x: "-50%" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {testimoniosInfinitos.map((item, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm rounded-4"
              style={{ width: '350px', flexShrink: 0 }}
            >
              <Card.Body className="p-4 d-flex flex-column justify-content-between">
                <div>
                  <div className="display-4 text-warning mb-2" style={{ lineHeight: '2rem' }}>“</div>
                  <Card.Text className="fst-italic text-secondary">
                    {item.texto}
                  </Card.Text>
                </div>

                <div className="d-flex align-items-center mt-3 pt-3 border-top">
                  <div className="rounded-circle bg-light d-flex align-items-center justify-content-center fs-3 me-3" style={{ width: '45px', height: '45px' }}>
                    {item.avatar}
                  </div>
                  <div>
                    <Card.Title as="h6" className="mb-0 fw-bold">{item.nombre}</Card.Title>
                    <Card.Subtitle className="text-muted" style={{ fontSize: '0.85rem' }}>
                      {item.rol}
                    </Card.Subtitle>
                  </div>
                </div>
              </Card.Body>
            </Card>

          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Pruebas = () => {
  return (
    <>
      <Testimonios />
    
    </>
  );
};
export default Pruebas;