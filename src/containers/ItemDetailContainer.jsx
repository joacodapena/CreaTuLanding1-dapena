import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../services/firebaseProducts";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      console.log("Buscando producto con id:", itemId);
    setLoading(true);
    fetchProductById(itemId).then((product) => {
          console.log("Producto encontrado:", product);
      setItem(product);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) return <p>Cargando producto...</p>;

  if (!item) return <p>Producto no encontrado.</p>;

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
