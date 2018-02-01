import React from "react";
import { Route, Link } from "react-router-dom";
import CheckShowContainer from "./check_show_container";
import { ErrorModal } from "../errors/error_modal";
import { CheckIndexItem } from "./check_index_item";

class CheckIndex extends React.Component {
  constructor(props) {
    super(props);
    this.fetchChecks = this.props.fetchChecks;
    this.closeCheck = this.props.closeCheck;
    this.tableId = this.props.tableId;
    this.fetchTables = this.props.fetchTables;
    this.errors = this.props.errors;
    this.clearErrors = this.props.clearErrors;
    this.createCheck = this.props.createCheck;
    this.handleCreateCheck = this.handleCreateCheck.bind(this);
    this.handleCloseCheck = this.handleCloseCheck.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.createCheckItem = this.createCheckItem.bind(this);
  }

  componentDidMount() {
    this.fetchChecks().then(() => this.fetchTables());
  }

  handleCreateCheck() {
    this.createCheck(this.tableId);
  }

  handleCloseCheck(id) {
    this.closeCheck(id);
  }

  handleModal() {
    let that = this;
    window.addEventListener("click", function(e) {
      let modal = document.getElementsByClassName("error-modal")[0];
      let button = document.getElementsByClassName("error-modal-button")[0];
      if (e.target == modal || e.target == button) {
        modal.style.display = "none";
        that.props.clearErrors();
      }
    });
    //render the error modal
    return <ErrorModal description={this.props.errors.Description} />;
  }

  createCheckItem(check) {
    let status = check.closed === false ? "OPEN" : "CLOSED";
    let close;
    if (status === "OPEN") {
      // determines whether button should be present
      close = (
        <li>
          <button
            className="close-check-button"
            onClick={() => this.handleCloseCheck(check.id)}
          >
            Close Check
          </button>
        </li>
      );
    }
    return (
      <CheckIndexItem
        key={check.id}
        tableId={check.tableId}
        checkId={check.id}
        path={this.props.path}
        status={status}
        close={close}
        dateCreated={check.dateCreated}
      />
    );
  }

  render() {
    let error;
    if (this.props.errors.Name) {
      error = this.handleModal(error); // sets logic for the modal
    }

    let checks = this.props.checks.map(check => {
      return this.createCheckItem(check); // returns an array of CheckIndexItems
    });

    if (checks.length === 0) {
      // a small note for when there are no checks
      checks = (
        <li className="empty-check-list-note">
          There Are Currently No Checks For This Table
        </li>
      );
    }
    return (
      <div className="check-index-container">
        <h1 className="check-index-header">
          CHECKS FOR TABLE {this.props.number}
        </h1>
        <button className="create-check" onClick={this.handleCreateCheck}>
          Open a new Check
        </button>
        <div className="index-show-container">
          <ul className="check-list">{checks}</ul>
          <Route
            exact
            path="/tables/:tableId/checks/:checkId"
            component={CheckShowContainer}
          />
        </div>
        {error}
      </div>
    );
  }
}

export default CheckIndex;
