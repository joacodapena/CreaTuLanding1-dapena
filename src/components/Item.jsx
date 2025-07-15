import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      width: '200px'
    }}>
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
