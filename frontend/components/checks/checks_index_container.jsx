import React from "react";
import { connect } from "react-redux";
import CheckIndex from "./check_index";
import {
  fetchChecks,
  createCheck,
  closeCheck,
  clearErrors
} from "../../actions/check_actions";
import { fetchTables } from "../../actions/table_actions";

const getChecks = (timesSorted, checksUnordered, times) => {
  let checks = [];
  for (let i = 0; i < timesSorted.length; i++) {
    for (let j = 0; j < timesSorted.length; j++) {
      if (times[i] === checksUnordered[j].dateCreated) {
        checks.push(checksUnordered[j]);
      }
    }
  }
  return checks;
};

const mapStateToProps = (state, ownProps) => {
  let errors = state.errors.checks;
  let path = ownProps.location.pathname;
  let tableId = ownProps.location.pathname.split("/")[2];
  let allChecks = Object.keys(state.entities.checks).map(
    id => state.entities.checks[id]
  );
  let checksUnordered = allChecks.filter(check => check.tableId === tableId);
  let times = checksUnordered.map(check => check.dateCreated);
  let timesSorted = times.sort().reverse();
  let checks = getChecks(timesSorted, checksUnordered, times); // will return checks in order of time created
  let tables = state.entities.tables;
  let table;
  let number;
  if (tables instanceof Array) {
    table = tables.filter(table => table.id === tableId);
    number = table[0].number;
  }
  return {
    checks,
    tableId,
    number,
    path,
    errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchChecks: () => dispatch(fetchChecks()),
    createCheck: tableId => dispatch(createCheck(tableId)),
    fetchTables: () => dispatch(fetchTables()),
    closeCheck: id => dispatch(closeCheck(id)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckIndex);
