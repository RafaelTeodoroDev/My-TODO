import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #5A4B94;
    width: 960px;
    margin: 0 auto;
  }

  :root{
    --blue-500: #1A5276;
    --blue-200: #3E92CC;
    --white: #F8F8F8;
    --red: ##A6ACAF;
  }
`;