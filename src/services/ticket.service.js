import TicketRepository from "../dao/repositories/ticket.repository.js";

const ticketRepository = new TicketRepository();

export const generateTicket = async (userId, cartItems) => {
    return await ticketRepository.create({ userId, cartItems });
};
