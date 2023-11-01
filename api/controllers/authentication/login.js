const db = require("../../database");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const userLogin = async (req, res, next) => {
  try {
    const user = await db.Users.findOne({
      where: { username: req.body.username },
    });
    if (user) {
      const password_valid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (password_valid) {
        (token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            username: user.username,
            rol: user.rol,
          },
          "shhhhh",
          { expiresIn: "2 days" }
        )),
          res
            .status(201)
            .setHeader("Authorization", "Bearer " + token)
            .json({ msg: "logeado correctamente", token: token });
        next();
      } else {
        res.status(400).json({ error: "Password Incorrecta!" });
      }
    } else {
      res.status(404).json({ error: "No existe el usuario!" });
    }
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = userLogin;
