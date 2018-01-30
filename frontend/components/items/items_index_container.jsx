import React from 'react';
import { connect } from 'react-redux';
import CheckIndex from './items_index';
import { fetchItems, addItemOnCheck } from '../../actions/check_actions'

const mapStateToProps = (state, ownProps) => {
  let checkId = ownProps.checkId;
  let items = state.entities.items;
  let errors = state.entites.errors;
  return {
    checkId,
    items,
    errors
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchItems: () => dispatch(fetchItems(checkId, itemId)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex)
