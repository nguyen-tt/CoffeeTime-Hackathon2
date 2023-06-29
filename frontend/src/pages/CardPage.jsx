/* eslint-disable consistent-return */
import { useState } from "react";
import CardList from "../components/CardList";
import Filter from "../components/Filter";
import datas from "../datas/datas";

function CardPage() {
  const ram = ["4", "8", "16"];
  const screen = ["4", "5", "6"];
  const brands = ["APPLE", "SAMSUNG", "LG"];
  const categories = ["réseau 5G", "bon état", "reconditionné", "neuf"];

  const [checkedRam, setCheckedRam] = useState(
    new Array(ram.length).fill(false)
  );

  const [checkedScreen, setCheckedScreen] = useState(
    new Array(screen.length).fill(false)
  );

  const [checkedBrands, setCheckedBrands] = useState(
    new Array(brands.length).fill(false)
  );

  const [checkedCategories, setCheckedCategories] = useState(
    new Array(categories.length).fill(false)
  );

  let updateDatas = [...datas];

  const handleFilter = () => {
    // if none checked
    if (
      !checkedRam[0] &&
      !checkedRam[1] &&
      !checkedRam[2] &&
      !checkedScreen[0] &&
      !checkedScreen[1] &&
      !checkedScreen[2] &&
      !checkedBrands[0] &&
      !checkedBrands[1] &&
      !checkedBrands[2] &&
      !checkedCategories[0] &&
      !checkedCategories[1] &&
      !checkedCategories[2] &&
      !checkedCategories[3]
    ) {
      return;
    }

    // if all checked
    if (
      checkedRam[0] &&
      checkedRam[1] &&
      checkedRam[2] &&
      checkedScreen[0] &&
      checkedScreen[1] &&
      checkedScreen[2] &&
      checkedBrands[0] &&
      checkedBrands[1] &&
      checkedBrands[2] &&
      checkedCategories[0] &&
      checkedCategories[1] &&
      checkedCategories[2] &&
      checkedCategories[3]
    ) {
      return;
    }

    // if checkedRam checked only
    if (checkedRam[0] || checkedRam[1] || checkedRam[2]) {
      updateDatas = datas.filter((data) => {
        return (
          (data.ram === ram[0].valueOf() && checkedRam[0]) ||
          (data.ram === ram[1].valueOf() && checkedRam[1]) ||
          (data.ram === ram[2].valueOf() && checkedRam[2])
        );
      });
    }

    // if checkedScreen checked only
    if (checkedScreen[0] || checkedScreen[1] || checkedScreen[2]) {
      updateDatas = datas.filter((data) => {
        return (
          (data.screen === screen[0].valueOf() && checkedScreen[0]) ||
          (data.screen === screen[1].valueOf() && checkedScreen[1]) ||
          (data.screen === screen[2].valueOf() && checkedScreen[2])
        );
      });
    }

    // if checkedBrands checked only
    if (checkedBrands[0] || checkedBrands[1] || checkedBrands[2]) {
      updateDatas = datas.filter((data) => {
        return (
          (data.brand === brands[0].valueOf() && checkedBrands[0]) ||
          (data.brand === brands[1].valueOf() && checkedBrands[1]) ||
          (data.brand === brands[2].valueOf() && checkedBrands[2])
        );
      });
    }

    // if checkedCategories checked only
    if (
      checkedCategories[0] ||
      checkedCategories[1] ||
      checkedCategories[2] ||
      checkedCategories[3]
    ) {
      updateDatas = datas.filter((data) => {
        return (
          (data.network && checkedCategories[0]) ||
          (data.good && checkedCategories[1]) ||
          (data.reconditionned && checkedCategories[2]) ||
          (data.newMobile && checkedCategories[3])
        );
      });
    }

    // if checkedScreen and checkedRam checked
    if (
      (checkedRam[0] || checkedRam[1] || checkedRam[2]) &&
      (checkedScreen[0] || checkedScreen[1] || checkedScreen[2])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.ram === ram[0].valueOf() && checkedRam[0]) ||
            (data.ram === ram[1].valueOf() && checkedRam[1]) ||
            (data.ram === ram[2].valueOf() && checkedRam[2])) &&
          ((data.screen === screen[0].valueOf() && checkedScreen[0]) ||
            (data.screen === screen[1].valueOf() && checkedScreen[1]) ||
            (data.screen === screen[2].valueOf() && checkedScreen[2]))
        );
      });
    }

    // if checkedScreen and checkedBrands checked
    if (
      (checkedBrands[0] || checkedBrands[1] || checkedBrands[2]) &&
      (checkedScreen[0] || checkedScreen[1] || checkedScreen[2])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.brand === brands[0].valueOf() && checkedBrands[0]) ||
            (data.brand === brands[1].valueOf() && checkedBrands[1]) ||
            (data.brand === brands[2].valueOf() && checkedBrands[2])) &&
          ((data.screen === screen[0].valueOf() && checkedScreen[0]) ||
            (data.screen === screen[1].valueOf() && checkedScreen[1]) ||
            (data.screen === screen[2].valueOf() && checkedScreen[2]))
        );
      });
    }

    // if checkedram and checkedBrands checked
    if (
      (checkedBrands[0] || checkedBrands[1] || checkedBrands[2]) &&
      (checkedRam[0] || checkedRam[1] || checkedRam[2])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.brand === brands[0].valueOf() && checkedBrands[0]) ||
            (data.brand === brands[1].valueOf() && checkedBrands[1]) ||
            (data.brand === brands[2].valueOf() && checkedBrands[2])) &&
          ((data.ram === ram[0].valueOf() && checkedRam[0]) ||
            (data.ram === ram[1].valueOf() && checkedRam[1]) ||
            (data.ram === ram[2].valueOf() && checkedRam[2]))
        );
      });
    }

    // if checkedCategories and checkedRam checked
    if (
      (checkedRam[0] || checkedRam[1] || checkedRam[2]) &&
      (checkedCategories[0] ||
        checkedCategories[1] ||
        checkedCategories[2] ||
        checkedCategories[3])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.ram === ram[0].valueOf() && checkedRam[0]) ||
            (data.ram === ram[1].valueOf() && checkedRam[1]) ||
            (data.ram === ram[2].valueOf() && checkedRam[2])) &&
          ((data.network && checkedCategories[0]) ||
            (data.good && checkedCategories[1]) ||
            (data.reconditionned && checkedCategories[2]) ||
            (data.newMobile && checkedCategories[3]))
        );
      });
    }

    // if checkedCategories and checkedScreen checked
    if (
      (checkedCategories[0] ||
        checkedCategories[1] ||
        checkedCategories[2] ||
        checkedCategories[3]) &&
      (checkedScreen[0] || checkedScreen[1] || checkedScreen[2])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.network && checkedCategories[0]) ||
            (data.good && checkedCategories[1]) ||
            (data.reconditionned && checkedCategories[2]) ||
            (data.newMobile && checkedCategories[3])) &&
          ((data.screen === screen[0].valueOf() && checkedScreen[0]) ||
            (data.screen === screen[1].valueOf() && checkedScreen[1]) ||
            (data.screen === screen[2].valueOf() && checkedScreen[2]))
        );
      });
    }

    // if checkedCategories and checkedBrands checked
    if (
      (checkedBrands[0] || checkedBrands[1] || checkedBrands[2]) &&
      (checkedCategories[0] ||
        checkedCategories[1] ||
        checkedCategories[2] ||
        checkedCategories[3])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.brand === brands[0].valueOf() && checkedBrands[0]) ||
            (data.brand === brands[1].valueOf() && checkedBrands[1]) ||
            (data.brand === brands[2].valueOf() && checkedBrands[2])) &&
          ((data.network && checkedCategories[0]) ||
            (data.good && checkedCategories[1]) ||
            (data.reconditionned && checkedCategories[2]) ||
            (data.newMobile && checkedCategories[3]))
        );
      });
    }

    // if checkedRam, checkedBrands and checkedScreens checked
    if (
      (checkedBrands[0] || checkedBrands[1] || checkedBrands[2]) &&
      (checkedRam[0] || checkedRam[1] || checkedRam[2]) &&
      (checkedScreen[0] || checkedScreen[1] || checkedScreen[2])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.brand === brands[0].valueOf() && checkedBrands[0]) ||
            (data.brand === brands[1].valueOf() && checkedBrands[1]) ||
            (data.brand === brands[2].valueOf() && checkedBrands[2])) &&
          ((data.ram === ram[0].valueOf() && checkedRam[0]) ||
            (data.ram === ram[1].valueOf() && checkedRam[1]) ||
            (data.ram === ram[2].valueOf() && checkedRam[2])) &&
          ((data.screen === screen[0].valueOf() && checkedScreen[0]) ||
            (data.screen === screen[1].valueOf() && checkedScreen[1]) ||
            (data.screen === screen[2].valueOf() && checkedScreen[2]))
        );
      });
    }

    // if checkedRam, checkedBrands and checkedCategories checked
    if (
      (checkedBrands[0] || checkedBrands[1] || checkedBrands[2]) &&
      (checkedRam[0] || checkedRam[1] || checkedRam[2]) &&
      (checkedCategories[0] ||
        checkedCategories[1] ||
        checkedCategories[2] ||
        checkedCategories[3])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.brand === brands[0].valueOf() && checkedBrands[0]) ||
            (data.brand === brands[1].valueOf() && checkedBrands[1]) ||
            (data.brand === brands[2].valueOf() && checkedBrands[2])) &&
          ((data.ram === ram[0].valueOf() && checkedRam[0]) ||
            (data.ram === ram[1].valueOf() && checkedRam[1]) ||
            (data.ram === ram[2].valueOf() && checkedRam[2])) &&
          ((data.network && checkedCategories[0]) ||
            (data.good && checkedCategories[1]) ||
            (data.reconditionned && checkedCategories[2]) ||
            (data.newMobile && checkedCategories[3]))
        );
      });
    }

    // if checkedRam, checkedScreens and checkedCategories checked
    if (
      (checkedScreen[0] || checkedScreen[1] || checkedScreen[2]) &&
      (checkedRam[0] || checkedRam[1] || checkedRam[2]) &&
      (checkedCategories[0] ||
        checkedCategories[1] ||
        checkedCategories[2] ||
        checkedCategories[3])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.screen === screen[0].valueOf() && checkedScreen[0]) ||
            (data.screen === screen[1].valueOf() && checkedScreen[1]) ||
            (data.screen === screen[2].valueOf() && checkedScreen[2])) &&
          ((data.ram === ram[0].valueOf() && checkedRam[0]) ||
            (data.ram === ram[1].valueOf() && checkedRam[1]) ||
            (data.ram === ram[2].valueOf() && checkedRam[2])) &&
          ((data.network && checkedCategories[0]) ||
            (data.good && checkedCategories[1]) ||
            (data.reconditionned && checkedCategories[2]) ||
            (data.newMobile && checkedCategories[3]))
        );
      });
    }

    // if checkedBrands, checkedScreens and checkedCategories checked
    if (
      (checkedScreen[0] || checkedScreen[1] || checkedScreen[2]) &&
      (checkedBrands[0] || checkedBrands[1] || checkedBrands[2]) &&
      (checkedCategories[0] ||
        checkedCategories[1] ||
        checkedCategories[2] ||
        checkedCategories[3])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.screen === screen[0].valueOf() && checkedScreen[0]) ||
            (data.screen === screen[1].valueOf() && checkedScreen[1]) ||
            (data.screen === screen[2].valueOf() && checkedScreen[2])) &&
          ((data.brand === brands[0].valueOf() && checkedBrands[0]) ||
            (data.brand === brands[1].valueOf() && checkedBrands[1]) ||
            (data.brand === brands[2].valueOf() && checkedBrands[2])) &&
          ((data.network && checkedCategories[0]) ||
            (data.good && checkedCategories[1]) ||
            (data.reconditionned && checkedCategories[2]) ||
            (data.newMobile && checkedCategories[3]))
        );
      });
    }

    // if checkedBrands, checkedScreens, checkedRam and checkedCategories checked
    if (
      (checkedScreen[0] || checkedScreen[1] || checkedScreen[2]) &&
      (checkedBrands[0] || checkedBrands[1] || checkedBrands[2]) &&
      (checkedCategories[0] ||
        checkedCategories[1] ||
        checkedCategories[2] ||
        checkedCategories[3]) &&
      (checkedRam[0] || checkedRam[1] || checkedRam[2])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.screen === screen[0].valueOf() && checkedScreen[0]) ||
            (data.screen === screen[1].valueOf() && checkedScreen[1]) ||
            (data.screen === screen[2].valueOf() && checkedScreen[2])) &&
          ((data.brand === brands[0].valueOf() && checkedBrands[0]) ||
            (data.brand === brands[1].valueOf() && checkedBrands[1]) ||
            (data.brand === brands[2].valueOf() && checkedBrands[2])) &&
          ((data.network && checkedCategories[0]) ||
            (data.good && checkedCategories[1]) ||
            (data.reconditionned && checkedCategories[2]) ||
            (data.newMobile && checkedCategories[3])) &&
          ((data.ram === ram[0].valueOf() && checkedRam[0]) ||
            (data.ram === ram[1].valueOf() && checkedRam[1]) ||
            (data.ram === ram[2].valueOf() && checkedRam[2]))
        );
      });
    }

    return updateDatas;
  };

  const handleOnChangeScreenCheckbox = (position) => {
    const updatedCheckedScreen = checkedScreen.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedScreen(updatedCheckedScreen);
    handleFilter(updatedCheckedScreen);
  };

  const handleOnChangeRamCheckbox = (position) => {
    const updatedCheckedRam = checkedRam.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedRam(updatedCheckedRam);
    handleFilter(updatedCheckedRam);
  };

  const handleOnChangeBrandsCheckbox = (position) => {
    const updatedCheckedBrands = checkedBrands.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedBrands(updatedCheckedBrands);
    handleFilter(updatedCheckedBrands);
  };

  const handleOnChangeCategoriesCheckbox = (position) => {
    const updatedCheckedCategories = checkedCategories.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedCategories(updatedCheckedCategories);
    handleFilter(updatedCheckedCategories);
  };

  return (
    <div className="card-container">
      <Filter
        ram={ram}
        checkedRam={checkedRam}
        handleOnChangeRamCheckbox={handleOnChangeRamCheckbox}
        screen={screen}
        checkedScreen={checkedScreen}
        handleOnChangeScreenCheckbox={handleOnChangeScreenCheckbox}
        brands={brands}
        checkedBrands={checkedBrands}
        handleOnChangeBrandsCheckbox={handleOnChangeBrandsCheckbox}
        categories={categories}
        checkedCategories={checkedCategories}
        handleOnChangeCategoriesCheckbox={handleOnChangeCategoriesCheckbox}
      />
      <CardList updateDatas={updateDatas} />
    </div>
  );
}

export default CardPage;
