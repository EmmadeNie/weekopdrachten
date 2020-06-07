import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const { items, handleClick } = this.props;
    const listItems = items.map((item) => (
      <ListItem
        key={item.id}
        item={item}
        className="list-item"
        handleClick={handleClick}
      />
    ));

    return (
      <div>
        <ul className="list">{listItems}</ul>
      </div>
    );
  }
}

export default List;
