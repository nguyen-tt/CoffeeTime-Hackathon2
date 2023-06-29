import React, { useContext } from "react";
import ContactForm from "../components/ContactForm";

import CurrentUserContext from "../contexts/CurrentUser";
import NotFound from "./NotFound";

export default function Contact() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {currentUser.isAdmin || currentUser.isUser ? (
        <div className="contact-container">
          <h1 className="contact-us">Vous avez des suggestions ?</h1>
          <ContactForm />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
