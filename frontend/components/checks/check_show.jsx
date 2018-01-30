import React from 'react';
import { Route } from 'react-router-dom';
import ItemIndexContainer from '../items/items_index_container';

class CheckShow extends React.Component {
  constructor(props){
    super(props);
    this.check = this.props.check;
    this.fetchCheck = this.props.fetchCheck;
    this.fetchItems = this.props.fetchItems;
    this.voidItemOnCheck = this.props.voidItemOnCheck;
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

  handleVoidItem(checkId, orderedItemId){
    this.voidItemOnCheck(checkId, orderedItemId).then(() => this.fetchCheck(this.props.checkId))
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

  createCheckItemList(items, status){
    let orderedItems;
    if (items === undefined){
      return undefined
    } else {
      orderedItems = []
      for (let i = 0; i < items.length; i++){
        for (let j = 0; j < this.props.items.length; j++){
          if (items[i].itemId === this.props.items[j].id){
            orderedItems.push(
              <ul key={items[i].id}>
                <li>{this.props.items[j].name}</li>
                <li>${this.props.items[j].price}</li>
                {items[i].voided === false && status === 'open' ? <li onClick={() => this.handleVoidItem(this.props.checkId, items[i].id)}>Void Item</li> : <li></li>}
                {items[i].voided === true && status === 'open' ? <li onClick={() => this.handleVoidItem(this.props.checkId, items[i].id)}>Voided</li> : <li></li>}
                {status === 'closed' && items[i].voided === true ? <li>Voided</li> : <li></li>}
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
        if (this.props.check.closed === true ){
          let orderedItems = this.createCheckItemList(this.props.check.orderedItems, 'closed')
          debugger
          return (
            <div id={status} key={this.props.check.id} className='check-index-item-show'>
              <ul>
                <li>
                  {this.props.check.id}
                </li>
                <li>
                  {this.props.check.tableId}
                </li>
                <li>
                  {this.props.check.closed === false ? 'OPEN' : 'CLOSED'}
                </li>
              </ul>
              <ul>
                {orderedItems}
              </ul>
              <ul>
                <li>
                  Tip: {this.props.check.tip}
                </li>
                <li>
                  Tax: {this.props.check.tax}
                </li>
              </ul>
            </div>
          )
        } else {
          // {this.props.check.orderedItems && this.props.check.orderedItems.length === 0 ? 'NO ITEMS ON THIS CHECK' : this.props.check.orderedItems}

          let orderedItems = this.createCheckItemList(this.props.check.orderedItems, 'open')
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
