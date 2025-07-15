import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = () => {
      setTimeout(() => {
        setItem({ id: itemId, name: "Producto " + itemId, description: "Descripción simulada" });
      }, 1000);
    };

    fetchItem();
  }, [itemId]);

  return (
    <div>
      {item ? (
        <>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
