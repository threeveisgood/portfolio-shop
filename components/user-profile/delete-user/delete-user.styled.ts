import styled from "styled-components";

export const DeleteUserCt = styled.div`
  padding-top: 5.5rem;
`;

export const DeleteUserTitle = styled.h3`
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.gray};
  }
`;
