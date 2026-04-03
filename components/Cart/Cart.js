import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Items</h2>
      {cart.map((item, index) => (
        <p key={index}>{item.title} - ${item.price}</p>
      ))}
    </div>
  );
}

export default Cart;