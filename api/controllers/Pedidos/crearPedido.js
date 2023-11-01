const { Op } = require("sequelize");
const db = require("../../database");

const crearPedido = async (req, res, next) => {
  let productos = [];
  let cliente = "";

  req.body.map((el) => {
    if (typeof el === "object") {
      productos.push(el);
    } else {
      cliente = el;
    }
  });
  cliente = await db.Client.findOne({ where: { id: cliente } });

  try {
    if (productos.length >= 1) {
      await db.Orders.create({
        productos,
        cliente: cliente.nombre + " " + cliente.apellido,
      });
      const data = await db.Orders.findAll();
      return res.json({
        msg: "Pedido creado correctamente!",
        data: data,
        ok: false,
      });
    } else {
      console.log("No hay datos");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = crearPedido;
