import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Product from "./Components/Product/Product.jsx";

export default function App() {
  return (
    <>
      <div className="main-header">
        <Navbar />
      </div>
      <div className="main">
        <About />
        <Product />
      </div>
    </>
  );
}
