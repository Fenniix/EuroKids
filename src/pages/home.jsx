import { Container } from "react-bootstrap"
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