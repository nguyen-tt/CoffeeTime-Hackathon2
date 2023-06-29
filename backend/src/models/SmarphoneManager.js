const AbstractManager = require("./AbstractManager");

class SmartphoneManager extends AbstractManager {
  constructor() {
    super({ table: "smartphones" });
  }

  //   insert() {
  //     return this.database.query(`insert into ${this.table} (title) values (?)`, [
  //       item.title,
  //     ]);
  //   }

  //   update() {
  //     return this.database.query(
  //       `update ${this.table} set title = ? where id = ?`,
  //       [item.title, item.id]
  //     );
  //   }
}

module.exports = SmartphoneManager;
