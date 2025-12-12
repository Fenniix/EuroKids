import { NavbarP, FooterP, ClaseMuestra, Backtop, GaleriaAni, Ventajas, VisitanosEKC, PresentForm, BienvenidaEKC } from "../components";
import { bienvenidaData, visitanosData, presentformData } from "../Data/EurokData"
import "../styles/sucursales.css";

const EkCanoitas = () => {
  const presentforminfo = presentformData.canoitas;
  const bienvenidainfo = bienvenidaData.canoitas;
  const visitanosinfo = visitanosData.canoitas;

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
      // mapaUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.48526020212!2d-93.12890042536718!3d16.75251608403034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8f7365ed81f%3A0x1679c94ff8ab27b9!2sEurokids%20Sucursal%20Canoitas%20-%20Ingl%C3%A9s%20para%20ni%C3%B1os!5e0!3m2!1ses-419!2smx!4v1764100067573!5m2!1ses-419!2smx"}
      {...visitanosinfo}
      />

      <GaleriaAni/>

      <ClaseMuestra />
      <FooterP />
    </>
  );
};

export default EkCanoitas;