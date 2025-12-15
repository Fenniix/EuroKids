import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

// información dentro de cada comentario de el carrusel
const testimonios = [
  {
    id: 1,
    nombre: "Nombre",
    rol: "¿Que es?-Mama, papa, estudiante",
    texto: "Descripción",
    icono: "👩"
  },
  {
    id: 2,
    nombre: "Nombre",
    rol: "¿Que es?-Mama, papa, estudiante",
    texto: "Descripción",
    icono: "👨"
  },
  {
    id: 3,
    nombre: "Nombre",
    rol: "¿Que es?-Mama, papa, estudiante",
    texto: "Descripción",
    icono: "👩‍🦱"
  },
  {
    id: 4,
    nombre: "Nombre",
    rol: "¿Que es?-Mama, papa, estudiante o lugar",
    texto: "Descripción",
    icono: "🏠"
  },
];

const Carrusel = () => {
  const testimoniosInfinitos = [...testimonios, ...testimonios];

  return (
    <section className="testimonios-section">
      <div className="testimonios-title mt-3">
        <h2>Lo que dicen nuestros estudiantes</h2>
        <p>La confianza de los padres es nuestra mejor calificación</p>
      </div>

      <div className="marquee-container">
        
        <motion.div 
          className="marquee"
          animate={{ x: "-50%" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >

          {/* card de testimonios */}
          {testimoniosInfinitos.map((item, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-sm rounded-4"
              style={{ width: "350px", height: "200px" }}
            >
              <Card.Body className="p-4 d-flex flex-column justify-content-between">
                <div>
                  <Card.Text className="fst-italic text-secondary">"
                    {item.texto}"
                  </Card.Text>
                </div>

                <div className="d-flex align-items-center mt-3 pt-3 border-top">
                  <div className="rounded-circle bg-light d-flex align-items-center justify-content-center fs-3 me-3" style={{ width: "45px", height: "45px" }}>
                    {item.icono}
                  </div>
                  <div>
                    <Card.Title as="h6" className="mb-0 fw-bold">{item.nombre}</Card.Title>
                    <Card.Subtitle className="text-muted" style={{ fontSize: "0.85rem" }}>
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

export default Carrusel;