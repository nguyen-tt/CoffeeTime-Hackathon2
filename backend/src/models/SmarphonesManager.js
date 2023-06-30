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
    operatingSystemVersion
  ) {
    return this.database.query(
      `INSERT INTO ${this.table} (brand, model, ram, storage, screen, network, loader, operatingSystem, operatingSystemVersion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
      ]
    );
  }
}

module.exports = SmartphonesManager;
