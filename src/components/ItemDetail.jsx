import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
  const [added, setAdded] = useState(false);
  const { addItem } = useContext(CartContext);

  const handleAdd = (quantity) => {
    addItem(item, quantity); 
    setAdded(true);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p><strong>Precio:</strong> ${item.price}</p>
      <p><strong>Stock disponible:</strong> {item.stock}</p>

      {!added ? (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <p>Producto agregado al carrito</p>
      )}
    </div>
  );
};

export default ItemDetail;
