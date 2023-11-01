const bcrypt = require("bcrypt");
const db = require("../../database");

const userRegister = async (req, res, next) => {
  const { username, email, password, rol } = req.body;
  const salt = await bcrypt.genSalt(10);
  const user = await db.Users.findOne({ where: { email: email } });
  if (user) {
    return res.send("Correo existente, introduce un correo diferente.");
  }
  const usr = {
    username: username,
    email: email,
    password: await bcrypt.hash(password, salt),
    rol: rol,
  };
  db.Users.create(usr);
  res.send("Usuario creado correctamente!");
};

module.exports = userRegister;
