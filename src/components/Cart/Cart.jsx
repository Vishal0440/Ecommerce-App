import React, { useContext } from "react";
import "./Cart.scss";

import CartItem from "./CartItem/CartItem";

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);

  const handlePayment = () => {
    if (cartItems === null) {
      alert(`Your cart is empty`);
    } else {
      alert(`Your order is completed`);
    }
  };
  return (
    <div className="cart-panel">
      <div className="opacity-layer">
        <div className="cart-content">
          <div className="cart-header">
            <span className="heading">Shopping Cart</span>
            <span className="close-btn" onClick={() => setShowCart(false)}>
              <MdClose />
              <span className="text">Close</span>
            </span>
          </div>

          {!cartItems?.length && (
            <div className="empty-cart">
              <BsCartX />
              <span>No product in the cart</span>
              <button className="return-cta">RETURN TO SHOP</button>
            </div>
          )}
          {!!cartItems.length && (
            <>
              <CartItem />
              <div className="cart-footer">
                <div className="subtotal">
                  <span className="text">Subtotal:</span>
                  <span className="text total">₹{cartSubTotal}</span>
                </div>
                <div className="button">
                  <button onClick={handlePayment} className="checkout-cta">
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
