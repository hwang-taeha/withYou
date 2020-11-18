import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// 외부에서 import 할거니까 모듈 내보내자~!
export const GlobalStyle = createGlobalStyle`
${reset};
*{
    margin: 0;
  padding: 0;
  box-sizing : border-box;
  font-family: 'Noto Sans KR', sans-serif;
}
body{
    display : flex;
    justify-content : center;
    align-items:center;
    height: 100vh;
    background:url('./images/snow_background.jpg') no-repeat center;
    background-size: cover;

    
}
body::before{
  
  position:absolute; z-index:1;
  top:0; right: 0; bottom: 0; left : 0;
  background-color : rgb(0,0,0,0.7);
}

`;
