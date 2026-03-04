import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id == id);
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} />
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;