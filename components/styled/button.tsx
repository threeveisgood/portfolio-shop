import styled, { css } from "styled-components";

export const buttonStyle = css`
  border-radius: 0.2rem;
  background-image: linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB);

  border: 0;
  border-radius: 0.4rem;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem 1.25rem;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: none;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
    line-height: 2.2rem;
  }
`;

export const StyledButton = styled.button`
  ${buttonStyle}
`;

export const NavButton = styled.button`
  border: none;
  background: #fff;
`;

export const AuthButton = styled(StyledButton)`
  background: linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB);
  font-weight: 500;
  color: #fff5f5;
  padding: 0.6rem 1.2rem;
`;

export const LinearButton = styled(StyledButton)`
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
`