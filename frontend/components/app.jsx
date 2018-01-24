import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TableIndexContainer from './tables/table_index_container';

const App = () => (
  <div className = 'app'>
    <Switch>
      <Route path='/' component={ TableIndexContainer }/>
    </Switch>
  </div>
);

export default App;
