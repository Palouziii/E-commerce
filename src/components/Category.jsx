import { Dropdown } from "react-bootstrap";
import CategoryDeroulant from "./CategoryDeroulant";
import { products } from "../data/products";

export default function CategoryX() {
  return (
    <div className="d-flex justify-content-center">
      <Dropdown>
        <Dropdown.Toggle variant="outline-primary fs-1 m-3">
          Trier par produit
        </Dropdown.Toggle>

        <Dropdown.Menu className="fs-2">
          {products.map((product) => (
            <CategoryDeroulant key={product.id} product={product.category} />
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
