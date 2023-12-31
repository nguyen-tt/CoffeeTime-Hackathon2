import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import CurrentUserContext from "../contexts/CurrentUser";

export default function Login() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidFields, setInvalidFields] = useState([]);
  const [invalidLogin, setInvalidLogin] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const validationFilters = {
      email: /^[-_.a-z0-9]+@[-_a-z0-9]+(\.[a-z]{2,4})?\.[a-z]{2,6}$/i,
      password: /^\S+$/i,
    };
    const fields = {
      email,
      password,
    };
    const errors = new Set();

    for (const field in fields) {
      if (!fields[field].match(validationFilters[field])) {
        errors.add(field);
      } else {
        errors.delete(field);
      }
    }
    setInvalidFields([...errors]);

    if (errors.size === 0) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/login`, fields)
        .then((response) => {
          const {
            data: { user },
          } = response;
          let username = null;
          if (user.firstname) {
            if (user.lastname) username = `${user.firstname} ${user.lastname}`;
            else username = user.firstname;
          } else if (user.lastname) username = user.lastname;
          setCurrentUser({
            id: user.id,
            username,
            isAdmin: user.role === 1,
            isUser: user.role === 0,
          });
        })
        .catch((err) => {
          setInvalidLogin(err.response.data.error);
        });
    }
  };

  return (
    <>
      {Object.keys(currentUser).length && <Navigate to="/" />}
      <div className="account">
        <form className="account-login" onSubmit={handleLogin} noValidate>
          <h1>Connexion</h1>
          <h2>
            Tous les champs sont obligatoires
            {invalidLogin && <span className="error">{invalidLogin}</span>}
          </h2>
          <p>
            <label htmlFor="login-email">
              {/* Adresse email */}
              {invalidFields.includes("email") && (
                <span className="error">
                  (une adresse email doit être saisie)
                </span>
              )}
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              value={email}
              placeholder="Adresse e-mail"
              required
              onChange={handleEmail}
            />
          </p>
          <p>
            <label htmlFor="login-password">
              {/* Mot de passe */}
              {invalidFields.includes("password") && (
                <span className="error">(un mot de passe doit être saisi)</span>
              )}
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              value={password}
              placeholder="Mot de passe"
              required
              onChange={handlePassword}
            />
          </p>
          <h2>
            <Link
              to="/login/forgotten-password"
              className="forgotten-password-link"
            >
              Mot de passe oublié&nbsp;?
            </Link>
          </h2>
          <p>
            <input
              className="connect-yourself"
              type="submit"
              value="Se connecter"
            />
          </p>
        </form>
      </div>
    </>
  );
}
