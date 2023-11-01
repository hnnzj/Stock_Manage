const express = require("express");
const crearProducto = require("../controllers/products/crearProducto");
const getAll = require("../controllers/products/getAll");
const borrarProducto = require("../controllers/products/borrarProducto");
const api = express.Router();

api.post("/crear", crearProducto);
api.get("/all", getAll);
api.delete("/delete", borrarProducto);

module.exports = api;
