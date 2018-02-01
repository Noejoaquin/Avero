import React from "react";
import { Route } from "react-router-dom";
import ItemIndexContainer from "../items/items_index_container";
import { CheckShowItem } from "./check_show_item";

class CheckShow extends React.Component {
  constructor(props) {
    super(props);
    this.check = this.props.check;
    this.fetchCheck = this.props.fetchCheck;
    this.fetchItems = this.props.fetchItems;
    this.voidItemOnCheck = this.props.voidItemOnCheck;
    this.handleVoidItem = this.handleVoidItem.bind(this);
    this.tableId = this.props.tableId;
    this.toggleModal = this.toggleModal.bind(this);
    this.createCheckItemList = this.createCheckItemList.bind(this);
    this.handleCloseCheck = this.handleCloseCheck.bind(this);
    this.closeCheck = this.props.closeCheck;
    this.orderItems = this.orderItems.bind(this);
  }

  componentDidMount() {
    this.fetchItems().then(() => this.fetchCheck(this.props.checkId));
  }

  componentWillReceiveProps(newProps) {
    if (this.props.checkId !== newProps.checkId) {
      this.fetchCheck(newProps.checkId);
    }
  }

  handleCloseCheck(id) {
    this.closeCheck(id);
  }

  handleVoidItem(checkId, orderedItemId) {
    this.voidItemOnCheck(checkId, orderedItemId).then(() =>
      this.fetchCheck(this.props.checkId)
    );
  }

  toggleModal() {
    let modal = document.getElementsByClassName("item-modal")[0];
    let button = document.getElementsByClassName("item-modal-button")[0];
    if (modal.classList.contains("showing")) {
      modal.style.display = "none";
    } else {
      window.addEventListener("click", function(e) {
        if (e.target == modal || e.target == button) {
          modal.style.display = "none";
        }
      });
      modal.style.display = "block";
    }
  }

  orderItems(items) {
    // returns items sorted according to date created
    if (items === undefined) {
      return null;
    }
    let times = items.map(item => item.dateCreated);
    let timesSorted = times.sort().reverse();
    let sortedItems = [];
    for (let i = 0; i < timesSorted.length; i++) {
      for (let j = 0; j < timesSorted.length; j++) {
        if (times[i] === items[j].dateCreated) {
          sortedItems.push(items[j]);
        }
      }
    }
    return sortedItems;
  }

  createCheckItemList(items, status) {
    let orderedItems;
    let unvoidedItems;
    let voidItems;
    let that = this;
    if (items === undefined) {
      return undefined;
    } else {
      orderedItems = this.orderItems(items);
      unvoidedItems = [];
      voidItems = [];
      for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < this.props.items.length; j++) {
          if (orderedItems[i].itemId === this.props.items[j].id) {
            if (orderedItems[i].voided === true) {
              voidItems.push(
                <CheckShowItem
                  voided={true}
                  checkId={this.props.checkId}
                  orderedItem={orderedItems[i]}
                  name={that.props.items[j].name}
                  price={that.props.items[j].price}
                />
              );
            } else {
              unvoidedItems.push(
                <CheckShowItem
                  voided={false}
                  status={status}
                  handleVoidItem={this.handleVoidItem}
                  checkId={this.props.checkId}
                  orderedItem={orderedItems[i]}
                  name={that.props.items[j].name}
                  price={that.props.items[j].price}
                />
              );
            }
          }
        }
      }
    }
    unvoidedItems.push(voidItems);
    return unvoidedItems;
  }

  render() {
    if (this.props.check === undefined) {
      return null;
    } else {
      if (this.props.check.closed === true) {
        let orderedItems = this.createCheckItemList(
          this.props.check.orderedItems,
          "closed"
        );
        return (
          <div
            id={status}
            key={this.props.check.id}
            className="check-index-item-show"
          >
            <ul className="basic-check-info-list">
              <li className="check-id">Check ID: {this.props.check.id}</li>
              <li className="check-table-id">
                Check Table ID: {this.props.check.tableId}
              </li>
              <li className="check-status">
                Check Status:{" "}
                {this.props.check.closed === false ? "OPEN" : "CLOSED"}
              </li>
            </ul>
            <ul className="ordered-items-list closed-check-items">
              {orderedItems}
            </ul>
            <ul className="closed-check-details">
              <li>Tip: {this.props.check.tip}</li>
              <li>Tax: {this.props.check.tax}</li>
            </ul>
          </div>
        );
      } else {
        let orderedItems = this.createCheckItemList(
          this.props.check.orderedItems,
          "open"
        );
        return (
          <div
            id={status}
            key={this.props.check.id}
            className="check-index-item-show"
          >
            <ul className="basic-check-info-list">
              <li className="check-id">Check ID: {this.props.check.id}</li>
              <li className="check-table-id">
                Check Table ID: {this.props.check.tableId}
              </li>
              <li className="check-status">
                Check Status:{" "}
                {this.props.check.closed === false ? "OPEN" : "CLOSED"}
              </li>
              <button
                className="close-check-button-show"
                onClick={() => this.handleCloseCheck(this.props.checkId)}
              >
                Close Check
              </button>
            </ul>
            <div className="item-container">
              <button className="add-item-button" onClick={this.toggleModal}>
                Add Item
              </button>
              <div className="item-modal">
                <div className="modal-list exit-button-container exit-button-container-items">
                  <button className="modal-list exit-modal-button item-modal-button">
                    X
                  </button>
                </div>
                <h1 className="modal-list modal-header modal-list-header">
                  Menu Items
                </h1>
                <ItemIndexContainer checkId={this.props.check.id} />
              </div>
            </div>
            <ul className="ordered-items-list">{orderedItems}</ul>
          </div>
        );
      }
    }
  }
}

export default CheckShow;
