const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const usersControllers = require("./controllers/usersControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.delete("/users/:id", usersControllers.destroy);

module.exports = router;
