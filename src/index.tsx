import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import GlobalStyle from "./styles/globalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "react-query/devtools";
import { createStore } from "redux";
import rootReducer from "./modules/store";
import { composeWithDevTools } from "redux-devtools-extension";

const queryClient = new QueryClient();
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root")
);
