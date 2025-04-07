import { Ticket } from '../dao/models/ticket.model.js';

// Obtener tickets de usuario
export const getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ purchaser: req.user.email });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener tickets" });
  }
};

// Crear ticket (usado por cart.controller)
export const createTicket = async (ticketData) => {
  try {
    return await Ticket.create(ticketData);
  } catch (error) {
    throw new Error("Error al crear ticket");
  }
};