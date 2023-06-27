export default function ContactForm() {
  return (
    <div className="form">
      <div className="form-label">
        <label htmlFor="firstname">
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Prénom"
          />
        </label>
      </div>
      <div className="form-label">
        <label htmlFor="lastname">
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Nom"
          />
        </label>
      </div>
      <div className="form-label">
        <label htmlFor="Email">
          <input
            type="email"
            id="firstname"
            name="firstname"
            placeholder="Adresse Email"
          />
        </label>
      </div>
      <div className="contact-message">
        <label htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows="16"
            maxLength="250"
            cols="60"
            wrap
            placeholder="Votre Message"
          />
        </label>
      </div>
      <button type="submit" className="contact-btn">
        Envoyer
      </button>
    </div>
  );
}
