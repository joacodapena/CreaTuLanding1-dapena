import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav style={{
      backgroundColor: "black",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1>Mi Tienda</h1>
      </Link>

      <ul style={{
        listStyle: "none",
        display: "flex",
        gap: "15px",
        margin: 0,
        alignItems: "center"
      }}>
        <li>
          <Link to="/category/ropa" style={{ color: "white", textDecoration: "none" }}>
            Ropa
          </Link>
        </li>
        <li>
          <Link to="/category/tecnologia" style={{ color: "white", textDecoration: "none" }}>
            Tecnología
          </Link>
        </li>
        <li>
          <Link to="/category/accesorios" style={{ color: "white", textDecoration: "none" }}>
            Accesorios
          </Link>
        </li>
      </ul>

      <div style={{ padding: "18px" }}>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
