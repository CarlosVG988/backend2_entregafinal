import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js';

const router = Router();

// POST /api/auth/register
router.post('/register', register); // Registrar nuevo usuario

// POST /api/auth/login
router.post('/login', login); // Iniciar sesión

export default router;