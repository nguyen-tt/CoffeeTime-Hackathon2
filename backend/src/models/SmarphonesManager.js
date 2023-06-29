const AbstractManager = require("./AbstractManager");

class SmartphonesManager extends AbstractManager {
  constructor() {
    super({ table: "smartphones" });
  }

  insert(
    brand,
    model,
    ram,
    storage,
    screen,
    network,
    loader,
    operatingSystem,
    operatingSystemVersion,
    images
  ) {
    return this.database.query(
      `INSERT INTO ${this.table} (brand, model, ram, storage, screen, network, loader, operatingSystem, operatingSystemVersion, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        brand,
        model,
        ram,
        storage,
        screen,
        network,
        loader,
        operatingSystem,
        operatingSystemVersion,
        images,
      ]
    );
  }
}

module.exports = SmartphonesManager;
