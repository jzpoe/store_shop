import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = ({ addProducts }) => {
  return (
    <div className="container-navbar">
      <div className="navbar-item">
        <Link to="/" className="navbar-link">
          <FaHome className="navbar-icon" /> Tienda
        </Link>
      </div>
      <div className="navbar-item">
        <Link
          to="/carShop"
          className={`navbar-link ${addProducts.length ? "has-products" : ""}`}
        >
          <FaShoppingCart className="navbar-icon" /> Productos
        </Link>
      </div>
    </div>
  );
};