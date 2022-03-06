import * as React from 'react';
import styled from "styled-components";

const navbarInformation = [
  {
    id: 0,
    name: '식품'
  },
  {
    id: 1,
    name: 'PC제품'
  },  
  {
    id: 2,
    name: 'S/W'
  },
  {
    id: 3,
    name: '가전제품'
  },
  {
    id: 4,
    name: '화장품'
  },
  {
    id: 5,
    name: '패션'
  }
]

const NavBar: React.FunctionComponent = () => {
  return <>
    <Nav>
      <InformationUl>
        {navbarInformation.map((info) => {
          return <InformationLi key={info.id}>{info.name}</InformationLi>          
        })}
      </InformationUl>
    </Nav>
  </>;
};

export default NavBar;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  
  background: linear-gradient(0deg, rgba(100,101,101,1) 0%, rgba(0,0,0,1) 54%);
  color: white; 
`

const InformationUl = styled.ul`
  display: flex;
  flex-direction: row;

  text-transform: uppercase;
  font-size: 1.6rem;     
  line-height: 2.2;
`

const InformationLi = styled.li`    
  font-size: 1.4rem;
  &:not(:last-child) {
    margin-right: 2.4rem;
  }
`