import React, { useState } from "react";
import axios from "axios";

export default function Adding() {
  // const [value, setValue] = useState("default");
  const [phoneData, setPhoneData] = useState({
    brand: "",
    model: "",
  });

  const handleChange = (e) => {
    // setValue(e.target.value);
    const { name, value } = e.target;
    setPhoneData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/smartphones`, phoneData)
    .then((response) => {
      console.warn("phone added", response.data);
      setPhoneData({
        brand: "",
        model: "",
      });
    })
    .catch((err) => console.error(err));

  return (
    <>
      <div>
        <h1 className="add-phone">Ajouter un téléphone</h1>
      </div>
      <div className="container">
        <div>
          <form onSubmit={handleSubmit} className="phone-form">
            <label className="phone-label">
              Marque
              <br />
              <select
                name="brand"
                value={phoneData.brand}
                // defaultValue={value}
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
          <form className="phone-form">
            <label className="phone-label">
              Modèle
              <br />
              <select
                name="model"
                value={phoneData.model}
                // defaultValue={value}
                onChange={handleChange}
                className="maker-select"
              >
                <option className="choose" value="default" disabled hidden>
                  Choisir
                </option>
                <option value="iphone">iphone</option>
                <option value="sony">sony</option>
                <option value="xiaomi">xiaomi</option>
                <option value="huawei">huawei</option>
                <option value="samsung">samsung</option>
              </select>
            </label>
          </form>
        </div>
        <div>
          <form className="phone-form">
            <label className="phone-label">
              RAM
              <br />
              <select
                // defaultValue={value}
                onChange={handleChange}
                className="maker-select"
              >
                <option className="choose" value="default" disabled hidden>
                  Choisir
                </option>
                <option value="30">1 Go</option>
                <option value="40">2 Go</option>
                <option value="50">3 Go</option>
                <option value="60">4 Go</option>
                <option value="70">6 Go</option>
                <option value="80">8 Go</option>
                <option value="90">12 Go</option>
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
                // defaultValue={value}
                onChange={handleChange}
                className="maker-select"
              >
                <option className="choose" value="default" disabled hidden>
                  Choisir
                </option>
                <option value="31">16 Go</option>
                <option value="45">32 Go</option>
                <option value="66">64 Go</option>
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
                // defaultValue={value}
                onChange={handleChange}
                className="maker-select"
              >
                <option className="choose" value="default" disabled hidden>
                  Choisir
                </option>
                <option value="40">6"</option>
                <option value="44">7"</option>
                <option value="49">8"</option>
                <option value="53">9"</option>
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
                // defaultValue={value}
                onChange={handleChange}
                className="maker-select"
              >
                <option className="choose" value="default" disabled hidden>
                  Choisir
                </option>
                <option value="1">4G</option>
                <option value="2">5G</option>
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
                // defaultValue={value}
                onChange={handleChange}
                className="maker-select"
              >
                <option className="choose" value="default" disabled hidden>
                  Choisir
                </option>
                <option value="1">Oui</option>
                <option value="2">Non</option>
              </select>
            </label>
          </form>
        </div>
        <div>
          <form className="phone-form">
            <label className="phone-label">
              État
              <br />
              <select
                // defaultValue={value}
                onChange={handleChange}
                className="maker-select"
              >
                <option className="choose" value="default" disabled hidden>
                  Choisir
                </option>
                <option value="0">Parfait</option>
                <option value="0.90">Très Bon</option>
                <option value="0.80">Correct</option>
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
    </>
  );
}
