import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  
	*, html { 
    box-sizing: border-box;
}

@media screen and (min-width: 360px) and (max-width: 759px) {
  body{
width: 100%;
height: 100%;
  }
}

`;

export default GlobalStyle;
