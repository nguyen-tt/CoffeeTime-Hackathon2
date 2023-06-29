const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const usersControllers = require("./controllers/usersControllers");
const loginControllers = require("./controllers/loginControllers");
const smartphonesControllers = require("./controllers/smartphonesControllers");

const validateLogin = require("./services/validateLogin");
const validateSignup = require("./services/validateSignup");
const hashPassword = require("./services/hashPassword");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.delete("/users/:id", usersControllers.destroy);

router.get("/smartphones", smartphonesControllers.browse);
router.get("/smartphones/:id", smartphonesControllers.read);
// router.post("/smartphones/:id", smartphonesControllers.add);
// router.put("/smartphones/:id", smartphonesControllers.edit);
router.delete("/smartphones/:id", smartphonesControllers.destroy);

router.post(
  "/login",
  validateLogin,
  loginControllers.login,
  loginControllers.verifyPassword
);

router.post("/users", validateSignup, hashPassword, usersControllers.create);

module.exports = router;
