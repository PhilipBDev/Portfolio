//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
html,body {
    min-height: 100vh;
    padding: 0;
    color: #000;
    font-size: 16px;
    background-color: #fff;
    // background-image: linear-gradient(315deg, #6a93cb 0%, #a4bfef 74%);
    max-width: 100%;

    @media (max-width: 850px) {
      background-image: none;
      
    }
  }
  
body {
    margin: 0;
    font-family: Nunito, Verdana, Helvetica, sans-serif;
    display: flex;
}

*{
  // border: 1px solid red;
}
`

export default GlobalStyle
