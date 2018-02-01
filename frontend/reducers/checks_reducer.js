import {
  RECEIVE_CHECKS,
  RECEIVE_CHECK,
  REMOVE_CHECKS
} from "../actions/check_actions";
import merge from "lodash/merge";

const createObj = arr => {
  let obj = {};
  arr.forEach(check => {
    obj[check.id] = check;
  });
  return obj;
};

const ChecksReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CHECKS:
      let checkObj = createObj(JSON.parse(action.checks));
      return checkObj; // we want every check id pointing to the check
    case RECEIVE_CHECK:
      if (typeof action.check === "string") {
        let check = JSON.parse(action.check);
        return merge({}, state, {
          [check.checkId ? check.checkId : check.id]: check
        });
      } else {
        let check = action.check;
        return merge({}, state, { [check.id]: check });
        // again, getting every actual checkId pointing to a check object
      }
    case REMOVE_CHECKS:
      return {};
    default:
      return state;
  }
};

export default ChecksReducer;
