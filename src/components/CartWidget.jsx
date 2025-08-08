import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const totalQuantity = getTotalQuantity();

  return (
    <Link to="/cart" aria-label="Carrito de compras" style={{ position: "relative", color: "black", textDecoration: "none" }}>
      🛒
      {totalQuantity > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-10px",
            background: "red",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
