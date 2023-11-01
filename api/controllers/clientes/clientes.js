const db = require("../../database");

const cargarClientes = async (req, res, next) => {
  const cliente = await db.Client.findAll();

  try {
    if (cliente) {
      res.send(cliente);
    } else {
      res.status(402).msg({ mensaje: "No hay clientes en la base de datos!" });
    }
    next();
  } catch (error) {
    console.log("Ha ocurrido un error ", error);
  }
};

module.exports = cargarClientes;
