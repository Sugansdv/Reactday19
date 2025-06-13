import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axiosInstance";
import { useCart } from "../Context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );

  if (!product)
    return (
      <div className="text-center py-5 text-danger">Product not found</div>
    );

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-start">
        {/* Product Image */}
        <div className="col-md-5">
          <div className="border rounded p-3 bg-white shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ objectFit: "contain", maxHeight: "400px", width: "100%" }}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="col-md-7">
          <div className="p-3 bg-white rounded shadow-sm">
            <h3 className="mb-2">{product.title}</h3>
            <p className="text-muted small mb-1">Category: {product.category}</p>
            <h4 className="text-success mb-3">${product.price}</h4>
            <p className="mb-4">{product.description}</p>

            <button
              className="btn btn-primary btn-lg px-4"
              onClick={() => addToCart(product)}
            >
              <i className="bi bi-cart-plus me-2"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
