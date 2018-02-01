import React from "react";
import { Route } from "react-router-dom";
import ItemIndexContainer from "../items/items_index_container";
import { CheckShowItem } from "./check_show_item";
import { CheckShowHelper } from "./check_show_helper";

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
    // handle the rendering of the modal
    let modal = document.getElementsByClassName("item-modal")[0];
    let button = document.getElementsByClassName("item-modal-button")[0];
    if (modal.classList.contains("showing")) {
      modal.style.display = "none";
    } else {
      window.addEventListener("click", function(e) {
        if (e.target == modal || e.target == button) {
          // when the modal will close
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
    // makes sure voided items are on the bottom of the check,
    // and that newly added items will be prepended to the list
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
              debugger;
              voidItems.push(
                <CheckShowItem
                  key={orderedItems[i].id}
                  voided={true}
                  orderedItem={orderedItems[i]}
                  name={that.props.items[j].name}
                  price={that.props.items[j].price}
                />
              );
            } else {
              unvoidedItems.push(
                <CheckShowItem
                  key={orderedItems[i].id}
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
    let orderedItems;
    let status;
    if (this.props.check === undefined) {
      return null;
    } else {
      if (this.props.check.closed === true) {
        let orderedItems = this.createCheckItemList(
          this.props.check.orderedItems,
          "closed"
        );
        return (
          <CheckShowHelper
            key={this.props.check.id}
            status={"closed"}
            tip={this.props.check.tip}
            tax={this.props.check.tax}
            checkId={this.props.check.id}
            tableId={this.props.check.tableId}
            orderedItems={orderedItems}
          />
        );
      } else {
        orderedItems = this.createCheckItemList(
          this.props.check.orderedItems,
          "open"
        );
        return (
          <CheckShowHelper
            key={this.props.check.id}
            status={"open"}
            toggleModal={this.toggleModal}
            handleCloseCheck={this.handleCloseCheck}
            orderedItems={orderedItems}
            tableId={this.props.check.tableId}
            checkId={this.props.check.id}
          />
        );
      }
    }
  }
}

export default CheckShow;
