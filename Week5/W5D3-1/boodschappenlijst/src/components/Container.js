import React from "react";
import ShoppingCart from "./ShoppingCart";
import GroceryList from "./GroceryList";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Pak melk" },
        { id: 3, title: "magere kwark" },
        { id: 4, title: "tofu" },
      ],
      shoppingListItems: [{ id: 1, title: "Appels" }],
    };
  }

  handleClickGroceryItem = (event) => {
    const clickedItem = event.target.id;
    const shoppingListItem = this.state.groceryItems.find(
      (item) => item.id == clickedItem
    );

    const currentShoppingList = this.state.shoppingListItems;
    currentShoppingList.push(shoppingListItem);
    this.setState({ shoppingListItems: currentShoppingList });
  };

  emptyShoppingCart = () => {
    this.setState({ shoppingListItems: [] });
  };

  addGroceryItem = (newValue) => {
    console.log(newValue);
  };

  render() {
    return (
      <div className="container">
        <GroceryList
          handleClickGrocery={this.handleClickGroceryItem}
          groceryItems={this.state.groceryItems}
          addGrocery={this.addGroceryItem}
        />
        <ShoppingCart
          shoppingListItems={this.state.shoppingListItems}
          emptyCart={this.emptyShoppingCart}
        />
      </div>
    );
  }
}

export default Container;
