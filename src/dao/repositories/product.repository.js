import { Product } from '../models/product.model.js';

export class ProductRepository {
  // Obtener todos los productos
  async getAll() {
    return await Product.find();
  }

  // Crear nuevo producto
  async create(productData) {
    return await Product.create(productData);
  }

  // Actualizar stock de un producto
  async updateStock(productId, newStock) {
    return await Product.findByIdAndUpdate(
      productId, 
      { stock: newStock }, 
      { new: true }
    );
  }

  // Eliminar producto
  async delete(productId) {
    return await Product.findByIdAndDelete(productId);
  }
}