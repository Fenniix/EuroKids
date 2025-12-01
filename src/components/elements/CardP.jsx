import { useEffect } from "react";
import { Card, CardImg } from "react-bootstrap"
import "../../styles/home.css"

const CardP = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible-p-left");
          }
        });
      },
      { threshold: 0.2 }
    );

    const botones = document.querySelectorAll(".animate-p-left");
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
            entry.target.classList.add("visible-p-right");
          }
        });
      },
      { threshold: 0.2 }
    );

    const botones = document.querySelectorAll(".animate-p-right");
    botones.forEach((btn) => observer.observe(btn));

    return () => {
      botones.forEach((btn) => observer.unobserve(btn));
    };
  }, []);

  return (
    <>
      <div className="promociones">
        <h1 className="mt-4">Razones para elegir EuroKids</h1>
        <div className="mt-5">
          <div className="txt-cardP-left animate-p-right">
            <h1>Aprendizaje Lúdico</h1>
            <p>Olvídate de las clases aburridas. Aquí tus hijos aprenden jugando, cantando y creando, haciendo que el idioma se vuelva parte natural de su vida.</p>
          </div>
          <div className="d-flex justify-content-end overflow-hidden">
            <Card className="card-pd animate-p-left">
              <CardImg></CardImg>
            </Card> 
          </div>
        </div>
        
        <div className="mt-5">
          <div className="posicion-p d-flex justify-content-end">
            <div className="txt-cardP-right animate-p-left">
              <h1>Certificaciones Oficiales</h1>
              <p>No solo aprenden, lo demuestran. Preparamos a tus hijos para obtener certificaciones internacionales (Cambridge, DELF) desde temprana edad.</p>
            </div>
          </div>
          <div className="d-flex justify-content-start">
            <Card className="card-pi animate-p-right">
              <CardImg></CardImg>
            </Card> 
          </div>
        </div>

        
        <div className="mt-5 mb-5">
          <div className="txt-cardP-left animate-p-right">
            <h1>Espacios Seguros</h1>
            <p>Instalaciones diseñadas pensando 100% en niños, con protocolos de seguridad estrictos para que tú tengas total tranquilidad mientras ellos aprenden.</p>
          </div>
          <div className="d-flex justify-content-end overflow-hidden">
            <Card className="card-pd animate-p-left">
              <CardImg></CardImg>
            </Card> 
          </div>
        </div>
      </div>
    </>
  )
}

export default CardP