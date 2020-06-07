import React from "react";
import List from "./List";

function ShoppingCart(props) {
  return (
    <div className="shopping-cart">
      <h2>ShoppingCart</h2>
      <button onClick={props.emptyCart}>Empty Cart</button>
      <List items={props.shoppingListItems} />
    </div>
  );
}
export default ShoppingCart;
