import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css'

function App() {

  return (
    <>
    <div>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a mi tienda online!" />
    </div>
    </>
  );
}

export default App
