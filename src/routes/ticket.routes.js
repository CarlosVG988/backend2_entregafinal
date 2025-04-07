import { Router } from 'express';
import { getUserTickets } from '../controllers/ticket.controller.js';
import { auth } from '../middlewares/auth.middleware.js';

const router = Router();

// GET /api/tickets/user
router.get('/user', auth, getUserTickets); // Ver tickets del usuario logueado

export default router;