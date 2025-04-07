import { CartRepository } from '../dao/repositories/cart.repository.js';
import { ProductRepository } from '../dao/repositories/product.repository.js';

export class CartService {
  constructor() {
    this.cartRepository = new CartRepository();
    this.productRepository = new ProductRepository();
  }

  // Agregar producto al carrito
  async addToCart(cartId, productId) {
    const product = await this.productRepository.getById(productId);
    if (!product) throw new Error("Producto no existe");

    return await this.cartRepository.addProduct(cartId, productId);
  }

  // Finalizar compra
  async purchaseCart(cartId, userEmail) {
    const cart = await this.cartRepository.getById(cartId);
    let total = 0;
    const productsNotPurchased = [];

    for (const item of cart.products) {
      if (item.product.stock >= item.quantity) {
        // Restar stock
        await this.productRepository.updateStock(
          item.product._id, 
          item.product.stock - item.quantity
        );
        total += item.product.price * item.quantity;
      } else {
        productsNotPurchased.push(item.product._id);
      }
    }

    return { total, productsNotPurchased };
  }
}