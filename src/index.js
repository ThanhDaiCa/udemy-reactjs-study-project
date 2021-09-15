import ReactDOM from "react-dom";

import AppSection18 from "./features/section18/App";
import { Provider } from "react-redux";
import store from "./features/section18/store";

import "./index.css";
// import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <AppSection18 />
  </Provider>,
  document.getElementById("root")
);
// ReactDOM.render(<App />, document.getElementById("root"));
