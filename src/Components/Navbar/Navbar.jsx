import Navmenu from "./NavMenu";
import NavLogo from "./NavLogo";

export default function Navbar() {
  return (
    <div className="Navbar">
      <NavLogo />
      <Navmenu />
      <ul className="login-button">
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </div>
  );
}
