import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import GlobalStyle from './styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from './styles/theme';
import { store } from './modules/store';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>,

  document.getElementById('root')
);
