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
      <div>
        <h1 className='tables-header'>Tables</h1>
        <div className='tables-container'>
          <ul className='tables-list'>{tables}</ul>
        </div>
      </div>
    )
  }

}


export default TableIndex
