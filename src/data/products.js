const products = [
  {
    id: '1',
    name: 'Remera Oversize',
    price: 4500,
    category: 'ropa',
    description: 'Remera de algodón oversize unisex.',
    stock: 15,
  },
  {
    id: '2',
    name: 'Pantalón Cargo',
    price: 8900,
    category: 'ropa',
    description: 'Pantalón cargo color arena con bolsillos.',
    stock: 10,
  },
  {
    id: '3',
    name: 'Auriculares Bluetooth',
    price: 18900,
    category: 'tecnologia',
    description: 'Auriculares inalámbricos con cancelación de ruido.',
    stock: 20,
  },
  {
    id: '4',
    name: 'Smartwatch',
    price: 25000,
    category: 'tecnologia',
    description: 'Smartwatch con monitor de ritmo cardíaco.',
    stock: 12,
  },
  {
    id: '5',
    name: 'Gorra negra',
    price: 3500,
    category: 'accesorios',
    description: 'Gorra deportiva negra ajustable.',
    stock: 30,
  }
];

// Aca simulo un fetch de todos los productos
export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

// Aca simulo un fetch de un producto por ID
export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id));
    }, 1000);
  });
};

// Simulo un fetch por categoría
export const getProductsByCategory = (categoryId) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId));
    }, 1000);
  });
};
