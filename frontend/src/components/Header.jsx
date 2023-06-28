import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className="navbar">
        <ul>
          <NavLink
            to="/"
            className={location === "/page1" ? "navlink active" : "navlink"}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/adding"
            className={location === "/adding" ? "navlink active" : "navlink"}
          >
            <li>Ajout</li>
          </NavLink>
          <NavLink
            to="/page2"
            className={location === "/page2" ? "navlink active" : "navlink"}
          >
            <li>Page 2</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={location === "/contact" ? "navlink active" : "navlink"}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
