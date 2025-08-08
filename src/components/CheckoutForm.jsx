import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos
    if (!buyer.name || !buyer.email || !buyer.phone) {
      setError("Por favor complete todos los campos.");
      return;
    }

    setLoading(true);
    setError(null);

    const order = {
      buyer,
      items: cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total: getTotalPrice(),
      date: serverTimestamp()
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
      setLoading(false);
    } catch (err) {
      setError("Error al generar la orden. Intente nuevamente.");
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Finalizar compra</h2>

      <input
        type="text"
        name="name"
        placeholder="Nombre completo"
        value={buyer.name}
        onChange={handleChange}
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={buyer.email}
        onChange={handleChange}
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={buyer.phone}
        onChange={handleChange}
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" disabled={loading} style={{ width: "100%" }}>
        {loading ? "Procesando..." : "Confirmar compra"}
      </button>
    </form>
  );
};

export default CheckoutForm;
