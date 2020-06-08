import React from "react";
import List from "./List";
import NewGroceryItem from "./NewGroceryItem";

function GroceryList(props) {
  return (
    <div className="grocery-list">
      <h2>GroceryList</h2>
      <NewGroceryItem addGrocery={props.addGrocery} />
      <List handleClick={props.handleClickGrocery} items={props.groceryItems} />
    </div>
  );
}

export default GroceryList;
