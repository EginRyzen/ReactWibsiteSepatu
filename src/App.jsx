import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";

export default function App() {
  return (
    <>
      <div className="main-header">
        <Navbar />
      </div>
      <div className="main">
        <About />
        <div className="container">
          <div id="product">
            <h2>Product</h2>
            <div className="box-product">
              <div className="card">
                <div className="card-header">
                  <img src="./img/product_1.jpg" alt="" />
                </div>
                <div className="card-body">
                  <p>Adidas Run 80s Mens Sneakers - Bronze Strata</p>
                  <h3>Rp. 1.1000.00</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
