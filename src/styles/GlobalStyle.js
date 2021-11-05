import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

	*, html {
    box-sizing: border-box;
    /* height: 100%; */
  }
`;

export default GlobalStyle;
