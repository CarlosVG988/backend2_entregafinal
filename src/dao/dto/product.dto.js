export class ProductDTO {
    constructor(product) {
      this.id = product._id;
      this.name = product.name;
      this.price = product.price;
      // No incluimos 'stock' si no es necesario mostrarlo
    }
  }