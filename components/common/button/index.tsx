import styled, { css } from "styled-components";

interface ButtonProps {
  readonly red?: boolean;
}

export const buttonStyle = css`
  border-radius: 0.2rem;
  background-image: ${(props) => props.theme.black};

  border: 0;
  border-radius: 0.4rem;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 300;
  padding: 1rem 1.25rem;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background: ${(props) => props.theme.black};

  &:hover {
    box-shadow: none;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
    line-height: 2.2rem;
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  ${buttonStyle}

  ${(props) =>
    props.red &&
    css`
      background: #a83a3a;
      &:hover {
        background: #ec1616;
      }
    `}
`;

export const NavButton = styled.button`
  border: none;
  background: #fff;
`;

export const AuthButton = styled(StyledButton)`
  border-radius: 2rem;
  background: ${(props) => props.theme.black};
  font-weight: 500;
  color: #fff5f5;
  padding: 0.8rem 1.8rem;

  ${({ theme }) => theme.media.phoneLg} {
    padding: 0.6rem 1.6rem;
  }
`;

export const LinearButton = styled(StyledButton)`
  background-image: ${(props) => props.theme.black};
`;
