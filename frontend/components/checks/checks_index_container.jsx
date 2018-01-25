import React from 'react';
import { connect } from 'react-redux';
import CheckIndex from './check_index';
import { fetchChecks } from '../../actions/check_actions'


const mapStateToProps = (state, ownProps) => {
  let checks = state.entities.checks
  debugger
  return {
    checks
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchChecks: (tableId) => dispatch(fetchChecks(tableId)),
    clearErrors: () => dispatch(clearErrors())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CheckIndex)
