const db = require("../../database");
const dayjs = require("dayjs");

const cargarPedidos = async (req, res, next) => {
  let { nombre, fecha } = req.body;
  if (!fecha) {
    fecha = dayjs(new Date()).format("YYYY-MM-DD");
  }
  console.log(fecha);
  const pedidos = await db.Orders.findAll();

  try {
    if (pedidos) {
      if (nombre && pedidos.length > 0) {
        let data = pedidos.filter((el) =>
          el.cliente.toUpperCase().includes(nombre.nombre.toUpperCase())
        );
        if (fecha) {
          data = data.filter((el) => el.createdDate === fecha.slice(0, 10));
          if (data.length <= 0) {
            res.json({ msg: "no", data: "No se encontraron pedidos!" });
          } else {
            res.json({ msg: "ok", data: data });
          }
        }
      } else {
        res.json({ msg: "ok", data: pedidos });
      }
    } else {
      res.status(402).msg({ mensaje: "No hay pedidos en la base de datos!" });
    }
    next();
  } catch (error) {
    console.log("Ha ocurrido un error ", error);
  }
};

module.exports = cargarPedidos;
