import React from 'react';
import { Route, Link } from 'react-router-dom';
import CheckShowContainer from './check_show_container';
import { ErrorModal } from '../errors/error_modal';

class CheckIndex extends React.Component {
  constructor(props){
    super(props);
    this.fetchChecks= this.props.fetchChecks;
    this.closeCheck = this.props.closeCheck;
    this.tableId = this.props.tableId;
    this.checks = this.props.checks;
    this.fetchTables = this.props.fetchTables;
    this.errors = this.props.errors;
    this.clearErrors = this.props.clearErrors;
    this.createCheck = this.props.createCheck;
    this.handleCreateCheck = this.handleCreateCheck.bind(this);
    this.handleCloseCheck = this.handleCloseCheck.bind(this);
  }

  componentDidMount(){
    this.fetchChecks()
  }

  handleCreateCheck(){
    this.createCheck(this.tableId)
  }

  handleCloseCheck(id){
    this.closeCheck(id)
  }

  render(){
    let error;
    if (this.props.errors.Name) {
      let that = this
      window.addEventListener('click', function(e) {
        let modal = document.getElementsByClassName('error-modal')[0]
        let button = document.getElementsByClassName('error-modal-button')[0]
        if (e.target == modal || e.target == button) {
          modal.style.display = 'none'
          that.props.clearErrors()
        }
      })
      //render the error modal
      error =  <ErrorModal description={this.props.errors.Description}/>
    }
    let checks = this.props.checks.map( (check) => {
      let status = check.closed === false ? 'OPEN' : 'CLOSED'
      let close;
      if (status === 'OPEN'){
         close = <li><button className='close-check-button' onClick={() => this.handleCloseCheck(check.id)}>Close Check</button></li>
      } else {
        close = <li></li>
      }
      return (
        <Link to={`/tables/${check.tableId}/checks/${check.id}`} key={check.id}><div id={status} className='check-index-item'>

            <div className='check'>
              <li className='first-line'>Check ID: {check.id}</li>
              <li>Date Created: {new Date(check.dateCreated).toString().split('-')[0]}</li>
            </div>
            <div>
              <li className='first-line'>Status: {status}</li>
              {close}
            </div>

        </div></Link>
      )
    })

    if (checks.length === 0) {
      checks = <li className='empty-check-list-note'>There Are Currently No Checks For This Table</li>
    }

    return (
      <div className='check-index-container'>
        <h1 className='check-index-header'>CHECKS</h1>
        <button className='create-check' onClick={this.handleCreateCheck}>Open a new Check</button>
        <div className='index-show-container'>
          <ul className='check-list'>
            { checks }
          </ul>
          <Route exact path="/tables/:tableId/checks/:checkId" component={CheckShowContainer} />
        </div>
        {error}
      </div>
    )
  }
}


export default CheckIndex;
