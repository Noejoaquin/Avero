import React from 'react';
import { isEmpty } from 'lodash';


class TableIndex extends React.Component {
  constructor(props){
    super(props);
    debugger
    this.tables = this.props.tables;
    this.fetchTables = this.props.fetchTables;
  }

  componentWillMount(){
    this.fetchTables()
  }

  render(){
    let tables;
    if (!isEmpty(this.tables)){
      tables = this.tables;
    }
    debugger
    return (
      <div>
        <h1> RENDERED </h1>
        <ul>{ tables }</ul>
      </div>
    )
  }

}


export default TableIndex
