import React from 'react';
import { connect } from 'react-redux';
import { NavBar } from './nav';

const mapStateToProps = (state, ownProps) => {
  let path = ownProps.location.pathname
  return { path }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
