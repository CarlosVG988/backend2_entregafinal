// Modelo de producto
const productSchema = new mongoose.Schema({
  name: String,            // Nombre del producto
  price: Number,           // Precio
  stock: Number            // Cantidad disponible
});

export const Product = mongoose.model('Product', productSchema);