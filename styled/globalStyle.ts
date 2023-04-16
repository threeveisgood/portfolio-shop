import { createGlobalStyle } from "styled-components";
import { device } from "./device";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;         
    
    @font-face {
            font-family: 'GmarketSansMedium';            
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }     
  }

  html {
    font-size: 62.5%;
    background: #F7F7F7; 

    font-family: 'GmarketSansMedium';
    
    @media only screen and (max-width: ${device.laptop}) {
    font-size: 50%;
  }
  
  overflow-y:scroll;  
  }

  body {
    background-color: none;    
  }

  input {
    font-family: 'GmarketSansMedium';   
  }

  button {
    font-family: 'GmarketSansMedium';       
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
  
  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.black};
  }
`;
