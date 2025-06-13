import React from 'react';
import ReactDOM from 'react-dom';

const CartSidebar = ({ show, onClose, cartItems = [] }) => {
  if (!show) return null;

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return ReactDOM.createPortal(
    <div
      className='position-fixed top-0 end-0 vh-100 bg-light border-start shadow p-3'
      style={{ width: '350px', zIndex: 1050 }}
    >
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5 className='mb-0'>Your Cart</h5>
        <button className='btn-close' onClick={onClose}></button>
      </div>

      {cartItems.length === 0 ? (
        <p className='text-muted'>Your cart is empty.</p>
      ) : (
        <ul className='list-group mb-3'>
          {cartItems.map((item, index) => (
            <li
              key={index}
              className='list-group-item d-flex justify-content-between align-items-center'
            >
              <div>
                <h6 className='mb-1'>{item.name}</h6>
                <small className='text-muted'>Qty: {item.quantity}</small>
              </div>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      )}

      <div className='border-top pt-3'>
        <h6>Total: ₹{total.toFixed(2)}</h6>
        <button className='btn btn-primary w-100 mt-2'>Checkout</button>
      </div>
    </div>,
    document.body
  );
};

export default CartSidebar;
