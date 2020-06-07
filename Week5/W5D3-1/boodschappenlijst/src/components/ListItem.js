import React from "react";

function ListItem({ handleClick, item }) {
  return (
    <li onClick={handleClick} id={item.id}>
      {item.title}
    </li>
  );
}

export default ListItem;
