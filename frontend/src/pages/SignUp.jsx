/* eslint-disable no-nested-ternary */
import { useState, useContext } from "react";
import axios from "axios";

import CurrentUserContext from "../contexts/CurrentUser";
import NotFound from "./NotFound";

export default function SignUp() {
  const { currentUser } = useContext(CurrentUserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [invalidFields, setInvalidFields] = useState([]);
  const [invalidSignUp, setInvalidSignUp] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const validationFilters = {
      email: /^[-_.a-z0-9]+@[-_a-z0-9]+(\.[a-z]{2,4})?\.[a-z]{2,6}$/i,
      password: /^\S+$/i,
      confirmPassword: /^\S+$/i,
    };
    const fields = {
      email,
      password,
      confirmPassword,
    };
    const errors = new Set();

    for (const field in fields) {
      if (!fields[field].match(validationFilters[field])) {
        errors.add(field);
      } else if (
        field === "confirmPassword" &&
        fields[field] !== fields.password
      ) {
        errors.add(field);
      } else {
        errors.delete(field);
      }
    }
    setInvalidFields([...errors]);

    if (errors.size === 0) {
      delete fields.confirmPassword;
      if (!fields.firstname) delete fields.firstname;
      if (!fields.lastname) delete fields.lastname;
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/users`, fields)
        .then((response) => {
          if (response.data.id) setIsRegistered(true);
        })
        .catch((err) => {
          setInvalidSignUp(err.response.data.error);
        });
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {currentUser.isAdmin || currentUser.isUser ? (
        isRegistered ? (
          <section className="account signup">
            <p>Le nouvel utilisateur a été créé avec succès.</p>
          </section>
        ) : (
          <form className="account signup" onSubmit={handleSignUp} noValidate>
            <h2>Créer un compte</h2>
            <p className="obligation">
              Tous les champs sont obligatoires
              {invalidSignUp && <span className="error">{invalidSignUp}</span>}
            </p>
            <p>
              <label htmlFor="signup-email">
                {invalidFields.includes("email") && (
                  <span className="error">
                    (une adresse email doit être saisie)
                  </span>
                )}
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                value={email}
                required
                onChange={handleEmail}
                placeholder="Email *"
              />
            </p>
            <p>
              <label htmlFor="signup-password">
                {invalidFields.includes("password") && (
                  <span className="error">
                    (un mot de passe doit être saisi)
                  </span>
                )}
              </label>
              <input
                id="signup-password"
                name="password"
                type="password"
                value={password}
                autoComplete="new-password"
                required
                onChange={handlePassword}
                placeholder="Mot de passe *"
              />
            </p>
            <p>
              <label htmlFor="signup-password-confirm">
                {invalidFields.includes("confirmPassword") && (
                  <span className="error">
                    (le mot de passe doit être resaisi à l’identique)
                  </span>
                )}
              </label>
              <input
                id="signup-password-confirm"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                required
                onChange={handleConfirmPassword}
                placeholder="Confirmation du mot de passe *"
              />
            </p>
            <p className="validate-signup">
              <input type="submit" value="S’inscrire" />
            </p>
          </form>
        )
      ) : (
        <NotFound />
      )}
    </>
  );
}
