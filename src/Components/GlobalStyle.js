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
  background: conic-gradient(from 180deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, rgba(145, 220, 233, 0.623172) 61.87deg, #4EC7DB 185.62deg, rgba(188, 234, 241, 0.379391) 359.96deg, rgba(255, 255, 255, 0) 360deg), #FFFFFF;
}
`