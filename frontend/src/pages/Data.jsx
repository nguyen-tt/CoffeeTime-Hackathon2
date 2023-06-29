import { useState, useEffect } from "react";
import axios from "axios";

export default function Page2() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/smartphones`)
      .then((res) => setPhones(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDelete = (phoneId) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/smartphones/${phoneId}`)
      .then(() => {
        setPhones((prevPhones) =>
          prevPhones.filter((phone) => phone.id !== phoneId)
        );
      });
  };

  return (
    <div className="data_page">
      <div className="data-container">
        <span>Base de données</span>
        <table>
          <tr className="title-tr">
            <th scope="col">Marque</th>
            <th scope="col">Modèle</th>
            <th scope="col">Mémoire</th>
            <th scope="col">Stockage</th>
            <th scope="col">Écran</th>
            <th scope="col">Réseau</th>
            <th scope="col">Chargeur</th>
          </tr>
          {phones.length &&
            phones.map((phone) => (
              <tr key={phone.id} className="desc-tr">
                <th scope="row">{phone.brand}</th>
                <td>{phone.model}</td>
                <td>{phone.ram} Go</td>
                <td>{phone.storage} Go</td>
                <td>{phone.screen} "</td>
                <td>{phone.network}</td>
                <td>{phone.loader === 1 ? "Oui" : "Non"}</td>
                <td>
                  <button type="button" onClick={() => handleDelete(phone.id)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
