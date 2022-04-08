import "./App.css";
import ProductList from "./Components/ProductList";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <ProductList />
      </div>
    </>
  );
}

export default App;
