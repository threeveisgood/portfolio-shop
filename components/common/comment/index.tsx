import styled from "styled-components";
import { Field as FormikField } from "formik";
import { LinearButton } from "components/common/button";

export const AddCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
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

  &:hover {
    color: #fff;
    background: ${(props) => props.theme.black};
  }
`;

export const CommentTextArea = styled(FormikField)`
  width: 100%;
  height: 70px;
  resize: none;
  box-sizing: border-box;
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  border: 0px solid ${(props) => props.theme.white};
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};

  &:focus {
    outline: none;
  }
`;
