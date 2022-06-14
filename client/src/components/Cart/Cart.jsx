import React from "react";
// import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import "./cart.scss";

import cart from "../../assets/images/icons/cart.svg";

function Cart() {
  return (
    <div className="cart">
      <img src={cart} />
      <span className="cart__counter">3</span>
    </div>
  );
}

export default Cart;
