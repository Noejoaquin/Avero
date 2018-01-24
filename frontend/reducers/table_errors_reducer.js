import { RECEIVE_TABLE_ERRORS, CLEAR_ERRORS } from '../actions/table_actions';


const TableErrorsReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_TABLE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};


export default TableErrorsReducer;