import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p><strong>Precio:</strong> ${item.price}</p>
      <p><strong>Stock disponible:</strong> {item.stock}</p>

      {/* <ItemCount stock={item.stock} initial={1} onAdd={(quantity) => alert(`Agregaste ${quantity} unidades al carrito`)} /> */}
    </div>
  );
};

export default ItemDetail;
