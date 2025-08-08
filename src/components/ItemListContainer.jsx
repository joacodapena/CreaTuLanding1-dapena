import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from "../services/firebaseProducts";
import ItemList from './ItemList';

const ItemListContainer = ({ mensaje }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts(categoryId).then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <section style={{ padding: "20px" }}>
      <h2>{mensaje}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
    </section>
  );
};

export default ItemListContainer;
