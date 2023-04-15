import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
${normalize}

  *, h1, h2, h3 {
    margin: 0;
    padding: 0;
  }
  
  body {
  
    &.no-scroll {
      overflow: hidden;
    }
  }
  
  a {
    font-style: initial;
    text-decoration: none;
  
    color: inherit;

    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;

    cursor: pointer;
  }

`;

export default GlobalStyles;
