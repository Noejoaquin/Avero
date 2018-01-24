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

    if (!(isEmpty(this.props.tables))){
      tables = this.props.tables.map((table) => {
        return <TableIndexItem key={table.id} number={table.number}/>
      })
    }
    return (
      <div className='tables-container'>
        <h1 className='tables-header'>Tables</h1>
        <ul className='tables-list'>{tables}</ul>
      </div>
    )
  }

}


export default TableIndex
