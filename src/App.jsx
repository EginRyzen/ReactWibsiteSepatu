import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Product from "./Components/Product/Product.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import TopProduct from "./Components/TopProduct/TopProduct.jsx";

const Card = [
  {
    id: 1,
    img: "./img/product_1.jpg",
    judul: "Adidas Run 80s Mens Sneakers - Bronze Strata",
    harga: "Rp. 1.1000.00",
  },
  {
    id: 2,
    img: "./img/product_2.jpg",
    judul: "Adidas Run 80s Mens Sneakers - Bronze Strata",
    harga: "Rp. 1.1000.00",
  },
  {
    id: 3,
    img: "./img/product_3.jpg",
    judul: "Adidas Run 80s Mens Sneakers - Bronze Strata",
    harga: "Rp. 1.1000.00",
  },
  {
    id: 4,
    img: "./img/product_4.jpg",
    judul: "Adidas Run 80s Mens Sneakers - Bronze Strata",
    harga: "Rp. 1.1000.00",
  },
  {
    id: 5,
    img: "./img/product_5.jpg",
    judul: "Adidas Run 80s Mens Sneakers - Bronze Strata",
    harga: "Rp. 1.1000.00",
  },
  {
    id: 6,
    img: "./img/product_6.jpg",
    judul: "Adidas Run 80s Mens Sneakers - Bronze Strata",
    harga: "Rp. 1.1000.00",
  },
  {
    id: 7,
    img: "./img/product_7.jpg",
    judul: "Adidas Run 80s Mens Sneakers - Bronze Strata",
    harga: "Rp. 1.1000.00",
  },
  {
    id: 8,
    img: "./img/product_8.jpg",
    judul: "Adidas Run 80s Mens Sneakers - Bronze Strata",
    harga: "Rp. 1.1000.00",
  },
];

const TopProductItem = [
  {
    id: "1",
    img: "./img/top_1.png",
  },
  {
    id: "2",
    img: "./img/top_2.png",
  },
  {
    id: "3",
    img: "./img/top_3.png",
  },
  {
    id: "4",
    img: "./img/top_4.png",
  },
  {
    id: "5",
    img: "./img/top_5.png",
  },
  {
    id: "6",
    img: "./img/top_6.png",
  },
];

export default function App() {
  return (
    <>
      <div className="main-header">
        <Navbar />
      </div>
      <div className="main">
        <About />
        <Product Card={Card} />
        <TopProduct TopProductItem={TopProductItem} />
        <footer>
          <div className="container">
            <div className="footer">
              <img src="./img/logo.png" alt="" />
              <p className="deskripsi_footer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi asperiores similique natus corrupti temporibus accusamus modi eaque, pariatur autem dolor exercitationem ut delectus aspernatur.
              </p>
            </div>
            <div className="footer">
              <h3>Information</h3>
              <p className="link">
                <a href="">About</a>
              </p>
              <p className="link">
                <a href="">Contact</a>
              </p>
            </div>
            <div className="footer">
              <h3>Follow Me</h3>
              <ul>
                <li>
                  <a href="">
                    <FontAwesomeIcon className="footer_icon" icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon className="footer_icon" icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon className="footer_icon" icon={faTiktok} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright">Egin Ryzen ©2024 Belajar React</p>
        </footer>
      </div>
    </>
  );
}
