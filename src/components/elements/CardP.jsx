import { useEffect } from "react";
import { Card } from "react-bootstrap"
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
      <div className="d-flex mt-5 justify-content-end overflow-hidden">
        <Card className="card-p animate-p-left">
          <Card.Title>hsbajbsdiawbu</Card.Title>
        </Card> 
      </div>

      <div className="d-flex mt-5 justify-content-start">
        <Card className="card-p animate-p-right">
          <Card.Title>hsbajbsdiawbu</Card.Title>
        </Card> 
      </div>
      
      <div className="d-flex mt-5 mb-5 justify-content-end overflow-hidden">
        <Card className="card-p animate-p-left">
          <Card.Title>hsbajbsdiawbu</Card.Title>
        </Card> 
      </div>
    </>
  )
}

export default CardP