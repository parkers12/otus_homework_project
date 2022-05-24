import React from "react";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
// import CartIcon from "../../assets/icons/cart.svg";
import "./cart.scss";

function Cart() {
  return (
    <div className="cart">
      <CartIcon />
      <span className="cart__counter">3</span>
    </div>
  );
}

export default Cart;
