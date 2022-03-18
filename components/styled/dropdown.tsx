import link from "next/link";
import styled from "styled-components";

export const ProfileDropdown = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  min-width: 10rem;

  top: 2.8rem;  
  right: 0.1rem;    
`;

export const ProfileDropdownMenu = styled.li`
  display: none;
  position: relative;
  top: 0px;  
 
  color: #fff;
  height: 3.4rem;    
  font-size: 1.4rem;
  background: ${props => props.theme.primary};
  padding: 0.2rem 0.2rem;
  align-items: center;
  padding: 0.5rem 1rem 1rem;

  &.top {
    border-radius: 0.4rem 0.4rem 0 0;
    border-bottom: 1px solid ${props => props.theme.gray};    
  }

  &.bottom {
    border-radius: 0 0 0.4rem 0.4rem;
  }
`;


export const DropdownText = styled.p`
  color: white;
`