import { createGlobalStyle } from "styled-components";
import { device } from "./device";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;               
  }

  html {
    font-size: 62.5%;
    background: #F7F7F7; 

    @media only screen and (max-width: ${device.laptop}) {
    font-size: 50%;
  }
  
  overflow-y:scroll;  
  }

  body {
    background-color: none;
    font-family: 'Quicksand';
  }

  img {
   border-style: none;
  }

  a {   
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
