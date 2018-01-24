import React from 'react';
import { connect } from 'react-redux';
import TableIndex from './table_index';
import { fetchTables, clear } from '../../actions/table_actions'


const mapStateToProps = (state, ownProps) => {
  let tables = state.entities.tables;
  return {
    tables
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTables: () => dispatch(fetchTables()),
    clearErrors: () => dispatch(clearErrors())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TableIndex)
