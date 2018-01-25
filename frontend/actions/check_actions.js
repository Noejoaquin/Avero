import * as CheckApiUtil from '../util/check_util';

export const RECEIVE_CHECKS = "RECEIVE_CHECKS";
export const RECEIVE_CHECK = 'RECEIVE_CHECK';
export const REMOVE_CHECKS = 'REMOVE_CHECKS';
export const RECEIVE_CHECK_ERRORS = "RECEIVE_CHECK_ERRORS";

export const receiveErrors = (errors) => ({
  type: RECEIVE_CHECK_ERRORS,
  errors
})

export const receiveChecks = (checks) => ({
  type: RECEIVE_CHECKS,
  checks
})

export const receiveCheck = (check) => ({
  type: RECEIVE_CHECK,
  check
})

export const removeChecks = () => ({
  type: REMOVE_CHECKS,
})

export const fetchChecks = () => dispatch => {
  return CheckApiUtil.fetchChecks()
                     .then((checks) => dispatch(receiveChecks(checks)),
                      (errors) => dispatch(receiveErrors(errors.responseJSON))
                    );
};


export const fetchCheck = (checkId) => dispatch => {
  return CheckApiUtil.fetchCheck(checkId)
                     .then((check) => dispatch(receiveCheck(check)),
                      (errors) => dispatch(receiveErrors(errors.responseJSON))
                    );
};


export const createCheck = (tableId) => dispatch => {
  return CheckApiUtil.createCheck(tableId)
                     .then((check) => dispatch(receiveCheck(check)),
                      (errors) => dispatch(receiveErrors(errors.responseJSON))
                    );
};

export const addItemOnCheck = (id, itemId) => dispatch => {
  return CheckApiUtil.addItemOnCheck(id, itemId)
                     .then((check) => dispatch(receiveCheck(check)),
                      (errors) => dispatch(receiveErrors(errors.responseJSON))
                    );
};

export const voidItemOnCheck = (id, orderedItemId) => dispatch => {
  return CheckApiUtil.voidItemOnCheck(id, orderedItemId)
                     .then((check) => dispatch(receiveCheck(check)),
                      (errors) => dispatch(receiveErrors(errors.responseJSON))
                    );
};

export const closeCheck = (checkId) => dispatch => {
  return CheckApiUtil.closeCheck(checkId)
                     .then((check) => dispatch(receiveCheck(check)),
                      (errors) => dispatch(receiveErrors(errors.responseJSON))
                    );
};

export const deleteChecks = () => dispatch => {
  return CheckApiUtil.deleteChecks()
                     .then((checks) => dispatch(removeChecks(checks)),
                      (errors) => dispatch(receiveErrors(errors.responseJSON))
                    );
};
