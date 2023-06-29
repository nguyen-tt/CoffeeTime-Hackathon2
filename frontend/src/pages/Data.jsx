import { useState, useEffect, useContext } from "react";
import axios from "axios";

import CurrentUserContext from "../contexts/CurrentUser";

export default function Data() {
  const [phones, setPhones] = useState([]);
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/smartphones`)
      .then((res) => {
        setPhones(res.data);
        setFilteredPhones(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    let filtered = phones;

    if (selectedBrand !== "") {
      filtered = filtered.filter((phone) => phone.brand === selectedBrand);
    }
    setFilteredPhones(filtered);
  }, [phones, selectedBrand]);

  const handleDelete = (phoneId) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/smartphones/${phoneId}`)
      .then(() => {
        setPhones((prevPhones) =>
          prevPhones.filter((phone) => phone.id !== phoneId)
        );
      });
  };

  const handleBrandFilter = (event) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <div className="data_page">
      <div className="data-container">
        <span>Base de données</span>
        <div className="filter-container">
          <label htmlFor="brandFilter">Filtrer par : </label>
          <select
            id="brandFilter"
            value={selectedBrand}
            onChange={handleBrandFilter}
          >
            <option value="">Toutes les marques</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Google">Google</option>
            <option value="Sony">Sony</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Huawei">Huawei</option>
          </select>
        </div>
        <table>
          <tr className="title-tr">
            <th scope="col">Marque</th>
            <th scope="col">Modèle</th>
            <th scope="col">Mémoire</th>
            <th scope="col">Stockage</th>
            <th scope="col">Écran</th>
            <th scope="col">Réseau</th>
            <th scope="col">Chargeur</th>
            <th scope="col">Prix (€)</th>
          </tr>
          {filteredPhones.length &&
            filteredPhones.map((phone) => (
              <tr key={phone.id} className="desc-tr">
                <th scope="row">{phone.brand}</th>
                <td>{phone.model}</td>
                <td>{phone.ram} Go</td>
                <td>{phone.storage} Go</td>
                <td>{phone.screen} "</td>
                <td>{phone.network}</td>
                <td>{phone.loader === 1 ? "Oui" : "Non"}</td>
                <td>
                  {0.2 * phone.storage + 2 * phone.ram + 2 * phone.screen}
                </td>
                {currentUser.isAdmin && (
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDelete(phone.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
