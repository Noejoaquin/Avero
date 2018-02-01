import React from "react";
import { Link } from "react-router-dom";
import ItemIndexContainer from "../items/items_index_container";

export const CheckShowHelper = ({
  status,
  toggleModal,
  handleCloseCheck,
  orderedItems,
  checkId,
  tableId,
  tip,
  tax
}) => {
  if (status === "open") {
    return (
      <div id={status} key={checkId} className="check-index-item-show">
        <ul className="basic-check-info-list">
          <li className="check-id">Check ID: {checkId}</li>
          <li className="check-table-id">Check Table ID: {tableId}</li>
          <li className="check-status ">
            Check Status:{" "}
            <span className="open">
              {status === "open" ? "OPEN" : "CLOSED"}
            </span>
          </li>
          <button
            className="close-check-button-show"
            onClick={() => handleCloseCheck(checkId)}
          >
            Close Check
          </button>
        </ul>
        <div className="item-container">
          <button className="add-item-button" onClick={toggleModal}>
            Add Item
          </button>
          <div className="item-modal">
            <div className="modal-list exit-button-container exit-button-container-items">
              <button className="modal-list exit-modal-button item-modal-button">
                X
              </button>
            </div>
            <h1 className="modal-list modal-header modal-list-header">
              Menu Items
            </h1>
            <ItemIndexContainer checkId={checkId} />
          </div>
        </div>
        <ul className="ordered-items-list">{orderedItems}</ul>
      </div>
    );
  } else {
    return (
      <div className="check-index-item-show">
        <ul className="basic-check-info-list">
          <li className="check-id">Check ID: {checkId}</li>
          <li className="check-table-id">Check Table ID: {tableId}</li>
          <li className="check-status ">
            Check Status:{" "}
            <span className="closed">
              {status === "open" ? "OPEN" : "CLOSED"}
            </span>
          </li>
        </ul>
        <ul className="ordered-items-list closed-check-items">
          {orderedItems}
        </ul>
        <ul className="closed-check-details">
          <li>Tip: {tip}</li>
          <li>Tax: {tax}</li>
        </ul>
      </div>
    );
  }
};
