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
      <div className="mt-5">
        <div className="txt-cardP-left animate-p-right">
          <h1>HAJKndjka</h1>
          <p>njkanska</p>
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
            <h1>HAJKndjka</h1>
            <p>njkanska</p>
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
          <h1>HAJKndjka</h1>
          <p>njkanska</p>
        </div>
        <div className="d-flex justify-content-end overflow-hidden">
          <Card className="card-pd animate-p-left">
            <CardImg></CardImg>
          </Card> 
        </div>
      </div>
    </>
  )
}

export default CardP