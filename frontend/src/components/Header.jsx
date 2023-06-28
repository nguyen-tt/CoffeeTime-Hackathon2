import { NavLink, useLocation } from "react-router-dom";

import logo from "@assets/logo.svg";

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="top-header" />
      <div className="bottom-header">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <nav className="navbar">
          <ul>
            <NavLink
              to="/add"
              className={location === "/adding" ? "navlink active" : "navlink"}
            >
              <li>Ajout</li>
            </NavLink>
            <NavLink
              to="/data"
              className={location === "/data" ? "navlink active" : "navlink"}
            >
              <li>Base de données</li>
            </NavLink>
            <NavLink
              to="/faq"
              className={location === "/faq" ? "navlink active" : "navlink"}
            >
              <li>FAQ</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
