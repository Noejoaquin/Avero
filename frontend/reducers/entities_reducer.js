import { combineReducers } from 'redux';
import TablesReducer from './tables_reducer';

const EntitiesReducer = combineReducers({
  tables: TablesReducer,
});

export default EntitiesReducer;
