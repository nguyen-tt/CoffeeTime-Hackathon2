/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Checkbox from "./Checkbox";
import "../sass/_cardpage.scss";

function Filter(props) {
  const {
    ram,
    checkedRam,
    handleOnChangeRamCheckbox,
    screen,
    checkedScreen,
    handleOnChangeScreenCheckbox,
    brands,
    checkedBrands,
    handleOnChangeBrandsCheckbox,
    categories,
    checkedCategories,
    handleOnChangeCategoriesCheckbox,
  } = props;

  return (
    <div className="Filter">
      {" "}
      <h1 className="filter-title">Filtrer</h1>
      <div className="filter-container">
        <div className="filter-box">
          {/* Ram checkbox */}
          <h3>Par RAM :</h3>
          {ram.map((name, index) => {
            return (
              <ul>
                <li key={index}>
                  <div className="ram-list-item">
                    <div>
                      <Checkbox
                        value={name}
                        handleChange={() => handleOnChangeRamCheckbox(index)}
                        checked={checkedRam[index]}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          {/* Screen checkbox */}
          <h3>Par taille d'écran :</h3>
          {screen.map((name, index) => {
            return (
              <ul>
                <li key={index}>
                  <div className="screen-list-item">
                    <div>
                      <Checkbox
                        value={name}
                        handleChange={() => handleOnChangeScreenCheckbox(index)}
                        checked={checkedScreen[index]}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          {/* Brands checkbox */}
          <h3>Par marque :</h3>
          {brands.map((name, index) => {
            return (
              <ul>
                <li key={index}>
                  <div className="brands-list-item">
                    <div>
                      <Checkbox
                        value={name}
                        handleChange={() => handleOnChangeBrandsCheckbox(index)}
                        checked={checkedBrands[index]}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
        <div>
          {/* Categories checkbox */}
          <h3>Par spécificité :</h3>
          {categories.map((name, index) => {
            return (
              <ul>
                <li key={index}>
                  <div className="categories-list-item">
                    <div>
                      <Checkbox
                        value={name}
                        handleChange={() =>
                          handleOnChangeCategoriesCheckbox(index)
                        }
                        checked={checkedCategories[index]}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Filter;
