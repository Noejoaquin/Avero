import { RECEIVE_CHECKS, RECEIVE_CHECK } from '../actions/check_actions';
import merge from 'lodash/merge';

const ChecksReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_CHECKS:
    debugger
    let checks = JSON.parse(action.checks)
      return {}; // we want every check id pointing to the check
    case RECEIVE_CHECK:
    // debugger
      let check = JSON.parse(action.check)
      return merge({}, state, { [check.id] : check } )
    default:
      return state;
  }
}

export default ChecksReducer;
