// Middleware de autenticación
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

// Middleware de autenticación con JWT
export const auth = (req, res, next) => {
  try {
    // 1. Extraer token del header
    const token = req.headers.authorization?.split(' ')[1]; // Formato: "Bearer TOKEN"
    if (!token) return res.status(401).json({ error: "No autorizado" });

    // 2. Verificar token
    const decoded = jwt.verify(token, config.JWT_SECRET);
    
    // 3. Guardar datos del usuario en la request
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
};