const express = require("express");
var bodyParser = require("body-parser");

const cors = require("cors");
const app = express();
const port = 5001;
const db = require("../api/database");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userRegister = require("./controllers/authentication/register");
const user_Routes = require("../api/routes/userRoutes");
const product_Routes = require("../api/routes/productRoutes");
const clientes_Routes = require("../api/routes/clientesRoutes");
const pedidos_Routes = require("../api/routes/pedidosRoutes");

app.use(bodyParser.json());
app.use(cors());
app.use("/api", user_Routes);
app.use("/api", product_Routes);
app.use("/api", clientes_Routes);
app.use("/api", pedidos_Routes);

app.listen(port, () => {
  console.log(`Now listening in port + ${port}`);
});
