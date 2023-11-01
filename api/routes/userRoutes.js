const express = require("express");
const userRegister = require("../controllers/authentication/register");
const userLogin = require("../controllers/authentication/login");
const { isAuthenticated } = require("../middlewares/authenticated");
const jwt = require("jsonwebtoken");

const api = express.Router();

api.post("/register", userRegister);
api.post("/login", userLogin);

api.get("/", isAuthenticated, (req, res) => {
  try {
    if (req.user.rol == "ADMIN") {
      res.send("Redirigido al panel de administrador");
    } else {
      const user = jwt.verify(req.headers.authorization, "shhhhh");
      res.json({ msg: "Seccion usuarios", user_info: user });
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = api;
