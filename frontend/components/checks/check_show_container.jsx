import React from 'react';
import { connect } from 'react-redux';
import CheckShow from './check_show';
import { fetchChecks, createCheck, closeCheck, fetchCheck } from '../../actions/check_actions'


const mapStateToProps = (state, ownProps) => {
  let checkId = ownProps.location.pathname.split('/')[4]
  let check = state.entities.checks[checkId]
  let tableId = ownProps.location.pathname.split('/')[2]
  let errors = state.errors.checks
  // debugger
  return {
    check,
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCheck: (tableId) => dispatch(fetchCheck(tableId)),
    createCheck: (tableId) => dispatch(createCheck(tableId)),
    closeCheck: (id) => dispatch(closeCheck(id)),
    clearErrors: () => dispatch(clearErrors())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckShow)
