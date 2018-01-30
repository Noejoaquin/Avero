import React from 'react';
import { Route, Link } from 'react-router-dom';
import CheckShowContainer from './check_show_container';


class CheckIndex extends React.Component {
  constructor(props){
    super(props);
    this.fetchChecks= this.props.fetchChecks;
    this.closeCheck = this.props.closeCheck;
    this.tableId = this.props.tableId;
    this.checks = this.props.checks;
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
              <li >{check.id}</li>
            </div>
            <div>
              <li>Status: {status}</li>
              {close}
            </div>

        </div></Link>
      )
    })
    return (
      <div>
        <h1 className='check-index-header'>CHECKS</h1>
        <button className='create-check' onClick={this.handleCreateCheck}>Open a new Check</button>
        <div className='index-show-container'>
          <ul className='check-list'>
            { checks }
          </ul>
          <div className='holder-for-show'>
            <Route exact path="/tables/:tableId/checks/:checkId" component={CheckShowContainer} />
          </div>
        </div>
      </div>
    )
  }
}


export default CheckIndex;
