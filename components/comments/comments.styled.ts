import styled from "styled-components";

export const CommentCt = styled.div`
  border-top: 1px solid ${(props) => props.theme.lowgray};
  margin-top: 1rem;
  padding-top: 1rem;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
`;
