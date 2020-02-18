import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  body{
  background-color : ${theme.colorBG};
  }

  body, p, input, select, textarea, button {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -0.2px;
    font-size: ${theme.ruler};
}
form {
  padding: ${theme.ruler};
  width: ${theme.ruler}*20;
  margin: 0 auto;
}
button, input {
  border: 0;
  outline: 0;
  font-size: ${theme.ruler};
  border-radius: ${theme.ruler}*40;
  background-color:${theme.colorBG};
  text-shadow: 1px 1px 0 ${theme.colorWhite};
}

input[type=text] {
  padding: 1em;
  box-shadow:  inset 2px 2px 5px ${theme.colorShadow}, inset -5px -5px 10px ${theme.colorWhite};
  width: 80%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    box-shadow:  inset 1px 1px 2px ${theme.colorShadow}, inset -1px -1px 2px ${theme.colorWhite};
  }
}

button {
  color:#61677C;
  font-weight: bold;
  box-shadow: -5px -5px 20px ${theme.colorWhite},  5px 5px 20px ${theme.colorShadow};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
  padding: 0.5em;
  margin :0.2em;
  
  &:hover {
    box-shadow: -2px -2px 5px ${theme.colorWhite}, 2px 2px 5px ${theme.colorShadow};
  }
  
  &:active {
    box-shadow: inset 1px 1px 2px ${theme.colorShadow}, inset -1px -1px 2px ${theme.colorWhite};
  }
}
  
`

export default GlobalStyle
