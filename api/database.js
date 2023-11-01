const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Gestion_Stock", "postgres", "1597530", {
  host: "localhost",
  dialect: "postgres",
});

const Users = require("./database/models/users")(sequelize);
const Client = require("./database/models/clientes")(sequelize);
const Product = require("./database/models/stock")(sequelize);
const Orders = require("./database/models/pedidos")(sequelize);

try {
  sequelize.authenticate({ logging: false });
  sequelize.sync({ force: false, logging: false }).then(() => {
    console.log("Connection successfully");
  });
} catch {
  console.error("Unable to connect", error);
}

module.exports = { Users, Product, Client, Orders };
