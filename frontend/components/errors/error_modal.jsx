import React from "react";

export const ErrorModal = ({ description }) => {
  return (
    <div className="error-modal modal">
      <div className="modal-list exit-button-container exit-button-container-errors">
        <button className="modal-list exit-modal-button error-modal-button">
          X
        </button>
      </div>
      <h1 className="modal-list modal-header error-modal-header">Error!</h1>
      <ul className="error-list modal-list">
        <li className="error-list-item">{description}</li>
        <li className="error-list-item">
          Please Close the Currently Open Check If You Wish To Open A New One
        </li>
      </ul>
    </div>
  );
};
