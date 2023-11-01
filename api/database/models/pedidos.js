const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Pedido = sequelize.define(
    "Pedidos",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      productos: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      cliente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "processing",
        allowNull: true,
      },
      createdDate: {
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Pedido;
};
