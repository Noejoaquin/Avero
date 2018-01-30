import React from 'react';
import { Route } from 'react-router-dom';
import ItemIndexContainer from '../items/items_index_container';

class CheckShow extends React.Component {
  constructor(props){
    super(props);
    this.check = this.props.check;
    this.fetchCheck = this.props.fetchCheck;
    this.fetchItems = this.props.fetchItems;
    this.tableId = this.props.tableId;
    this.toggleModal = this.toggleModal.bind(this);
    this.createCheckItemList = this.createCheckItemList.bind(this)
  }

  componentDidMount(){
    this.fetchItems().then(() => this.fetchCheck(this.props.checkId))
  }

  // componentWillUpdate(){
  //   debugger
  //   if (this.props.check && this.props.check.orderedItems === undefined){
  //     this.fetchCheck(this.props.checkId)
  //   }
  // }

  handleCloseCheck(){
    this.closeCheck(id)
  }

  toggleModal(){
    let modal = document.getElementsByClassName('item-modal')[0]
    if (modal.classList.contains('showing')){
      modal.style.display = 'none'
    } else {
      window.addEventListener('click', function(e) {
        if (e.target == modal) {
          modal.style.display = 'none'
        }
      })
      modal.style.display = 'block'
    }
  }

  createCheckItemList(items){
    let orderedItems;
    if (items === undefined){
      return undefined
    } else {
      orderedItems = []
      for (let i = 0; i < items.length; i++){
        for (let j = 0; j < this.props.items.length; j++){
          if (items[i].itemId === this.props.items[j].id){
            orderedItems.push(
              <ul>
                <li>{this.props.items[j].name}</li>
                <li>{this.props.items[j].price}</li>
              </ul>
            )
          }
        }
      }
    }
    return orderedItems
  }

  render(){
    if (this.props.check === undefined){
      return null
    } else {
        let orderedItems = this.createCheckItemList(this.props.check.orderedItems)
        if (this.props.check.closed === true ){
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
                {orderedItems}
              <li>
              </li>
            </div>
          )
        } else {
          // {this.props.check.orderedItems && this.props.check.orderedItems.length === 0 ? 'NO ITEMS ON THIS CHECK' : this.props.check.orderedItems}

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
              <li>
                <button onClick={this.toggleModal}>Add Item</button>
                <div className='item-modal' >
                  <ItemIndexContainer checkId={this.props.check.id}/>
                </div>
              </li>
              <li>
                {orderedItems}
              </li>
            </div>
          )
        }
      }
    }
}


export default CheckShow;
