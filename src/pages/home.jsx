import { FooterP, NavbarP, Preguntas, CardRazones, Idiomas, Niveles, ClaseMuestra, Backtop, Aprenderan, Carrusel, PresentForm, Programas } from "../components"
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
      destacado={"Idiomas"}
      />

      {/* Idiomas */}
      <Idiomas/>

      {/* ¿Como aprenderan? */}
      <Aprenderan/>

      {/* Niveles de programas */}
      <Programas/>

      {/* Razones */}
      <CardRazones/>

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