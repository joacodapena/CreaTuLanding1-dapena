import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './containers/ItemDetailContainer';
import CheckoutForm from './components/CheckoutForm';
import Cart from "./components/Cart"; 
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a mi tienda online!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer mensaje="Filtrado por categoría" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<CheckoutForm />} />  {/* Ruta para checkout */}
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    
    // <div>
    //   <NavBar />
    //   <ItemListContainer mensaje="¡Bienvenido a mi tienda online!" />
    // </div>
  );
}

export default App
