import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList/ProductList";

function Home() {
  const products = useProducts();

  return (
    <div>
      <h2>Products</h2>
      <ProductList products={products} />
    </div>
  );
}

export default Home;