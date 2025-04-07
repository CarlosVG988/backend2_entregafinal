import mongoose from 'mongoose';

// Modelo de usuario
const userSchema = new mongoose.Schema({
  first_name: String,       // Nombre
  last_name: String,        // Apellido
  email: { type: String, unique: true }, // Email único
  password: String,         // Contraseña (se hashea antes de guardar)
  role: { type: String, default: 'user' }, // Rol: user/admin
  cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' } // Carrito asociado
});

export const User = mongoose.model('User', userSchema);