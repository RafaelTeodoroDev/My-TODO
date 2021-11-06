import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: var(--blue-200);
    width: 960px;
    margin: 0 auto;
  }

  :root{
    --blue-500: #0A2463;
    --blue-200: #3E92CC;
    --white: #F8F8F8;
    --red: #D8315B;
  }
`;