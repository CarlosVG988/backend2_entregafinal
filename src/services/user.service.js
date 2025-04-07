import { UserRepository } from '../dao/repositories/user.repository.js';
import bcrypt from 'bcrypt';

export class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  // Registrar usuario (hashea password)
  async register(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    return await this.repository.create({ ...userData, password: hashedPassword });
  }

  // Buscar por email (para login)
  async findByEmail(email) {
    return await this.repository.findByEmail(email);
  }

  // Obtener carrito del usuario
  async getCart(userId) {
    return await this.repository.getCart(userId);
  }
}