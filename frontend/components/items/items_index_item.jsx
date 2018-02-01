import React from "react";

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
