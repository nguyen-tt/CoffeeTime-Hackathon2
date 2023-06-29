import { Link } from "react-router-dom";
import React, { useContext } from "react";

import CurrentUserContext from "../contexts/CurrentUser";

export default function Home() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="home">
      <div className="hero">
        {currentUser.isUser || currentUser.isAdmin ? (
          ""
        ) : (
          <Link to="/login" className="linkhome-button">
            <button type="button" className="connect">
              Se connecter
            </button>
          </Link>
        )}
      </div>
      <div className="home-text">
        <h1>Luttons contre la fracture numérique !</h1>
        <p>
          Les bénéficiaires viennent avec une problématique qui les handicape au
          quotidien : compte en ligne bloqué, réglages du téléphone, envie
          d’utiliser WhatsApp… En tête à tête, nous les aidons à trouver une
          solution et à utiliser l’outil concerné.
        </p>
        <br />
        <p>
          Nous proposons aux bénéficiaires des parcours gratuits qui leur
          permettent d’acquérir un bagage numérique minimum : prise en main d’un
          ordinateur ou d’un smartphone, navigation sur internet, utilisation
          d’une boîte mail… Ces activités se tiennent dans nos espace de
          solidarité numérique mais aussi au sein de structures sociales ou
          associatives qui nous en font la demande (en savoir plus) dans le
          cadre de parcours thématiques spécifiques, pour aider des publics
          spécifiques sur le retour à l’emploi ou le suivi scolaire en ligne des
          enfants par exemple.
        </p>
        <br />
        <p>
          Nous accompagnons les structures qui le souhaitent sur des parcours
          d’apprentissage consacrés à leur thématique : emploi, seniors, santé…
          N’hésitez pas à prendre contact avec nous pour mettre en place des
          ateliers dédiés dans vos locaux !
        </p>
      </div>
    </div>
  );
}
