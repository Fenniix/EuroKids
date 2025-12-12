import { NavbarP, FooterP, ClaseMuestra, Backtop, GaleriaAni, Ventajas, VisitanosEKC, PresentForm, BienvenidaEKC } from "../components";
import { bienvenidaData, visitanosData, presentformData } from "../Data/EurokData";
import "../styles/sucursales.css";

const EkCanoitas = () => {
  const presentforminfo = presentformData.moctezuma;
  const bienvenidainfo = bienvenidaData.moctezuma;
  const visitanosinfo = visitanosData.moctezuma;

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
      <BienvenidaEKC
      {...bienvenidainfo}
      />

      {/* Ventajas */}
      <Ventajas/>

      {/* Visitanos - mapa de ubicación */}
      <VisitanosEKC
      {...visitanosinfo}
      />

      <GaleriaAni/>
      <ClaseMuestra />
      <FooterP />
    </>
  );
};

export default EkCanoitas;