import { useNavigate, useLocation } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function Sucursalesnav() {

  const navigate = useNavigate();
  const location = useLocation();

  // rutas de las secursales e inicio
  const currentPath = location.pathname;
  const sucursales = [
    { label: "Inicio", path: "/" },
    { label: "EK Canoitas", path: "/ekcanoitas" },
    { label: "EK Moctezuma", path: "/ekmoctezuma" },
    { label: "EK Laureles", path: "/eklaureles" },
  ];
  
  // No muestra la opción de la ubicación actual en la pagina
  const opciones = sucursales.filter((item) => item.path !== currentPath);

  return (
    <NavDropdown 
      title={<span className="dropdown-title fw-bold">Sucursales</span>} 
      className="mx-3 color-texto"
    >
      {opciones.map((sucursal) => (
        <NavDropdown.Item 
          key={sucursal.path} 
          onClick={() => navigate(sucursal.path)}
        >
          {sucursal.label}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default Sucursalesnav;