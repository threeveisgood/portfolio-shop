import styled from "styled-components";
import { LinearButton } from "components/common/button";

export const AddCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddCommentTitle = styled.div`
  padding-top: 2rem;
  font-size: 1.4rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled(LinearButton)`
  display: flex;
  color: ${(props) => props.theme.black};
  background-image: none;
  background: none;
  transition: all 0.3s ease;
  font-size: 1.3rem;

  &:hover {
    color: #fff;
    background: ${(props) => props.theme.black};
  }
`;
