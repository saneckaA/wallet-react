import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`


html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  background: ${({theme}) => theme.backgroundColor};
  font-family: 'Cormorant', serif;
  color: ${({theme}) => theme.textColor};
}


`;