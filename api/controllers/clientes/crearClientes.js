const { Op } = require("sequelize");
const db = require("../../database");

const crearClientes = async (req, res, next) => {
  const { nombre, apellido, telefono, email, direccion, ciudad, pais, estado } =
    req.body;

  try {
    const cliente = await db.Client.findOne({
      where: {
        [Op.or]: [
          {
            nombre,
          },
          { apellido },
          { email },
          { telefono },
        ],
      },
    });
    if (cliente) {
      res.send("El cliente ya existe!");
    } else {
      await db.Client.create({
        nombre,
        apellido,
        telefono,
        email,
        direccion,
        ciudad,
        pais,
        estado,
      });
      const data = await db.Client.findAll();
      res.send(data);
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = crearClientes;
