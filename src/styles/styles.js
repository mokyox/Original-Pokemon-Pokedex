import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 body {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  line-height: 1.6;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    120deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  
}

h1 {
  font-weight: 700;
  font-size: 4rem;
}



.container {
  margin-top: 75px;
  padding-top: 20px;
}

`;

export { GlobalStyle };
