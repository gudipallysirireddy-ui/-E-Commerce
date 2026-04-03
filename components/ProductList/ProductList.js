import ProductCard from "../ProductCard/ProductCard";

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;