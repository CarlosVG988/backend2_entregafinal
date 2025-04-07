import mongoose from 'mongoose';
import { MONGO_URI } from './config.js'; // Importamos la URI desde config.js

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1); // Detiene la app si hay error
  }
};