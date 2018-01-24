import { combineReducers } from 'redux'
import CheckErrorsReducer from './check_errors_reducer';
import TableErrorsReducer from './table_errors_reducer';

const ErrorsReducer = combineReducers({
  checks: CheckErrorsReducer,
  tables: TableErrorsReducer
});

export default ErrorsReducer;
