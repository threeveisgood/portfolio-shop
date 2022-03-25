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
  padding: 0 2.8rem;
  overflow-x: auto;
  overflow-y: auto;
  text-align: center;

  background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  color: #fff;   

  @media only screen and (min-width: ${(props) => props.theme.responsive.phone}) {    
    justify-content: center;
  }
`

const InformationUl = styled.ul`
  display: flex;
  white-space: nowrap;
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