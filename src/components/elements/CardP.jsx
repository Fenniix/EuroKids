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
          <h1>Titulo</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit cupiditate nam consequatur ea quidem nihil libero dignissimos laboriosam ex, temporibus eligendi aperiam saepe consectetur voluptatibus quisquam doloremque. Sapiente, quis.</p>
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
            <h1>Titulo</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem dolores cum numquam facere vitae adipisci eligendi qui quos ipsa optio amet modi molestias magni, dolore fugit doloremque perferendis nulla aspernatur?</p>
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
          <h1>Titulo</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quidem cupiditate ipsa voluptatibus repellendus impedit consequuntur, blanditiis beatae facilis inventore quasi quam perferendis, nostrum similique! Nulla velit tenetur illo aspernatur.</p>
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