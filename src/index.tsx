import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules/store';
import theme from './styles/theme';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
