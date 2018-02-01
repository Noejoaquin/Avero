import { combineReducers } from "redux";
import TablesReducer from "./tables_reducer";
import ItemsReducer from "./items_reducer";
import ChecksReducer from "./checks_reducer";

const EntitiesReducer = combineReducers({
  tables: TablesReducer,
  items: ItemsReducer,
  checks: ChecksReducer
});

export default EntitiesReducer;
