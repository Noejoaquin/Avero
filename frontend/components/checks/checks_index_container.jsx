import React from 'react';
import { connect } from 'react-redux';
import CheckIndex from './check_index';
import { fetchChecks, createCheck, closeCheck } from '../../actions/check_actions'


const mapStateToProps = (state, ownProps) => {
  let allChecks = Object.keys(state.entities.checks).map(id => state.entities.checks[id])
  let tableId = ownProps.location.pathname.split('/')[2]
  let checks = allChecks.filter( check => check.tableId === tableId)
  let errors = state.errors.checks
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


export default connect(mapStateToProps, mapDispatchToProps)(CheckIndex)
