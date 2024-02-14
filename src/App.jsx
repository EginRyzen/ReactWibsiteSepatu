import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Product from "./Components/Product/Product.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

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

const TopProduct = [
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
  const [topProduct] = useState(TopProduct);
  const [selectedProduct, setSelectProduct] = useState(topProduct[0]);

  function handleSelectProduct(id) {
    const newProduct = topProduct.filter((Product) => Product.id === id);
    setSelectProduct(newProduct[0]);
  }

  return (
    <>
      <div className="main-header">
        <Navbar />
      </div>
      <div className="main">
        <About />
        <Product Card={Card} />
        <div className="container">
          <div id="top_product">
            <h2>Top Product</h2>
            <div className="box_top">
              <BoxView topProduct={topProduct} onSelectedProduct={handleSelectProduct} />
              <BoxPreview selectedProduct={selectedProduct} />
              <div className="box_deskripsi">
                <div className="box_text">
                  <h3>Nike P-6000</h3>
                  <h4>The Nike P-6000 draws on the 2006 Nike Air Pegasus, bringing you a mash-up of iconic style thats breathable, comfortable and evocative of that early-2000s vibe.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sequi! Nostrum debitis ad a corporis perferendis sapiente minus fuga autem laboriosam atque consequatur, odit sequi ipsam reiciendis labore? Quibusdam nulla
                    nisi maxime incidunt alias. Velit cum alias, illum voluptas aliquam quisquam delectus reiciendis reprehenderit iste. Minus suscipit id vitae enim accusamus voluptates sint rem maxime, dolores dicta quibusdam officiis
                    porro ducimus harum ipsam incidunt nostrum quos voluptate? Saepe, itaque tempore. Ab aliquam aperiam officia doloribus tenetur nam adipisci commodi accusamus animi facere, obcaecati natus consequatur maxime voluptas
                    eveniet odit vero corrupti libero unde quisquam sit iste recusandae cupiditate incidunt! Fuga?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

function BoxView({ topProduct, onSelectedProduct }) {
  return (
    <div className="box_view">
      {topProduct?.map((data) => (
        <div className="card_product" key={data.id} onClick={() => onSelectedProduct(data.id)}>
          <img src={data.img} alt="" />
        </div>
      ))}
    </div>
  );
}

function BoxPreview({ selectedProduct }) {
  return (
    <div className="box_preview">
      <img src={selectedProduct.img} alt="" />
    </div>
  );
}
