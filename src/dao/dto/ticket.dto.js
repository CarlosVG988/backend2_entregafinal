export class TicketDTO {
    constructor(ticket) {
      this.code = ticket.code;  // Código único
      this.amount = ticket.amount;  // Total de la compra
      this.date = ticket.purchase_datetime;  // Fecha formateada
      // No incluimos 'purchaser' (email) por privacidad
    }
  }