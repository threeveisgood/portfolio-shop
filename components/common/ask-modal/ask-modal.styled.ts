import { StyledButton } from "components/common/button";
import styled from "styled-components";

export const FullScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  z-index: 5;
`;

export const AskModalBlock = styled.div`
  margin-top: 10%;
  width: 42rem;
  height: 12rem;
  background: #fff;
  padding: 2rem;
  font-size: 1.3rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 0.8rem rebeccapurple(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    width: 20rem;
    font-size: 1.2rem;

    button {
      font-size: 1.1rem;
      padding: 0.5rem 1rem;
    }
  }
`;

export const Button = styled(StyledButton)`
  font-size: 1.3rem;
  & + & {
    margin-left: 0.75rem;
  }
`;
