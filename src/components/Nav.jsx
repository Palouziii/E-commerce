import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/Ecommerce.png";

export default function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container fluid>
        <Navbar.Brand className="m-3 fs-4">
          <img src={logo} width="30" height="30" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="text-center fs-3">
            <Nav.Link className="mx-2" as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link className="mx-2" as={Link} to={"/cart"}>
              Cart
            </Nav.Link>
            <Nav.Link className="mx-2" as={Link} to={"/category"}>
              Category
            </Nav.Link>
            <Nav.Link className="mx-2" as={Link} to={"/checkout"}>
              Checkout
            </Nav.Link>
            <Nav.Link className="mx-2" as={Link} to={"/productDetail"}>
              ProductDetail
            </Nav.Link>
            <Nav.Link className="mx-2" as={Link} to={"/product"}>
              Product
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
