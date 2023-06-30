import React, { useState, useContext } from "react";
import axios from "axios";

import CurrentUserContext from "../contexts/CurrentUser";
import NotFound from "./NotFound";

export default function Adding() {
  const { currentUser } = useContext(CurrentUserContext);
  const [phoneData, setPhoneData] = useState({});
  const [isAdded, setIsAdded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPhoneData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/smartphones`, phoneData)
      .then((response) => {
        console.warn("phone added", response.data);
        setPhoneData([]);
        setIsAdded(true);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
    {currentUser.isAdmin ? (
     <div className="adding-page">
      <div>
        <h1 className="add-phone">Ajouter un téléphone</h1>
      </div>
      <div className="container">
        {isAdded && <p>Le téléphone a été ajouté avec succès.</p>}
        <div>
          <form onSubmit={handleSubmit} className="phone-form">
            <label className="phone-label">
              Marque
              <br />
              <select
                name="brand"
                value={phoneData.brand}
                onChange={handleChange}
                className="maker-select"
              >
                <option className="choose" value="default" disabled hidden>
                  Choisir
                </option>
                <option value="apple">Apple</option>
                <option value="sony">Sony</option>
                <option value="xiaomi">Xiaomi</option>
                <option value="huawei">Huawei</option>
                <option value="samsung">Samsung</option>
              </select>
            </label>
          </form>
        </div>
        <div>
          <label className="phone-label">
            Modèle
            <br />
            <input
              type="text"
              name="model"
              value={phoneData.model}
              onChange={handleChange}
              className="maker-select"
            />
          </label>
        </div>
        <div>
          <form className="phone-form">
            <label className="phone-label">
              RAM
              <br />
              <select
                name="ram"
                value={phoneData.ram}
                onChange={handleChange}
                className="maker-select"
              >
                <option className="choose" value="default" disabled hidden>
                  Choisir
                </option>
                <option value="1">1 Go</option>
                <option value="2">2 Go</option>
                <option value="3">3 Go</option>
                <option value="4">4 Go</option>
                <option value="6">6 Go</option>
                <option value="8">8 Go</option>
                <option value="12">12 Go</option>
              </select>
            </label>
          </form>
        </div>
        <div>
          <form className="phone-form">
            <label className="phone-label">
              Stockage
              <br />
              <select
                name="storage"
                value={phoneData.storage}
                onChange={handleChange}
                className="maker-select"
              >
                <option className="choose" value="default" disabled hidden>
                  Choisir
                </option>
                <option value="16">16 Go</option>
                <option value="32">32 Go</option>
                <option value="64">64 Go</option>
              </select>
            </label>
          </form>
        </div>
        <div>
          <form className="phone-form">
            <label className="phone-label">
              Écran
              <br />
              <select
                name="screen"
                value={phoneData.screen}
                onChange={handleChange}
                className="maker-select"
              >
                <option className="choose" value="default" disabled hidden>
                  Choisir
                </option>
                <option value="6">6"</option>
                <option value="7">7"</option>
                <option value="8">8"</option>
                <option value="9">9"</option>
              </select>
            </label>
          </form>
        </div>
        <div>
          <form className="phone-form">
            <label className="phone-label">
              Réseau
              <br />
              <select
                name="network"
                value={phoneData.network}
                onChange={handleChange}
                className="maker-select"
              >
                <option className="choose" value="default" disabled hidden>
                  Choisir
                </option>
                <option value="4G">4G</option>
                <option value="5G">5G</option>
              </select>
            </label>
          </form>
        </div>
        <div>
          <form className="phone-form">
            <label className="phone-label">
              Chargeur
              <br />
              <select
                name="loader"
                value={phoneData.loader}
                onChange={handleChange}
                className="maker-select"
              >
                <option className="choose" value="default" disabled hidden>
                  Choisir
                </option>
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </label>
          </form>
        </div>
      </div>
      <div className="add-btn-div">
        <button type="submit" className="add-btn">
          Ajouter
        </button>
      </div>
</div>
) : (
        <NotFound />
      )}
    </>
  );
}
