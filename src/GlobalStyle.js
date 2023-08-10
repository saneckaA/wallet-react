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
  background: rgb(244, 244, 244);
  font-family: 'Cormorant', serif;
}


`;