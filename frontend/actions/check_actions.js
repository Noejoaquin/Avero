import * as CheckApiUtil from '../util/check_util';

export const RECEIVE_CHECKS = "RECEIVE_CHECKS";
export const RECEIVE_CHECK = 'RECEIVE_CHECK';
export const REMOVE_CHECKS = 'REMOVE_CHECKS'

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
                    );
};


export const fetchCheck = (checkId) => dispatch => {
  return CheckApiUtil.fetchCheck(checkId)
                     .then((check) => dispatch(receiveCheck(check)),
                    );
};


export const createCheck = (tableId) => dispatch => {
  return CheckApiUtil.createCheck(tableId)
                     .then((tableId) => dispatch(receiveCheck(check)),
                    );
};

export const addItemOnCheck = (id, itemId) => dispatch => {
  return CheckApiUtil.addItemOnCheck(id, itemId)
                     .then((check) => dispatch(receiveCheck(check)),
                    );
};

export const voidItemOnCheck = (id, orderedItemId) => dispatch => {
  return CheckApiUtil.voidItemOnCheck(id, orderedItemId)
                     .then((check) => dispatch(receiveCheck(check)),
                    );
};

export const closeCheck = (checkId) => dispatch => {
  return CheckApiUtil.closeCheck(checkId)
                     .then((check) => dispatch(receiveCheck(check)),
                    );
};

export const deleteChecks = () => dispatch => {
  return CheckApiUtil.deleteChecks()
                     .then((checks) => dispatch(removeChecks(checks)),
                    );
};
