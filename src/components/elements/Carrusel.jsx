import { Card, Carousel } from 'react-bootstrap';

function Carrusel() {
  return (
    <div className="carrusel-section">
      <h2 className="text-center m-0 pt-4 pb-4">Lo que dicen nuestros estudiantes</h2>
      <Carousel controls={false} indicators={false} interval={3000} pause={false}>
        {/*Comentario 1*/}
        <Carousel.Item>
          <div className='d-flex carrusel-cont'>
            <Card className='card-d'>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='card-d'>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='card-d'>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>

        {/*Comentario 2*/}
        <Carousel.Item>
          <div className='d-flex carrusel-cont'>
            <Card className='card-d'>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='card-d'>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='card-d'>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
              
        </Carousel.Item>
      
      </Carousel>
    </div>
  );
}

export default Carrusel;