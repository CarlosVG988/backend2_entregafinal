// Controlador de autenticación
import { User } from '../dao/models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

// Registrar nuevo usuario
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Encriptar contraseña
    
    const newUser = await User.create({ 
      email, 
      password: hashedPassword 
    });
    
    res.status(201).json({ message: "Usuario registrado" });
  } catch (error) {
    res.status(400).json({ error: "Error al registrar" });
  }
};

// Iniciar sesión
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) return res.status(401).json({ error: "Credenciales inválidas" });
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: "Credenciales inválidas" });
    
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: '1h' });
    
    res.cookie('token', token, { httpOnly: true }).json({ message: "Sesión iniciada" });
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};