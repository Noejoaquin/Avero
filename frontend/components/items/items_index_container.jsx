import React from 'react';
import { connect } from 'react-redux';
import CheckIndex from './items_index';
import { fetchItems, addItemOnCheck } from '../../actions/check_actions'

const mapStateToProps = (state, ownProps) => {

  return {
    checks,
    tableId,
    errors
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchChecks: () => dispatch(fetchChecks()),
    createCheck: (tableId) => dispatch(createCheck(tableId)),
    closeCheck: (id) => dispatch(closeCheck(id)),
    clearErrors: () => dispatch(clearErrors())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemIndex)
