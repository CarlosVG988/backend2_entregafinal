import express from 'express';
import { connectDB } from './config/db.js';
import { PORT } from './config/config.js';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import cartRoutes from './routes/cart.routes.js';
import ticketRoutes from './routes/ticket.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Inicializar Express
const app = express();

// Middlewares básicos
app.use(express.json()); // Para parsear JSON en las requests
app.use(cookieParser()); // Para manejar cookies
app.use(cors({           // Configuración CORS básica
  origin: 'http://localhost:3000', // Cambia esto en producción
  credentials: true
}));

// Conectar a MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/tickets', ticketRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡API de E-commerce funcionando! ');
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal en el servidor' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});