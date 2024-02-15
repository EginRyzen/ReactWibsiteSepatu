import { useEffect } from "react";
import Navmenu from "./NavMenu";
import NavLogo from "./NavLogo";

export default function Navbar() {
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle input");
    const nav = document.querySelector(".nav-menu");

    const toggleSlide = () => {
      nav.classList.toggle("slide");
    };

    menuToggle.addEventListener("click", toggleSlide);

    return () => {
      menuToggle.removeEventListener("click", toggleSlide);
    };
  }, []);

  return (
    <div className="Navbar">
      <NavLogo />
      <Navmenu />
      <li className="login_button_mobile">
        <a href="" className="nav-button">
          Login
        </a>
      </li>
      <div className="menu-toggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
