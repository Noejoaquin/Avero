import * as TableApiUtil from "../util/table_util";

export const RECEIVE_TABLES = "RECEIVE_TABLES";
export const RECEIVE_CHECK_ERRORS = "RECEIVE_CHECK_ERRORS";

export const receiveTables = tables => ({
  type: RECEIVE_TABLES,
  tables
});

export const fetchTables = () => dispatch => {
  return TableApiUtil.fetchTables().then(tables =>
    dispatch(receiveTables(tables))
  );
};
