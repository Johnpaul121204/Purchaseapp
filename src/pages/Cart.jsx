import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <img src={item.image} width="100" />
          <h4>{item.title}</h4>
          <p>Qty: {item.qty}</p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;