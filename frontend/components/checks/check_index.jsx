import React from 'react';
import { Route } from 'react-router-dom';

class CheckIndex extends React.Component {
  constructor(props){
    super(props);
    this.fetchChecks= this.props.fetchChecks;
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

  handleCloseCheck(){
    this.closeCheck(id)
  }

  // getCheck(){
  //   this.fetchCheck()
  // }

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
        <div key={check.id} id={status} className='check-index-item'>
          <Link to={`/tables/${this.tableId}/checks/${check.id}`}>
            <div className='check'>
              <li >{check.id}</li>
            </div>
            <div>
              <li>Status: {status}</li>
              {close}
            </div>
          </Link>
        </div>
      )
    })
    // debugger
    return (
      <div>
        <h1 className='check-index-header'>CHECKS</h1>
        <button className='create-check' onClick={this.handleCreateCheck}>Open a new Check</button>
        <ul>
          { checks }
        </ul>
        <Route path="/tables/:tableId/checks/:checkId" component={PokemonDetailContainer} />
      </div>
    )
  }
}


export default CheckIndex;
