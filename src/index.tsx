import ReactDOM from "react-dom";
import App from "./App";

// @ts-ignore
import { Provider } from "react-redux";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.querySelector("#root")
);
