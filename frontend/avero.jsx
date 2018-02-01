import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { fetchTables } from "./actions/table_actions";
import { fetchItems } from "./actions/item_actions";

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState = {};
  const store = configureStore(preloadedState);
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
