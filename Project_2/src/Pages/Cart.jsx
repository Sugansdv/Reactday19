import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container py-4">
      <h3 className="mb-4">🛒 Your Cart</h3>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-6 mb-3">
                <div className="card d-flex flex-row align-items-center p-2 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="ms-3">
                    <h6 className="mb-1">{item.title.slice(0, 40)}...</h6>
                    <p className="mb-1 text-success fw-bold">${item.price}</p>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card mt-4 p-3 bg-light shadow-sm">
            <h5 className="mb-3">🧾 Cart Summary</h5>
            <p className="fs-5">
              Total: <span className="fw-bold text-success">${totalPrice.toFixed(2)}</span>
            </p>
            <button className="btn btn-primary w-25">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
