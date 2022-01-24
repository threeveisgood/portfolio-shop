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
  &:not(:last-child) {
    margin-right: 2rem;
  }
`