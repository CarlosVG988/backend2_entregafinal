// Modelo de ticket de compra
const ticketSchema = new mongoose.Schema({
  code: { type: String, unique: true }, // Código único (ej: "TICKET-123")
  purchase_datetime: { type: Date, default: Date.now }, // Fecha de compra
  amount: Number,                      // Total pagado
  purchaser: String                    // Email del comprador
});

export const Ticket = mongoose.model('Ticket', ticketSchema);