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
  const { smartphones } = req.body;

  models.item
    .insert(smartphones)
    .then(([result]) => {
      res.location(`/items/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// const edit = (req, res) => {
//   const item = req.body;

//   item.id = parseInt(req.params.id, 10);

//   models.item
//     .update(item)
//     .then(([result]) => {
//       if (result.affectedRows === 0) {
//         res.sendStatus(404);
//       } else {
//         res.sendStatus(204);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.sendStatus(500);
//     });
// };

const destroy = (req, res) => {
  models.smartphones
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
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
  //   edit,
  destroy,
};
