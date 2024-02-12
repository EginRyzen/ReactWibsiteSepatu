import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
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

function Product() {
  const [heartStatus, setHeartStatus] = useState({});

  const handleHeartClick = (id) => {
    setHeartStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id], // Toggle status
    }));
  };

  return (
    <div className="container">
      <div id="product">
        <h2>Product</h2>
        <div className="box-product">
          {Card.map((data) => (
            <div className="card" key={data.id}>
              <div className="card-header">
                <img src={data.img} alt="" />
                {/* <FontAwesomeIcon className="icon-heart" icon={faHeart} /> */}
                {/* <FontAwesomeIcon className={heartStatus[data.id] ? "icon-heart red" : "icon-heart"} icon={faHeart} onClick={() => handleHeartClick(data.id)} /> */}
                <FontAwesomeIcon className={heartStatus[data.id] ? "icon-heart red" : "icon-heart"} icon={faHeart} onClick={() => handleHeartClick(data.id)} />
              </div>
              <div className="card-body">
                <p>{data.judul}</p>
                <h3>{data.harga}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
