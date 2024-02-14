import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
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
  );
}
