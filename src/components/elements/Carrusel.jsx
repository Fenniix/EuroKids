import { Carousel } from 'react-bootstrap';

function TestimonialCarousel() {
  return (
    <div className="my-5" style={{ padding: '0 50px' }}>
      <h2 className="text-center mb-4">Lo que dicen nuestros estudiantes</h2>
      
      <Carousel 
        // Desactiva los controles de "Siguiente" y "Anterior"
        controls={false} 
        // Desactiva los indicadores de posición (los puntos inferiores)
        indicators={false} 
        // Establece el tiempo de pausa entre diapositivas (3 segundos)
        interval={3000} 
        // Detiene la reproducción al pasar el cursor (Opcional)
        pause={false}
      >
        
        {/* Item 1: Comentario de Juan */}
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center text-center p-4" style={{ height: '200px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <p className="lead">
              "Las clases interactivas han transformado mi manera de aprender. La metodología es práctica y el ambiente es siempre motivador."
            </p>
            <p className="fw-bold mt-3">- Juan P., Estudiante Avanzado</p>
          </div>
        </Carousel.Item>

        {/* Item 2: Comentario de María */}
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center text-center p-4" style={{ height: '200px', backgroundColor: '#e9ecef', borderRadius: '8px' }}>
            <p className="lead">
              "El club de conversación es genial para practicar fluidez sin la presión de un examen. ¡Lo recomiendo a todos!"
            </p>
            <p className="fw-bold mt-3">- María G., Club de Conversación</p>
          </div>
        </Carousel.Item>

        {/* Item 3: Comentario de Carlos */}
        <Carousel.Item>
          <div className="d-flex flex-column align-items-center text-center p-4" style={{ height: '200px', backgroundColor: '#dee2e6', borderRadius: '8px' }}>
            <p className="lead">
              "Los juegos son una forma muy divertida de reforzar los temas. ¡Nunca pensé que aprender sería tan entretenido!"
            </p>
            <p className="fw-bold mt-3">- Carlos M., Jugador Estrella</p>
          </div>
        </Carousel.Item>
      
      </Carousel>
    </div>
  );
}

export default TestimonialCarousel;