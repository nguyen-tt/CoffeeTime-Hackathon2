import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUser";

import logo from "../assets/logo.svg";

export default function Header() {
  const location = useLocation();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const hasCurrentUser = !!Object.keys(currentUser).length;
  const logout = () => {
    setCurrentUser({});
  };

  return (
    <header className="header">
      <div className="top-header" />
      <div className="bottom-header">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <nav className="navbar">
          <ul>
            {currentUser.isAdmin && (
              <>
                <NavLink
                  to="/signup"
                  className={
                    location === "/signup" ? "navlink active" : "navlink"
                  }
                >
                  <li>Créer un compte</li>
                </NavLink>
                <NavLink
                  to="/adding"
                  className={
                    location === "/adding" ? "navlink active" : "navlink"
                  }
                >
                  <li>Créer un Smartphone</li>
                </NavLink>
              </>
            )}

            {(currentUser.isUser || currentUser.isAdmin) && (
              <>
                <NavLink
                  to="/data"
                  className={
                    location === "/data" ? "navlink active" : "navlink"
                  }
                >
                  <li>Base de données</li>
                </NavLink>
                <NavLink
                  to="/cardpage"
                  className={
                    location === "/cardpage" ? "navlink active" : "navlink"
                  }
                >
                  <li>Téléphones</li>
                </NavLink>
                <NavLink
                  to="/contact"
                  className={
                    location === "/contact" ? "navlink active" : "navlink"
                  }
                >
                  <li>Contact</li>
                </NavLink>
              </>
            )}
            <div className="disco-container">
              <nav className="disconnect">
                {hasCurrentUser && (
                  <button
                    type="submit"
                    onClick={logout}
                    className="disconnect-btn"
                  >
                    <h1>Déconnexion</h1>
                  </button>
                )}
              </nav>
              {hasCurrentUser && currentUser.username && (
                <p className="hello">Bonjour, {currentUser.username}</p>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}
