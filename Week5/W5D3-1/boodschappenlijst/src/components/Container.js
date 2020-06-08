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
      shoppingListItems: [{ id: 1, title: "Appels", amount: 1 }],
    };
  }

  handleClickGroceryItem = (newItem) => {
    this.setState((prevState) => {
      const newList = prevState.shoppingListItems.map((oldItem) =>
        oldItem.title === newItem.title
          ? { ...oldItem, amount: oldItem.amount + 1 }
          : oldItem
      );
      !newList.some((oldItem) => oldItem.title === newItem.title) &&
        newList.push({ id: newItem.id, title: newItem.title, amount: 1 });
      return { shoppingListItems: newList };
    });
  };

  emptyShoppingCart = () => {
    this.setState({ shoppingListItems: [] });
  };

  addGroceryItem = (newValue) => {
    const newGroceryItem = { id: 10, title: newValue };
    const currentGroceryList = this.state.groceryItems;
    currentGroceryList.push(newGroceryItem);
    this.setState({ GroceryItems: currentGroceryList });
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
