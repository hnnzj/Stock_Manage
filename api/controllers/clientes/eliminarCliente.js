const db = require("../../database");

const eliminarCliente = async (req, res, next) => {
  const { id } = req.query;
  try {
    const cliente = await db.Client.findOne({
      where: { id },
    });
    if (cliente) {
      await cliente.destroy();
      const data = await db.Client.findAll();
      res.send(data);
    } else {
      res.send("El cliente no existe");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = eliminarCliente;
