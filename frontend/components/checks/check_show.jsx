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
    this.createCheckItemList = this.createCheckItemList.bind(this);
    this.handleCloseCheck = this.handleCloseCheck.bind(this);
    this.closeCheck = this.props.closeCheck;
  }

  componentDidMount(){
    this.fetchItems().then(() => this.fetchCheck(this.props.checkId))
  }

  componentWillReceiveProps(newProps){
    if (this.props.checkId !== newProps.checkId){
      this.fetchCheck(newProps.checkId)
    }
  }

  handleCloseCheck(id){
    this.closeCheck(id)
  }

  handleVoidItem(checkId, orderedItemId){
    this.voidItemOnCheck(checkId, orderedItemId).then(() => this.fetchCheck(this.props.checkId))
  }

  toggleModal(){
    let modal = document.getElementsByClassName('item-modal')[0]
    let button = document.getElementsByClassName('item-modal-button')[0]
    if (modal.classList.contains('showing')){
      modal.style.display = 'none'
    } else {
      window.addEventListener('click', function(e) {
        if (e.target == modal || e.target == button) {
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
        if (items[i].voided === true && status === 'closed') {continue}
        for (let j = 0; j < this.props.items.length; j++){
          if (items[i].itemId === this.props.items[j].id){
            orderedItems.push(
              <ul key={items[i].id} className='item-information'>
                <li>{this.props.items[j].name}</li>
                <li>${this.props.items[j].price}</li>
                {items[i].voided === false && status === 'open' ? <li><button className='void-item-button' onClick={() => this.handleVoidItem(this.props.checkId, items[i].id)}>Void Item</button></li> : <li id='empty'></li>}
                {items[i].voided === true && status === 'open' ? <li>Voided</li> : <li id='empty'></li>}
                {status === 'closed' && items[i].voided === true ? <li>Voided</li> : <li id='empty'></li>}
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
          return (
            <div id={status} key={this.props.check.id} className='check-index-item-show'>
              <ul className='basic-check-info-list'>
                <li className='check-id'>
                  Check ID: {this.props.check.id}
                </li>
                <li className='check-table-id'>
                  Check Table ID: {this.props.check.tableId}
                </li>
                <li className='check-status'>
                  Check Status: {this.props.check.closed === false ? 'OPEN' : 'CLOSED'}
                </li>
              </ul>
              <ul className='ordered-items-list closed-check-items'>
                {orderedItems}
              </ul>
              <ul className='closed-check-details'>
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
          let orderedItems = this.createCheckItemList(this.props.check.orderedItems, 'open')
          return (
            <div id={status} key={this.props.check.id} className='check-index-item-show'>
              <ul className='basic-check-info-list'>
                <li className='check-id'>
                  Check ID: {this.props.check.id}
                </li>
                <li className='check-table-id'>
                  Check Table ID: {this.props.check.tableId}
                </li>
                <li className='check-status'>
                  Check Status: {this.props.check.closed === false ? 'OPEN' : 'CLOSED'}
                </li>
                <button className='close-check-button-show' onClick={() => this.handleCloseCheck(this.props.checkId)}>
                  Close Check
                </button>
              </ul>
              <div className='item-container'>
                <button className='add-item-button' onClick={this.toggleModal}>Add Item</button>
                <div className='item-modal'>
                  <div className='modal-list exit-button-container exit-button-container-items'>
                    <button className='modal-list exit-modal-button item-modal-button'>X</button>
                  </div>
                  <h1 className='modal-list modal-header modal-list-header'>Menu Items</h1>
                  <ItemIndexContainer checkId={this.props.check.id}/>
                </div>
              </div>
              <ul className='ordered-items-list'>
                {orderedItems}
              </ul>
            </div>
          )
        }
      }
    }
}


export default CheckShow;
