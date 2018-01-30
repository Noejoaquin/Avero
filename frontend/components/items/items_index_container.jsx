import React from 'react';
import { connect } from 'react-redux';
import ItemIndex from './items_index';
import { fetchItems } from '../../actions/item_actions';
import { addItemOnCheck, voidItemOnCheck, fetchCheck } from '../../actions/check_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  let checkId = ownProps.checkId;
  let items = state.entities.items;
  let errors = state.errors;
  return {
    checkId,
    items,
    errors
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    fetchCheck: (id) => dispatch(fetchCheck(id)),
    addItemOnCheck: (checkId, itemId) => dispatch(addItemOnCheck(checkId, itemId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex)
