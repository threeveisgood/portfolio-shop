import { createGlobalStyle } from "styled-components";
import { device } from "./device";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;

    @media only screen and (max-width: ${device.laptop}) {
    font-size: 50%;
  }
  }

  body {
    background-color: none; //${(props) => props.theme.colors.darkColor};
    font-family: "Roboto", sans-serif;    
  }

  img {
   border-style: none;
  }

  a {
   color: #7c6a3a;
   text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }

  li {
    list-style: none;
  }

  .flex-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }  
`;
