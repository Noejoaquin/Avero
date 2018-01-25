import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TableIndexContainer from './tables/table_index_container';
import ChecksIndexContainer from './checks/checks_index_container';

const App = () => (
  <div className = 'app'>
    <Switch>
      <Route exact path='/tables/:tableId/checks' component={ ChecksIndexContainer } />
      <Route path='/' component={ TableIndexContainer }/>
    </Switch>
  </div>
);

export default App;
