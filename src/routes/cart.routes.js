import { Router } from 'express';
import { addToCart, purchaseCart } from '../controllers/cart.controller.js';
import { auth } from '../middlewares/auth.middleware.js';

const router = Router();

// POST /api/carts/:cid/add/:pid
router.post('/:cid/add/:pid', auth, addToCart); // Usuario logueado agrega producto

// POST /api/carts/:cid/purchase
router.post('/:cid/purchase', auth, purchaseCart); // Finalizar compra

export default router;