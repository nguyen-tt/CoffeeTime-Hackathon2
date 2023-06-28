import React from "react";

export default function Adding() {
  return (
    <>
      <div>
        <h1 className="phone-spec">Caractéristiques du téléphone</h1>
      </div>
      <div className="maker-div">
        <form className="phone-form">
          <label className="maker">
            Marque
            <br />
            <select className="maker-select">
            <option className="choose" disabled="true" value="">
                Choisir
              </option>
              <option value="iphone">iPhone</option>
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
          <label className="maker">
            Modèle
            <br />
            <select className="maker-select">
              <option className="choose" disabled="true" value="">
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
          <label className="maker">
            RAM
            <br />
            <select className="maker-select">
            <option className="choose" disabled="true" value="">
                Choisir
              </option>
              <option value="---">---</option>
              <option value="1">1 Go</option>
              <option value="2">2 Go</option>
              <option value="4">4 Go</option>
              <option value="6">6 Go</option>
              <option value="8">8 Go</option>
            </select>
          </label>
        </form>
      </div>
      <div>
        <form className="phone-form">
          <label className="maker">
            Stockage
            <br />
            <select className="maker-select">
              <option value="---">---</option>
              <option value="1">1 Go</option>
              <option value="2">2 Go</option>
              <option value="4">4 Go</option>
              <option value="6">6 Go</option>
              <option value="8">8 Go</option>
            </select>
          </label>
        </form>
      </div>
      <div>
        <form className="phone-form">
          <label className="maker">
            Ecran
            <br />
            <select className="maker-select">
              <option value="---">---</option>
              <option value="1">1 Go</option>
              <option value="2">2 Go</option>
              <option value="4">4 Go</option>
              <option value="6">6 Go</option>
              <option value="8">8 Go</option>
            </select>
          </label>
        </form>
      </div>
      <div>
        <form className="phone-form">
          <label className="maker">
            Réseau
            <br />
            <select className="maker-select">
              <option value="---">---</option>
              <option value="1">1 Go</option>
              <option value="2">2 Go</option>
              <option value="4">4 Go</option>
              <option value="6">6 Go</option>
              <option value="8">8 Go</option>
            </select>
          </label>
        </form>
      </div>
      <div>
        <form className="phone-form">
          <label className="maker">
            Chargeur
            <br />
            <select className="maker-select">
              <option value="---">---</option>
              <option value="1">1 Go</option>
              <option value="2">2 Go</option>
              <option value="4">4 Go</option>
              <option value="6">6 Go</option>
              <option value="8">8 Go</option>
            </select>
          </label>
        </form>
      </div>
      <div>
        <form className="phone-form">
          <label className="maker">
            Etat
            <br />
            <select className="maker-select">
              <option value="---">---</option>
              <option value="1">1 Go</option>
              <option value="2">2 Go</option>
              <option value="4">4 Go</option>
              <option value="6">6 Go</option>
              <option value="8">8 Go</option>
            </select>
          </label>
        </form>
      </div>
    </>
  );
}
