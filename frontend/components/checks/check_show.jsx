import React from 'react';
import { Route } from 'react-router-dom';

class CheckShow extends React.Component {
  constructor(props){
    super(props);
    this.check = this.props.check;
    this.fetchCheck = this.props.fetchCheck;
    this.tableId = this.props.tableId;
  }

  componentDidMount(){
    if (this.props.check){
      this.fetchCheck(this.props.check.id)
    }
  }

  handleCloseCheck(){
    this.closeCheck(id)
  }

  render(){
      return (
        <div id={status} className='check-index-item'>
          CHECK SHOW
        </div>
      )
  }
}


export default CheckShow;
