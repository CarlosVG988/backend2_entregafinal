export class UserDTO {
    constructor(user) {
      this.id = user._id;  // Solo incluimos el ID, no el password
      this.fullName = `${user.first_name} ${user.last_name}`;
      this.email = user.email;
      this.role = user.role;
      this.cartId = user.cart;  // Referencia al carrito
    }
  }