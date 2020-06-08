import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    const { items, handleClick, readonly } = this.props;
    const listItems = items.map((item) => (
      <ListItem
        key={item.id}
        item={item}
        className="list-item"
        handleClick={handleClick}
        readonly={readonly}
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
