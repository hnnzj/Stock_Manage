const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Cliente = sequelize.define(
    "Cliente",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pais: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rol: {
        type: DataTypes.ENUM("ADMIN", "USUARIO", "CLIENTE"),
        defaultValue: "CLIENTE",
      },
    },
    {
      timestamps: false,
    }
  );
  return Cliente;
};
