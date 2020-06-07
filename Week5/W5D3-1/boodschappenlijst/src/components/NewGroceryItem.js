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
    console.log("hello");
    // e.preventdefault();
    // this.props.addGrocery(this.state.input);
    // this.setState({
    //   input: "",
    // });
  };

  render() {
    return (
      <form className="groceries-input">
        <input
          value={this.state.input}
          type="text"
          placeholder="new item"
          onChange={this.newItem}
        />
        <button
          className="button-primary"
          onClick={() => console.log("hellowww")}
        >
          add grocery
        </button>
      </form>
    );
  }
}

export default NewGroceryItem;
