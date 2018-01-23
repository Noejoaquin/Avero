import {RECEIVE_TABLES} from '../actions/table_actions';


const TablesReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_TABLES:
      return action.tables;
    default:
      return state;
  }
}

export default TablesReducer;
