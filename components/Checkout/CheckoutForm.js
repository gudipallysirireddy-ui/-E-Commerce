import { useState } from "react";

function CheckoutForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Checkout</button>
    </form>
  );
}

export default CheckoutForm;