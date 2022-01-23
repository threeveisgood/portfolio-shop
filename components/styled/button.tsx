import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 0.2rem;
  background-image: linear-gradient(0deg, rgba(100,101,101,1) 0%, rgba(0,0,0,1) 54%);
  border: 0;
  border-radius: 0.4rem;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 1rem 1.25rem;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: none;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
    padding: 0.6rem 1.2rem;
    line-height: 2.2rem;
  }
`;


export const NavButton = styled.button`
  border: none;
  background: #fff;
`

export const AuthButton = styled(StyledButton)`
 background: linear-gradient(0deg, rgba(100,101,101,1) 0%, rgba(0,0,0,1) 54%);
 font-size: 1.3rem;
 font-weight: 500;
 color:#fff5f5;
 padding: 0.6rem 1.2rem;
`