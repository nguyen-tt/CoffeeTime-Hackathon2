const models = require("../models");

const browse = (req, res) => {
  models.smartphones
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.smartphones
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const {
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
  } = req.body;

  models.smartphones
    .insert(
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
    )
    .then(([rows]) => {
      res.status(201).json({ id: rows.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add,
};
