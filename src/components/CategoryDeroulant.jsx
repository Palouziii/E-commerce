import { Dropdown } from "react-bootstrap";

export default function CategoryDeroulant({ product }) {
  return (
    <Dropdown.Item href="#/action-1" className="p-3">
      {product}
    </Dropdown.Item>
  );
}
