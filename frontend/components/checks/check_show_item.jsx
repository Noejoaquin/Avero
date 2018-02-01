
{status === "open" ? (
  <li>
    <button
      className="void-item-button"
      onClick={() =>
        handleVoidItem(checkId, orderedItem.id)
      }
    >
      Void This Item
    </button>
  </li>
) : (
  <li id="empty" />
)}

import React from 'react';
import { Link } from 'react-router-dom';


export const CheckShowItem = ({ status, voided, checkId, orderedItem, name, price, handleVoidItem}) => {
  if (voided){
    return (
      <ul key={orderedItem.id} className="item-information">
        <li>{name}</li>
        <li>${price}</li>
        <li>Voided</li>
      </ul>
    )
  } else {
    return (
      <ul key={orderedItem.id} className="item-information">
        <li>{name}</li>
        <li>${price}</li>
          {status === "open" ? (
            <li>
              <button
                className="void-item-button"
                onClick={() =>
                  handleVoidItem(checkId, orderedItem.id)
                }
              >
                Void This Item
              </button>
            </li>
          ) : (
            <li id="empty" />
          )}
      </ul>
    )
  }
}
