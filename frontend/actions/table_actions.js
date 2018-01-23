import * as TableApiUtil from '../util/table_util';

export const RECEIVE_TABLES = "RECEIVE_TABLES";


export const receiveTables = (tables) => ({
  type: RECEIVE_TABLES,
  tables
})

export const fetchTables = () => dispatch => {
  return TableApiUtil.fetchTables()
                     .then((tables) => dispatch(receiveTables(tables)),
                      // (errors) => dispatch(receiveErrors(errors.responseJSON))
                    );
};
