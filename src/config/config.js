import dotenv from 'dotenv';

// 1. Carga las variables del archivo .env
dotenv.config();

// 2. Exporta las variables importantes
export const PORT = process.env.PORT || 3000; // Usa el puerto de .env o 3000
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mi_app'; // DB local por defecto