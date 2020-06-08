import React from "react";

function ListItem({ handleClick, item, readonly }) {
  return (
    <li onClick={handleClick && (() => handleClick(item))} id={item.id}>
      <h3>{item.title}</h3>
      <span>{readonly && `amount: ${item.amount}`}</span>
    </li>
  );
}

export default ListItem;
