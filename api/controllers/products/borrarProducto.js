const db = require("../../database");

const borrarProducto = async (req, res, next) => {
  const { id } = req.body;

  try {
    const product = await db.Product.findOne({ where: { id } });
    if (product) {
      await product.destroy();
      res.send("Producto eliminado correctamente!");
    } else {
      res.send("Producto no encontrado!");
    }
  } catch (error) {
    console.log("Producto no encontrado!", error);
  }
};

module.exports = borrarProducto;
