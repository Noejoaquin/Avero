import React from 'react';

class CheckIndex extends React.Component {
  constructor(props){
    super(props);
    this.fetchChecks= this.props.fetchChecks
    // this.table = this.props.table
  }

  componentDidMount(){
    debugger
    this.fetchChecks()
  }

  render(){
    debugger
    return (
      <div>
        <h1 className='check-index-header'>CHECKS</h1>
      </div>
    )
  }
}


export default CheckIndex;
