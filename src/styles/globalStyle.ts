import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

  * {
    overflow-y: hidden;
    box-sizing: border-box;
  }
  
`;

export default GlobalStyle;
