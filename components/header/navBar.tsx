import * as React from 'react';
import styled from "styled-components";
import { BiChevronDown } from 'react-icons/bi'

const navbarInformation = [
  {
    id: 0,
    name: 'women'
  },
  {
    id: 1,
    name: 'men'
  },  
  {
    id: 2,
    name: 'food'
  },
  {
    id: 3,
    name: 'rumble'
  }
]

const NavBar: React.FunctionComponent = (props) => {
  return <>
    <Nav>
      <InformationUl>
        {navbarInformation.map((info) => {
          return <InformationLi key={info.id}>{info.name}&nbsp;<BiChevronDown /></InformationLi>          
        })}
      </InformationUl>
    </Nav>
  </>;
};

export default NavBar;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  
  background: linear-gradient(to right, #1553cf 0%, #4dcfcb 100%);
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
  font-weight: 300;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`