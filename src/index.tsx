import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "./styles/theme";
import { store, sagaMiddleware } from "./modules/store";
import { rootSaga } from "./modules/store/rootReducer";

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>,

  document.getElementById("root")
);
