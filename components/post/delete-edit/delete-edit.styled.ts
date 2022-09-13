import styled from "styled-components";
import { buttonStyle } from "components/styled/button";

export const DeleteEditCt = styled.div`
  margin-top: -2.2rem;
`;
export const ButtonCt = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  ${buttonStyle}
  background: transparent;
  color: ${(props) => props.theme.black};
  transition: 0.3s;
  font-size: 1.2rem;

  &:hover {
    color: #fff;
    background: ${(props) => props.theme.black};
  }
`;
