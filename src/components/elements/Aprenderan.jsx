import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

// Contenido dentro de la sección
const tabsData = [
  {
    id: "clases",
    label: "Clases interactivas",
    title: "¡Sumérgete en el Aprendizaje Dinámico!",
    img: "/img/cls-interactiva.jpg",
    description: "Nuestras Clases Interactivas están diseñadas para transformar la manera en que adquieres nuevos conocimientos. Olvídate de las clases magistrales pasivas; aquí, tu participación activa es el motor de tu progreso.",
    list: [
      "Sesiones de 90 Minutos Enfocadas",
      "Uso de Herramientas Digitales de Vanguardia",
      "Grupos Reducidos (Máx 8)",
      "Proyectos Aplicados al final del módulo"
    ],
    color: "#ecc500",
    borderColor: "#fff133"
  },
  {
    id: "juegos",
    label: "Juegos",
    title: "Aprende Jugando",
    img: "/img/cls-juegos.jpg",
    description: "La sección de Juegos convierte la adquisición de habilidades en una experiencia lúdica y competitiva. Creemos que la diversión y la motivación son elementos clave para la retención a largo plazo.",
    list: [
      "Trivia de Alto Riesgo",
      "Simuladores de Escenarios Reales",
      "Desafíos Colaborativos en Equipo",
      "Sistema de recompensas y puntos"
    ],
    color: "#06D6A0",
    borderColor: "#6effd8ff"
  },
  {
    id: "club",
    label: "Club de conversación",
    title: "Pláticas uno a uno",
    img: "/img/cls-platica.jpeg",
    description: "El Club de Conversación es el espacio ideal para llevar tus habilidades teóricas a la práctica social. Este club está diseñado para mejorar tu fluidez, confianza y capacidad de comunicarte.",
    list: [
      "Sesiones Temáticas Semanales",
      "Moderadores Bilingües y Expertos",
      "Formato de Breakout Rooms (Salas Pequeñas)",
      "Ambiente seguro para equivocarse y aprender"
    ],
    color: "#118AB2",
    borderColor: "#80dfffff"
  }
];

const Aprenderan = () => {

  // manejo del contenido en pantalla con la barra de navegación
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const activeContent = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="aprenderan-section mt-5 mb-5">
      <Container>
        <div className="text-center mb-4">
          <h1 className="aprendizaje-title">¿Cómo aprenderán en EuroKids?</h1>
        </div>
        <div className="tabs-navigation">
          {tabsData.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`tab-btn ${activeTab === tab.id ? "active" : ""}`} >
              <span style={{ position: "relative", zIndex: 2 }}>{tab.label}</span>

              {activeTab === tab.id && (
                <motion.div className="tab-background" layoutId="activeTabBg" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
              )}
            </button>
          ))}
        </div>

        <div className="tab-content-wrapper mt-4">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <Row className="align-items-center">
                <Col lg={7} className="text-column">
                  <h2 style={{ color: activeContent.color }}>{activeContent.title}</h2>
                  <p className="description-text">{activeContent.description}</p>
                  <h5 className="mt-4 mb-3 fw-bold">Características:</h5>
                  <ul className="features-list">
                    {activeContent.list.map((item, idx) => (
                      <li key={idx}>
                        <span style={{ color: activeContent.color }}>•</span> {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#Programas">
                    <Button className="mt-4 btn-ver-planes luz" style={{ backgroundColor: activeContent.color, borderColor: activeContent.borderColor }} >
                      Ver Planes
                    </Button>
                  </a>
                  
                </Col>
                <Col lg={5} className="image-column">
                  <motion.div className="image-container" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} >
                    <img src={activeContent.img} alt={activeContent.title} className="tab-image" />
                  </motion.div>
                </Col>
              </Row>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default Aprenderan;