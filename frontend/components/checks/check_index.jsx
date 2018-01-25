import React from 'react';

class CheckIndex extends React.Component {
  constructor(props){
    super(props);
    this.fetchChecks= this.props.fetchChecks
    this.table = this.props.table
  }

  componentDidMount(){
    this.fetchChecks()
  }

  render(){
    return null
  }
}


export default CheckIndex;
