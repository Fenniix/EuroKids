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

const testimoniosData = [
  {
    id: 1,
    nombre: "Mariana L.",
    rol: "Mamá de Sofía (6 años)",
    texto: "Sofía odiaba el inglés en su otra escuela. Desde que entró a EuroKids, llega cantando a la casa. ¡El cambio es increíble!",
    avatar: "👩"
  },
  {
    id: 2,
    nombre: "Carlos R.",
    rol: "Papá de Luis (12 años)",
    texto: "La preparación para la certificación es muy seria. Luis se siente muy seguro para su examen. 100% recomendados.",
    avatar: "👨"
  },
  {
    id: 3,
    nombre: "Ana G.",
    rol: "Mamá de Leo (4 años)",
    texto: "Me encanta la paciencia de las maestras. Leo es muy inquieto y han sabido canalizar su energía para aprender.",
    avatar: "👩‍🦱"
  },
  {
    id: 4,
    nombre: "Familia Pérez",
    rol: "Alumnos desde 2023",
    texto: "Las instalaciones son seguras y bonitas. Nos da mucha tranquilidad dejar a nuestros hijos ahí.",
    avatar: "🏠"
  },
];

const Testimonios = () => {
  const testimoniosInfinitos = [...testimoniosData, ...testimoniosData];

  return (
    <section className="testimonios-section">
      <div className="testimonios-header">
        <h2>Lo que dicen nuestros estudiantes</h2>
        <p>La confianza de los padres es nuestra mejor calificación</p>
      </div>

      <div className="marquee-container">
        
        {/* El motor sigue siendo Motion */}
        <motion.div 
          className="marquee-track"
          animate={{ x: "-50%" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {testimoniosInfinitos.map((item, index) => (
            
            /* 2. Aquí usamos el componente de Bootstrap */
            /* Le agregamos clases utilitarias de Bootstrap para estilos rápidos */
            <Card 
              key={index} 
              className="border-0 shadow-sm rounded-4" // Sin borde, con sombra suave, bordes redondeados
              style={{ width: '350px', flexShrink: 0 }} // Importante: Ancho fijo y que no se encoja
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
      {/* <Testimonios /> */}
    
    </>
  );
};
export default Pruebas;