import { Cart } from '../dao/models/cart.model.js';
import { Product } from '../dao/models/product.model.js';

// Agregar producto al carrito
export const addToCart = async (req, res) => {
  try {
    const { cartId, productId } = req.params;
    
    const cart = await Cart.findById(cartId);
    cart.products.push({ product: productId, quantity: 1 });
    await cart.save();
    
    res.json(cart);
  } catch (error) {
    res.status(400).json({ error: "Error al agregar al carrito" });
  }
};

// Finalizar compra
export const purchaseCart = async (req, res) => {
  try {
    const { cartId } = req.params;
    const cart = await Cart.findById(cartId).populate('products.product');
    
    // Lógica simple de compra
    const ticket = {
      code: `TICKET-${Date.now()}`,
      amount: cart.products.reduce((total, item) => total + (item.product.price * item.quantity), 0),
      purchaser: req.user.email
    };
    
    // Vaciar carrito
    cart.products = [];
    await cart.save();
    
    res.json({ ticket });
  } catch (error) {
    res.status(400).json({ error: "Error al procesar compra" });
  }
};