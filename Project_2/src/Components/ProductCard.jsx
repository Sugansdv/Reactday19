
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top p-3" height={200} />
        <div className="card-body">
          <h5>{product.title.slice(0, 20)}</h5>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`} className="btn btn-sm btn-outline-primary">View</Link>
          <button onClick={() => addToCart(product)} className="btn btn-sm btn-success ms-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
