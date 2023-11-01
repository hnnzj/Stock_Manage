const express = require("express");
const crearPedido = require("../controllers/Pedidos/crearPedido");
const cargarPedidos = require("../controllers/Pedidos/allPedidos");

const api = express.Router();

api.post("/crearPedido", crearPedido);
api.post("/cargarPedidos", cargarPedidos);

module.exports = api;
