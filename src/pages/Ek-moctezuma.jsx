import { NavbarP, FooterP, ClaseMuestra, Backtop, GaleriaAni, Ventajas, VisitanosEK, PresentForm, BienvenidaEK } from "../components";
import { bienvenidaData, visitanosData, presentformData, ventajasData, galeriaData } from "../Data/EurokData";
import "../styles/sucursales.css";

const EkCanoitas = () => {
  const presentforminfo = presentformData.moctezuma;
  const bienvenidainfo = bienvenidaData.moctezuma;
  const ventajasinfo = ventajasData.moctezuma;
  const visitanosinfo = visitanosData.moctezuma;
  const galeriainfo = galeriaData.moctezuma;

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