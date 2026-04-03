import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Items</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;