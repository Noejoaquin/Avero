import React from "react";
import { Link } from "react-router-dom";

export const CheckIndexItem = ({
  checkId,
  tableId,
  path,
  status,
  close,
  dateCreated
}) => {
  let date = new Date(dateCreated).toString().split("-")[0];
  if (checkId === path.split("/")[4]) {
    // checks to see if current path is same as this particular index item
    return (
      <div id={status} className="check-index-item">
        <div className="check">
          <li className="first-line">Check ID: {checkId}</li>
          <li>Date Created: {date}</li>
        </div>
        <div>
          <li className="first-line">Status: {status}</li>
          {close}
        </div>
      </div>
    );
  } else {
    return (
      <Link to={`/tables/${tableId}/checks/${checkId}`}>
        <div id={status} className="check-index-item">
          <div className="check">
            <li className="first-line">Check ID: {checkId}</li>
            <li>Date Created: {date}</li>
          </div>
          <div>
            <li className="first-line">Status: {status}</li>
            {close}
          </div>
        </div>
      </Link>
    );
  }
};
