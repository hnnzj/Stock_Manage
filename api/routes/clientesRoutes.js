const express = require("express");
const cargarClientes = require("../controllers/clientes/clientes");
const crearClientes = require("../controllers/clientes/crearClientes");
const eliminarCliente = require("../controllers/clientes/eliminarCliente");

const api = express.Router();

api.get("/getAllClient", cargarClientes);
api.post("/crearClient", crearClientes);
api.delete("/deleteClient", eliminarCliente);

module.exports = api;
