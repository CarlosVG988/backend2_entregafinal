import { Router } from 'express';
import { getProducts, createProduct } from '../controllers/product.controller.js';
import { auth } from '../middlewares/auth.middleware.js';
import { authorization } from '../middlewares/authorization.middleware.js';

const router = Router();

// GET /api/products
router.get('/', getProducts); // Todos pueden ver productos

// POST /api/products
router.post('/', auth, authorization('admin'), createProduct); // Solo admin

export default router;