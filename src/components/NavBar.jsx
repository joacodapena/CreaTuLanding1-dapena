import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: "black", padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1>Mi Tienda</h1>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px", margin: 0 }}>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>

      <div style={{padding: "18px"}}>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
