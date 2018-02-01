import { combineReducers } from "redux";
import CheckErrorsReducer from "./check_errors_reducer";

const ErrorsReducer = combineReducers({
  checks: CheckErrorsReducer,
});

export default ErrorsReducer;
