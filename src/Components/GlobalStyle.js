import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.App {
  height: 100vh;
  background: linear-gradient(180deg, #8FD1DC 0%, rgba(134, 199, 209, 0) 100%), #FFFFFF;
}
`