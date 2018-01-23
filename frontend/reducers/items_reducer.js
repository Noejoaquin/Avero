import { RECEIVE_ITEMS } from '../actions/item_actions';


const ItemsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_ITEMS:
      return JSON.parse(action.items);
    default:
      return state;
  }
}

export default ItemsReducer;
