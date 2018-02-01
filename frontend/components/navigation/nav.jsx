import React from "react";
import { Link } from "react-router-dom";

export const NavBar = ({ path, ownProps }) => {
  const returnToTable = () => {
    ownProps.history.push("/");
  };
  let linkToTables =
    path === "/" ? (
      <li />
    ) : (
      <button onClick={() => returnToTable()} className="nav-button">
        Back To Tables
      </button>
    );
  return (
    <div className="nav-container">
      <h1 className="nav-header">LARAVAL</h1>
      {linkToTables}
    </div>
  );
};
