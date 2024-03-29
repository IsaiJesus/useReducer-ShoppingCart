import CrudApi from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <h1>Carrito</h1>
      <CrudApi/>
      <hr/>
      <ShoppingCart/>
    </div>
  );
} 

export default App;
