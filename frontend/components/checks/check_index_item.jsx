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
  let moment = require("moment");
  let day = moment(new Date(dateCreated), "MM-DD-YYY").format("YYYY-MM-DD");
  let time = moment(new Date(dateCreated), "HH:mm").format("hh:mm a");
  let date = day + " " + time;
  debugger;
  if (checkId === path.split("/")[4]) {
    // checks to see if current path is same as this particular index item
    return (
      <div id={status} className="check-index-item">
        <div className="check">
          <li className="first-line">Check: {checkId}</li>
          <li>Date Created: {date}</li>
        </div>
        <div>
          <li className="first-line status">
            <li>Status:</li>
            <li className={status}>{status}</li>
          </li>
          {close}
        </div>
      </div>
    );
  } else {
    return (
      <Link to={`/tables/${tableId}/checks/${checkId}`}>
        <div id={status} className="check-index-item">
          <div className="check">
            <li className="first-line">Check: {checkId}</li>
            <li>Date Created: {date}</li>
          </div>
          <div>
            <li className="first-line status">
              <li>Status:</li>
              <li className={status}>{status}</li>
            </li>
            {close}
          </div>
        </div>
      </Link>
    );
  }
};
