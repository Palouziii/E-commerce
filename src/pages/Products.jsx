import NavBar from "../components/Nav";
import { products } from "../data/products.jsx";
import Product from "../components/Product.jsx";

export default function Products() {
  return (
    <>
      <NavBar />
      <div className="m-2">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
}
