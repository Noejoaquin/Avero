import React from 'react';
import { Route, Link } from 'react-router-dom';
import CheckShowContainer from './check_show_container';


class ItemIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.fetchChecks()
  }


  render(){

  }
}


export default ItemIndex;
