//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

html,body {
    min-height: 100vh;
    padding: 0;
    font-size: 16px;
    width: 100%;

    // @media (max-width: 850px) {
    //   background-image: none;
      
    // }
  }
  
body {
    margin: 0;
    font-family: Montserrat, Verdana, Helvetica, sans-serif;
    display: flex;
}

*{
  // border: 1px solid red;
}
`

export default GlobalStyle
