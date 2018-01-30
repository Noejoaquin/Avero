import React from 'react';
import { Route, Link } from 'react-router-dom';
import ItemIndexItem from './items_idex_item';


class ItemIndex extends React.Component {
  constructor(props){
    super(props);
    this.fetchItems = this.props.fetchItems;
  }

  componentDidMount(){
    this.fetchItems()
  }


  render(){
    let items = this.props.items.map (item => {
      return <ItemIndexItem itemId={item.id} name={item.name} price={item.price} />
    })
    return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}


export default ItemIndex;
