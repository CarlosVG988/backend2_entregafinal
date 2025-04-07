import { Ticket } from '../models/ticket.model.js';

export class TicketRepository {
  // Crear nuevo ticket
  async create(ticketData) {
    return await Ticket.create(ticketData);
  }

  // Buscar tickets por comprador (email)
  async findByPurchaser(email) {
    return await Ticket.find({ purchaser: email });
  }

  // Generar código único para ticket
  generateCode() {
    return `TICKET-${Date.now().toString(36).toUpperCase()}`;
  }
}