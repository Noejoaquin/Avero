import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TableIndexContainer from './tables/table_index_container';
import ChecksIndexContainer from './checks/checks_index_container';

const App = () => (
  <div className = 'app'>
      <Route exact path='/' component={ TableIndexContainer }/>
      <Route path='/tables/:tableId/checks' component={ ChecksIndexContainer } />
  </div>
);

export default App;
