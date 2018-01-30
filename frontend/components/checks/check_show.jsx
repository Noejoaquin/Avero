import React from 'react';
import { Route } from 'react-router-dom';
import ItemIndexContainer from '../items/items_index_container';

class CheckShow extends React.Component {
  constructor(props){
    super(props);
    this.check = this.props.check;
    this.fetchCheck = this.props.fetchCheck;
    this.tableId = this.props.tableId;
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount(){
    if (this.props.check && this.props.check.orderedItems === undefined){
      this.fetchCheck(this.props.check.id)
    }
  }

  handleCloseCheck(){
    this.closeCheck(id)
  }

  toggleModal(){
// ...contains...
    debugger
  }

  render(){
    if (this.props.check === undefined){
      return null
    } else if (this.props.check.closed === true ){
      return (
        <div id={status} key={this.props.check.id} className='check-index-item-show'>
          <li>
            {this.props.check.id}
          </li>
          <li>
            {this.props.check.tableId}
          </li>
          <li>
            {this.props.check.closed === false ? 'OPEN' : 'CLOSED'}
          </li>
            {this.props.check.orderedItems && this.props.check.orderedItems.length === 0 ? 'NO ITEMS ON THIS CHECK' : this.props.check.orderedItems}
          <li>
          </li>
        </div>
      )
    } else {
      return (
        <div id={status} key={this.props.check.id} className='check-index-item-show'>
          <li>
            {this.props.check.id}
          </li>
          <li>
            {this.props.check.tableId}
          </li>
          <li>
            {this.props.check.closed === false ? 'OPEN' : 'CLOSED'}
          </li>
            {this.props.check.orderedItems && this.props.check.orderedItems.length === 0 ? 'NO ITEMS ON THIS CHECK' : this.props.check.orderedItems}
          <li>
            <button onClick={this.toggleModal}>Add Item</button>
            <div className='item-modal' >
              <ItemIndexContainer checkId={this.props.check.id}/>
            </div>

          </li>
        </div>
      )
    }
  }
}


export default CheckShow;
