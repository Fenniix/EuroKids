import { NavbarP, FooterP, ClaseMuestra, Backtop, GaleriaAni, Ventajas, VisitanosEK, PresentForm, BienvenidaEK } from "../components";
import { bienvenidaData, visitanosData, presentformData, ventajasData, galeriaData } from "../Data/EurokData";
import "../styles/sucursales.css";


const EkCanoitas = () => {
  const presentforminfo = presentformData.laureles;
  const bienvenidainfo = bienvenidaData.laureles;
  const ventajasinfo = ventajasData.laureles;
  const visitanosinfo = visitanosData.laureles;
  const galeriainfo = galeriaData.laureles;

  return (
    <>

      {/* Barra de navegacion */}
      <NavbarP />

      {/* Backtop */}
      <Backtop />

      {/* <div className="box-prueba">
        
      </div> */}

      <PresentForm
      {...presentforminfo}
      />

      {/* Bienvenida */}
      <BienvenidaEK
      {...bienvenidainfo}
      />

      {/* Ventajas */}
      <Ventajas
      datos = {ventajasinfo}
      />

      {/* Visitanos - mapa de ubicación */}
      <VisitanosEK
      {...visitanosinfo}
      />

      {/* Galeria de imagenes con texto descriptivo */}
      <GaleriaAni
      imagenes = {galeriainfo}
      />

      {/* Clase muestra para el alumno/a */}
      <ClaseMuestra />

      {/* Footer */}
      <FooterP />
    </>
  );
};

export default EkCanoitas;