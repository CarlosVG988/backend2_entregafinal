import { Product } from '../dao/models/product.model.js';

// Obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

// Crear producto (solo admin)
export const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = await Product.create({ name, price });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: "Error al crear producto" });
  }
};