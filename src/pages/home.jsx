import { FooterP, NavbarP, Preguntas, CardRazones, Idiomas, Niveles, ClaseMuestra, Backtop, Aprenderan, Carrusel, PresentForm, Programas, Pruebas } from "../components"
import { presentformData } from "../Data/EurokData";
import "../styles/home.css"

const home = () => {
  const presentforminfo = presentformData.home;

  return (
    <>
      {/* Barra de navegacion */}
      <NavbarP/>

      {/* Backtop */}
      <Backtop/>

      {/* Presentación */}
      <PresentForm
      {...presentforminfo}
      />

      {/* Idiomas */}
      <Idiomas/>

      {/* ¿Como aprenderan? */}
      <Aprenderan/>

      {/* Niveles de programas */}
      <Programas/>

      {/* Razones */}
      <CardRazones/>
      {/* <Pruebas/> */}

      {/* Carrusel de comentarios */}
      <Carrusel/>

      {/* Seccion pendiente de contenido y nombre */}
      {/* <Niveles/> */}

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