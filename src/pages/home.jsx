import { Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import { FooterP, NavbarP, GaleriaAni, Preguntas, CardP, Idiomas, Niveles, NivelesCamino, ClaseMuestra, Pruebas, Backtop, Aprenderan, Carrusel, PresentForm } from "../components"
import "../styles/home.css"

const home = () => {

  return (
    <>
      {/* Barra de navegacion */}
      <NavbarP/>

      {/* Backtop */}
      <Backtop/>

      {/* Presentación */}
      <PresentForm
      titulo={"EuroKids"}
      />

      {/* Idiomas */}
      <Idiomas/>

      {/* ¿Como aprenderan? */}
      <Aprenderan/>

      {/* Niveles de programas */}
      <NivelesCamino/>

      {/* Razones */}
      <CardP/>

      {/* Carrusel de comentarios */}
      <Carrusel/>

      {/* Seccion pendiente de contenido y nombre */}
      <Niveles/>

      {/*Preguntas frecuentes*/}
      <Preguntas/>

      {/* Clase Muestra */}
      <ClaseMuestra/>

      {/* Footer */}
      <FooterP/>
    </>
  )
}

export default home