import React from "react";

class NewGroceryItem extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  newItem = (event) => {
    this.setState({ input: event.target.value });
  };

  submitItem = () => {
    this.props.addGrocery(this.state.input);
  };

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          type="text"
          placeholder="new item"
          onChange={this.newItem}
        />
        <button className="button-primary" onClick={this.submitItem}>
          add grocery
        </button>
      </div>
    );
  }
}

export default NewGroceryItem;
