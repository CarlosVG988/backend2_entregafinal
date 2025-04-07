import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';

export class UserRepository {
  // Buscar usuario por email
  async findByEmail(email) {
    return await User.findOne({ email });
  }

  // Crear usuario (con password hasheado)
  async create(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return await User.create({ ...userData, password: hashedPassword });
  }

  // Obtener carrito del usuario
  async getCart(userId) {
    const user = await User.findById(userId).populate('cart');
    return user.cart;
  }
}