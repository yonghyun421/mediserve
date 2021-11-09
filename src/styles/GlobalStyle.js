import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

<<<<<<< HEAD
<<<<<<< HEAD
  
	*, html { 
    box-sizing: border-box;
=======
*{
  box-sizing: border-box;
}  
	html { 
    max-width: 1200px;
>>>>>>> 0e9c985 (반응형 수정)
}

@media screen and (min-width: 360px) and (max-width: 759px) {
  body{
width: 100%;
height: 100%;
<<<<<<< HEAD
  }
}

=======
	*, html,body{
    box-sizing: border-box;
    height:100%;
  }
 
>>>>>>> 3b8dd3b (반응형 구현 + 카메라API 연동)
=======
min-width:300px;

  }
}

>>>>>>> 0e9c985 (반응형 수정)
`;

export default GlobalStyle;
