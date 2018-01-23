import { combineReducers } from 'redux';
import TablesReducer from './tables_reducer';
import ItemsReducer from './items_reducer';

const EntitiesReducer = combineReducers({
  tables: TablesReducer,
  items: ItemsReducer,
});

export default EntitiesReducer;
