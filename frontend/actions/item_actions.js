import * as ItemApiUtil from '../util/item_util';

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";


export const receiveItems = (items) => ({
  type: RECEIVE_ITEMS,
  items
})

export const fetchItems = () => dispatch => {
  return ItemApiUtil.fetchItems()
                     .then((items) => dispatch(receiveItems(items)),
                    );
};
