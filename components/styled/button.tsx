import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 0.2rem;
  background-image: linear-gradient(to bottom, #1553cf 0%, #4dcfcb 100%);
  border: 0;
  border-radius: 0.25rem;
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
    padding: 0.8rem 1.1rem;
    line-height: 2.2rem;
  }
`;
