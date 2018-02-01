import React from "react";
import { connect } from "react-redux";
import CheckShow from "./check_show";
import {
  fetchChecks,
  createCheck,
  closeCheck,
  fetchCheck,
  voidItemOnCheck
} from "../../actions/check_actions";
import { fetchItems } from "../../actions/item_actions";

const mapStateToProps = (state, ownProps) => {
  let checkId = ownProps.location.pathname.split("/")[4];
  let check = state.entities.checks[checkId];
  let tableId = ownProps.location.pathname.split("/")[2];
  let errors = state.errors.checks;
  let items = state.entities.items;
  let tables = state.entities.tables;
  let table;
  let number;
  if (tables instanceof Array) {
    // will send the correct table and table number once tables are in state
    table = tables.filter(table => table.id === tableId);
    number = table[0].number;
  }
  return {
    check,
    checkId,
    items,
    number
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCheck: tableId => dispatch(fetchCheck(tableId)),
    createCheck: tableId => dispatch(createCheck(tableId)),
    fetchItems: () => dispatch(fetchItems()),
    closeCheck: id => dispatch(closeCheck(id)),
    voidItemOnCheck: (checkId, orderedItemId) =>
      dispatch(voidItemOnCheck(checkId, orderedItemId)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckShow);
