import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ViewProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:8080/product/${id}`);
    setProduct(result.data);
  };

  // Handle logout action
  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // Clear admin session
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Product Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Product with ID: {product.id}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Name:</b> {product.name}
              </li>
              <li className="list-group-item">
                <b>Description:</b> {product.description}
              </li>
              <li className="list-group-item">
                <b>Price:</b> ₹{product.price}
              </li>
            </ul>
          </div>
          <Link className="btn btn-primary my-2" to="/viewproducts">
            Home
          </Link>
        </div>
      </div>

      {/* Logout Button */}
      <button
        className="btn btn-danger position-fixed bottom-0 end-0 m-3"
        style={{ zIndex: 1000 }} // Ensure the button is on top
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
