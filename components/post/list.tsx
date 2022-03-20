import Card from "components/styled/card";
import React, { ReactElement } from "react";
import styled from "styled-components";
 

function List(): ReactElement {  

    return (
      <MainContainer>      
        <CardUl>
         <Card />
         <Card />
         <Card />
         <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
        </CardUl>     
      </MainContainer>
    );
  }
  
  const MainContainer = styled.div`
    max-width: 1330px;
    margin: 0 auto;
  `
  
  const CardUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    gap: ${props => props.theme.gap.card};
    
    justify-content: center;
  `

  
export default List;