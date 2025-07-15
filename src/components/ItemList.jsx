import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
