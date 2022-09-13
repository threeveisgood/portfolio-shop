import styled from "styled-components";
import { StyledButton } from "components/styled/button";

export const WriteActionButtonsBlock = styled.div`
  display: flex;
  margin: 1rem 0 3rem;
  button + button {
    margin-left: 0.5rem;
  }
  justify-content: center;
`;

export const Button = styled(StyledButton)`
  font-size: 1.5rem;
  & + & {
    margin-left: 0.8rem;
  }
`;
