import React from 'react';
import { Route, Link } from 'react-router-dom';
import { ItemIndexItem } from './items_index_item';


class ItemIndex extends React.Component {
  constructor(props){
    super(props);
    this.fetchItems = this.props.fetchItems;
  }

  componentDidMount(){
    this.fetchItems()
  }


  render(){
    // debugger
    let items;
    if (this.props.items.toString() === "[object Object]") {
      return null
    } else {
      // debugger
      items = this.props.items.map (item => {
        return <ItemIndexItem itemId={item.id} name={item.name} price={item.price} />
      })
    }
    return (
        <ul className='item-list'>
          {items}
        </ul>
    )
  }
}


export default ItemIndex;
