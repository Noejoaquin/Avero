import React from "react";
import { Link } from "react-router-dom";

export const ItemIndexItem = ({
  itemId,
  name,
  price,
  handleItemSelection,
  checkId
}) => {
  return (
    <ul
      onClick={() => handleItemSelection(checkId, itemId)}
      className="item-index-item"
    >
      <li className="item-name">{name}</li>
      <li className="item-price">Price: ${price}</li>
    </ul>
  );
};
