const db = require("../../database");
const cargarTodos = require("./getAll");

const crearProducto = async (req, res, next) => {
  const {
    title,
    price,
    image,
    category,
    description,
    sale_price,
    autor,
    quantity,
  } = req.body;
  try {
    const product = await db.Product.findOne({ where: { title: title } });
    if (product) {
      const products = await db.Product.findAll();
      return res.json({ msg: "Producto ya creado!", data: products, ok: true });
    }
    await db.Product.create({
      title,
      price,
      category,
      image,
      sale_price,
      autor,
      description,
      quantity,
    });
    const products = await db.Product.findAll();
    return res.json({
      msg: "Producto creado correctamente!",
      data: products,
      ok: false,
    });
  } catch (error) {
    console.log("Ha ocurrido un error ", error);
  }
};

module.exports = crearProducto;
