import React from 'react';
import { isEmpty } from 'lodash';
import {TableIndexItem} from './table_index_item';

class TableIndex extends React.Component {
  constructor(props){
    super(props);
    this.fetchTables = this.props.fetchTables;
  }

  componentDidMount(){
    this.fetchTables()
  }

  render(){
    let tables;
    // debugger
    // if (this.props.tables === undefined ){
    //   return null
    // }
    if (!(isEmpty(this.props.tables))){
      debugger
      tables = this.props.tables.map((table) => {
        return <TableIndexItem key={table.id} number={table.number}/>
      })
    }
    return (
      <div>
        <h1> RENDERED </h1>
        <ul>{tables}</ul>
      </div>
    )
  }

}


export default TableIndex
