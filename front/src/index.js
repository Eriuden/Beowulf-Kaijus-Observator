import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reducers from "./reducers/baseOfReducer";

import { getAgents } from "./actions/agent.action";
import { getKaijus } from "./actions/kaiju.action";


const composedEnhance = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducers, {}, composedEnhance);

store.dispatch(getAgents())
store.dispatch(getKaijus())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
);
