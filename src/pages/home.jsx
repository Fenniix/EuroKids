import NavbarP from "../components/layout/Navbar"
import {Container, Card, Nav, Button, Tab, Tabs, Collapse} from "react-bootstrap"
import Carrusel from "../components/elements/Carrusel"
import { useEffect, useState } from "react"
import interactiva from "../assets/img/cls-interactiva.jpg"
import juegos from "../assets/img/cls-juegos.jpg"
import platica from "../assets/img/cls-platica.jpeg"
import "../styles/home.css"
import Cards from "../components/elements/Cards"
import CardP from "../components/elements/CardP"

const home = () => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible-1");
          }
        });
      },
      { threshold: 0.2 }
    );

    const botones = document.querySelectorAll(".cont-animado");
    botones.forEach((btn) => observer.observe(btn));

    return () => {
      botones.forEach((btn) => observer.unobserve(btn));
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible-2");
          }else {
            entry.target.classList.remove("visible-2")
          }
        });
      },
      { threshold: 0.2 } // se activa cuando el 20% es visible
    );

    const botones = document.querySelectorAll(".cont-animado2");
    botones.forEach((btn) => observer.observe(btn));

    return () => {
      botones.forEach((btn) => observer.unobserve(btn));
    };
  }, []);

  /*Prueba */
  const [activeTab, setActiveTab] = useState('opcion1');

  return (
    <>
      <NavbarP/>
      <div className="font-pre">
        {/* Video de fondo 
        <video autoPlay loop muted playsInline src="" className="videoEK"></video>
        */}
        <Container className="cont-p cont-animado">
          <h1 className="display-1 fw-bold">EUROKIDS</h1>
          {/*<p className="lead">¡Explora, aprende y diviértete!</p>*/}
        </Container>
      </div>

      <div className="mt-5 ">
        <h1 className="aprendizaje m-0 p-3">¿Como aprenderán en EuroKids?</h1>
        <Tabs defaultActiveKey="clases" id="aprendizaje-eurokids" className="p-2 tabs-cont" variant="underline" transition={true}>
          <Tab eventKey="clases" title="Clases interactivas">
            <Card className="card-cont">
              <Card.Body>
                <Card.Title>¡Sumérgete en el Aprendizaje Dinámico!</Card.Title>
                <div className="d-flex justify-content-end">
                  <img src={interactiva} alt="" className="img-interactiva me-5"/>
                </div>
                <Card.Text className="txt-card">
                  Nuestras Clases Interactivas están diseñadas para transformar la manera en que adquieres nuevos conocimientos. Olvídate de las clases magistrales pasivas; aquí, tu participación activa es el motor de tu progreso. Empleamos una metodología probada que combina teoría, práctica inmediata y retroalimentación constante.
                </Card.Text>
                <Card.Title className="mb-3">Características Principales de la Metodología:</Card.Title>
                <ul className="text-list">
                  <li><b>Sesiones de 90 Minutos Enfocadas:</b> Cada clase está meticulosamente estructurada para cubrir un tema específico a profundidad, asegurando una curva de aprendizaje óptima sin sobrecarga de información.</li>
                  <li><b>Uso de Herramientas Digitales de Vanguardia:</b> Integramos pizarras virtuales colaborativas, encuestas en tiempo real, videos educativos cortos y simulaciones prácticas para mantener un ambiente de aprendizaje fresco y atractivo.</li>
                  <li><b>Grupos Reducidos:</b> Mantenemos un límite estricto de estudiantes por clase (máximo 8) para garantizar que cada participante reciba atención personalizada y tenga amplias oportunidades para interactuar, hacer preguntas y practicar</li>
                  <li><b>Proyectos Aplicados:</b> Al final de cada módulo temático, los estudiantes trabajan en un pequeño proyecto o caso de estudio que les permite aplicar inmediatamente lo aprendido en un contexto práctico, consolidando el conocimiento de manera efectiva.</li>
                </ul>
                <Nav.Link href="/" className="link-apren">
                  <Button className="contact luz">Ver Planes</Button>
                </Nav.Link>
              </Card.Body>
            </Card>
          </Tab>

          <Tab eventKey="idiomas" title="Juegos">
            <Card className="card-cont">
              <Card.Body>
                <Card.Title>Aprende Jugando</Card.Title>
                <div className="d-flex justify-content-end">
                  <img src={juegos} alt="" className="img-interactiva me-5"/>
                </div>
                <Card.Text className="txt-card">
                  La sección de Juegos convierte la adquisición de habilidades en una experiencia lúdica y competitiva. Creemos que la diversión y la motivación son elementos clave para la retención a largo plazo. Nuestra plataforma ofrece una amplia biblioteca de juegos educativos que refuerzan los conceptos aprendidos en las clases interactivas de una forma entretenida.
                </Card.Text>
                <Card.Title className="mb-3">Tipos de Juegos:</Card.Title>
                <ul className="text-list">
                  <li><b>Trivia de Alto Riesgo:</b> Pon a prueba tus conocimientos sobre conceptos clave a través de cuestionarios rápidos con tiempo limitado. Gana puntos extra por rachas de respuestas correctas.</li>
                  <li><b>Simuladores de Escenarios:</b> Resuelve problemas complejos en entornos virtuales que replican situaciones reales. Por ejemplo, gestiona un proyecto de inicio a fin o diagnostica un error de codificación. Tu desempeño tiene un impacto directo en el "resultado" del juego.</li>
                  <li><b>Desafíos Colaborativos:</b> Únete a otros estudiantes para resolver acertijos y misiones que requieren trabajo en equipo y comunicación efectiva. La meta es alcanzar un objetivo común antes que el tiempo se agote.</li>
                </ul>
                <Nav.Link href="/" className="link-apren">
                  <Button className="contact luz">Ver Planes</Button>
                </Nav.Link>
              </Card.Body>
            </Card>
          </Tab>

          <Tab eventKey="arte" title="Club de conversación">
            <Card className="card-cont">
              <Card.Body>
                <Card.Title>Platicas uno a uno</Card.Title>
                <div className="d-flex justify-content-end">
                  <img src={platica} alt="" className="img-interactiva me-5"/>
                </div>
                <Card.Text className="txt-card">
                  El Club de Conversación es el espacio ideal para llevar tus habilidades teóricas a la práctica social. Este club está diseñado para mejorar tu fluidez, confianza y capacidad de comunicarte en contextos informales y profesionales. No se trata de otra clase; es un punto de encuentro con la comunidad.
                </Card.Text>
                <Card.Title className="mb-3">Estructura y Enfoque del Club:</Card.Title>
                <ul className="text-list">
                  <li><b>Sesiones Temáticas Semanales:</b> Cada sesión se centra en un tema de actualidad, cultura o interés profesional (ej. "El Futuro del Trabajo Remoto", "Impacto de la IA en la Creatividad"). Se proporciona material de lectura o un video corto como punto de partida para el debate.</li>
                  <li><b>Moderadores Bilingües y Expertos:</b> Contamos con moderadores que son expertos en la materia o nativos de la lengua de práctica. Su rol es asegurar que la conversación fluya de manera natural, corregir errores sutiles de pronunciación o gramática en contexto y garantizar la participación equitativa de todos.</li>
                  <li><b>Formato de "Breakout Rooms" (Salas Pequeñas):</b> Después de una introducción general, dividimos a los participantes en grupos de 3-4 personas para discusiones más íntimas y enfocadas, lo que permite a todos tener más tiempo de palabra.</li>
                </ul>
                <Nav.Link href="/" className="link-apren">
                  <Button className="contact luz">Ver Planes</Button>
                </Nav.Link>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </div>

      <div className="promociones">
        <CardP/>
      </div>

      <Carrusel/>
      <div className="metodos mt-4">
        <h1 className="backg-h1">¿Como enseñamos?</h1>
        <div className="cont-met d-flex">
          <div className="op-met">
            <h4 onMouseEnter={() => setActiveTab('opcion1')} style={{ background: activeTab === "opcion1" ? "white" : "transparent", filter: activeTab === "opcion1" ? "brightness(0.8)" : "brightness(0)"}} className="op-h4">Seguridad en el aula</h4>
            <h4 onMouseEnter={() => setActiveTab('opcion2')} style={{ background: activeTab === "opcion2" ? "white" : "transparent", filter: activeTab === "opcion2" ? "brightness(0.8)" : "brightness(0)"}} className="op-h4">Como enseñamos</h4>
            <h4 onMouseEnter={() => setActiveTab('opcion3')} style={{ background: activeTab === "opcion3" ? "white" : "transparent", filter: activeTab === "opcion3" ? "brightness(0.8)" : "brightness(0)"}} className="op-h4">Docentes</h4>
          </div>
          <div className="desc-met">
            {activeTab === "opcion1" &&(
              <Cards/>
            )}
            {activeTab === "opcion2" &&(
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa consequuntur incidunt iure unde fugit at perspiciatis ullam suscipit voluptate veritatis beatae eveniet enim, recusandae exercitationem, atque omnis, fugiat rerum?</div>
            )}
            {activeTab === "opcion3" &&(
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestias nesciunt minima ipsum earum beatae reiciendis maxime, quaerat iste laboriosam quasi sit nulla nostrum sed? Assumenda facilis saepe sunt velit.</div>
            )}
          </div>
        </div>
      </div>

      <div className="preguntas d-flex flex-column align-items-center">

        <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
          Pregunta1
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text" className="respuesta">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>

        <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text mt-5" aria-expanded={open}>
          Pregunta1
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text" className="respuesta">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>

        <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
          Pregunta1
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text" className="respuesta">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>

      </div>

      <footer className="">
        <h1>footer</h1>
      </footer>
    </>
  )
}

export default home