import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Checkout from "./pages/Checkout.jsx";
import Cart from "./pages/Cart.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Product from "./pages/Products.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
