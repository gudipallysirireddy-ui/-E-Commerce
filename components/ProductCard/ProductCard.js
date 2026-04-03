import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "15px",
      width: "250px",
      display: "inline-block",
      textAlign: "center"
    }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;