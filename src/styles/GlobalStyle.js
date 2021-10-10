//~~~~~~~~~~~~~~~~~~~
// Styled-Components
//~~~~~~~~~~~~~~~~~~~

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
html,body {
    min-height: 100vh;
    padding: 0;
    color: #fff;
    font-size: 16px;
    background-color: #6a93cb;
    background-image: linear-gradient(315deg, #6a93cb 0%, #a4bfef 74%);
  }
  
body {
    margin: 0;
    font-family: Nunito, Verdana, Helvetica, sans-serif;
    max-width: 100%;
}
`

export default GlobalStyle
