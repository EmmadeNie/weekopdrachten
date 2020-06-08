import React from "react";
import List from "./List";

function ShoppingCart(props) {
  console.log(props.shoppingListItems);
  return (
    <div className="shopping-cart">
      <h2>ShoppingCart</h2>
      <button onClick={props.emptyCart}>Empty Cart</button>
      <List readonly={true} items={props.shoppingListItems} />
    </div>
  );
}
export default ShoppingCart;
