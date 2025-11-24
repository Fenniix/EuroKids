import {Container, Card, Nav, Button, Tab, Tabs } from "react-bootstrap"
import { useEffect, useState } from "react"
import { FooterP, NavbarP, Carrusel, GaleriaAni, Preguntas, CardP, Idiomas, Niveles, NivelesCamino, ClaseMuestra, Pruebas, Backtop, Aprenderan } from "../components"
import "../styles/home.css"

const home = () => {

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
      {/* Barra de navegacion */}
      <NavbarP/>

      {/* Backtop */}
      <Backtop/>
      
      <div className="font-pre">
        {/* Video de fondo 
        <video autoPlay loop muted playsInline src="" className="videoEK"></video>
        */}
        <Container className="cont-p cont-animado">
          <h1 className="display-1 fw-bold">EUROKIDS</h1>
          {/*<p className="lead">¡Explora, aprende y diviértete!</p>*/}
        </Container>
      </div>
      
      {/* Idiomas */}
      <Idiomas/>

      {/* ¿Como aprenderan? */}
      <Aprenderan/>

      {/* Niveles de programas */}
      <NivelesCamino/>

      <div className="promociones">
        <h1 className="mt-4">Razones para elegir EuroKids</h1>
        <CardP/>
      </div>
      
      {/* Carrusel de comentarios 
      <Carrusel/>*/}

      <Pruebas/>

      {/* Seccion - ¿Como enseñamos? */}
      {/*
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
      */}

      <GaleriaAni/>

      {/* Seccion pendiente de contenido y nombre */}
      <Niveles/>

      {/*Preguntas frecuentes*/}
      <Preguntas/>

      {/* Clase Muestra */}
      <ClaseMuestra/>
      
      <FooterP/>
    </>
  )
}

export default home