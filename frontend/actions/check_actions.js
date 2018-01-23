import * as CheckApiUtil from '../util/check_util';

export const RECEIVE_CHECKS = "RECEIVE_CHECKS";
export const RECEIVE_CHECK = 'RECEIVE_CHECK'

export const receiveChecks = (checks) => ({
  type: RECEIVE_CHECKS,
  checks
})

export const receiveCheck = (check) => ({
  type: RECEIVE_CHECK,
  check
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
