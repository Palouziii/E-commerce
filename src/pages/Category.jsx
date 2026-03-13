import NavBar from "../components/Nav";
import CategoryX from "../components/Category";
import { products } from "../data/products";


export default function Category() {
  return (
    <>
      <NavBar />
      <CategoryX product={products} />
    </>
  );
}