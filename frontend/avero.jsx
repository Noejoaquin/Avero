import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchTables } from './actions/table_actions';
import { fetchItems } from './actions/item_actions';
// import { fetchChecks } from './actions/check_actions'
import { fetchChecks, fetchCheck, createCheck } from './actions/check_actions'

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  const store = configureStore(preloadedState);
  window.store = store;
  window.dispatch = store.dispatch
  window.fetchTables = fetchTables;
  window.fetchItems = fetchItems;
  window.fetchChecks = fetchChecks;
  window.fetchCheck = fetchCheck;
  window.createCheck = createCheck;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
