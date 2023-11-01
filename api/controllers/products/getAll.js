const db = require("../../database");

const cargarTodos = async (req, res, next) => {
  try {
    const product = await db.Product.findAll();
    if (product) {
      res.send(product);
    } else {
      res.status(402).msg({ mensaje: "No hay productos en la base de datos!" });
    }
    next();
  } catch (error) {
    console.log("Ha ocurrido un error ", error);
  }
};

module.exports = cargarTodos;
