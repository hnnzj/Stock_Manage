const jwt = require("jsonwebtoken");

exports.isAuthenticated = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(403)
      .send({ message: "La peticion no tiene la cabecera de autenticación" });
  } else {
    const token = req.headers.authorization;
    const payload = jwt.decode(token);
    req.user = payload;
    next();
  }
};
