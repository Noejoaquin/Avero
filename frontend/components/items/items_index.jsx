import React from 'react';
import { Route, Link } from 'react-router-dom';
import { ItemIndexItem } from './items_index_item';


class ItemIndex extends React.Component {
  constructor(props){
    super(props);
    this.fetchItems = this.props.fetchItems;
    this.addItemOnCheck = this.props.addItemOnCheck;
    this.fetchCheck = this.props.fetchCheck;
    this.handleItemSelection = this.handleItemSelection.bind(this);
  }

  handleItemSelection(checkId, itemId){
    this.addItemOnCheck(checkId, itemId).then(() => this.fetchCheck(this.props.checkId))
  }

  render(){
    let items;
    if (this.props.items.toString() === "[object Object]") {
      return null
    } else {
      items = this.props.items.map ((item, i) => {
        return <ItemIndexItem key={i} handleItemSelection={this.handleItemSelection} checkId={this.props.checkId} itemId={item.id} name={item.name} price={item.price} />
      })
    }
    return (
        <ul className='modal-list item-list'>
          {items}
        </ul>
    )
  }
}


export default ItemIndex;
