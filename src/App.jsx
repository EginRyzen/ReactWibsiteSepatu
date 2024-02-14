import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Product from "./Components/Product/Product.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <>
      <div className="main-header">
        <Navbar />
      </div>
      <div className="main">
        <About />
        <Product />
        <div className="container">
          <div id="top_product">
            <h2>Top Product</h2>
            <div className="box_top">
              <div className="box_view">
                <div className="card_product">
                  <img src="./img/top_1.png" alt="" />
                </div>
                <div className="card_product">
                  <img src="./img/top_2.png" alt="" />
                </div>
                <div className="card_product">
                  <img src="./img/top_3.png" alt="" />
                </div>
                <div className="card_product">
                  <img src="./img/top_4.png" alt="" />
                </div>
                <div className="card_product">
                  <img src="./img/top_5.png" alt="" />
                </div>
                <div className="card_product">
                  <img src="./img/top_6.png" alt="" />
                </div>
              </div>
              <div className="box_preview">
                <img src="./img/top_1.png" alt="" />
              </div>
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
