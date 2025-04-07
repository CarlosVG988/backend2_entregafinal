import { TicketRepository } from '../dao/repositories/ticket.repository.js';

export class TicketService {
  constructor() {
    this.repository = new TicketRepository();
  }

  // Crear ticket (después de comprar)
  async createTicket(amount, purchaser) {
    const ticketData = {
      code: this.repository.generateCode(),
      amount,
      purchaser
    };
    return await this.repository.create(ticketData);
  }

  // Obtener tickets de un usuario
  async getTicketsByEmail(email) {
    return await this.repository.findByPurchaser(email);
  }
}