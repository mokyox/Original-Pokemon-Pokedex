import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { searchPokemon } from "../../components/reducers/reducers";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const store = createStore(searchPokemon);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
