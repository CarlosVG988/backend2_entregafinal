import { ProductRepository } from '../dao/repositories/product.repository.js';

export class ProductService {
  constructor() {
    this.repository = new ProductRepository();
  }

  // Obtener todos los productos
  async getProducts() {
    return await this.repository.getAll();
  }

  // Crear producto (solo admin)
  async createProduct(productData) {
    return await this.repository.create(productData);
  }

  // Actualizar stock (usado al comprar)
  async updateStock(productId, newStock) {
    return await this.repository.updateStock(productId, newStock);
  }
}