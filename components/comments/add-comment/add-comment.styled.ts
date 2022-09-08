import styled from "styled-components";
import { Field as FormikField } from "formik";
import { InputStyle, StyledLabel } from "components/styled/form";
import { LinearButton } from "components/styled/button";

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
  font-size: 1.3rem;

  &:hover {
    color: #fff;
    background: ${(props) => props.theme.black};
  }
`;

export const CommentTextArea = styled(FormikField)`
  ${InputStyle}
  width: 100%;
  resize: none;
  border-bottom: 1px solid ${(props) => props.theme.black};

  &:focus {
    ~ ${StyledLabel} {
      position: absolute;
      top: 0;
      display: block;
      color: ${(props) => props.theme.black};
    }
    border-width: 2px;
  }
`;

export const CommentLabel = styled(StyledLabel)`
  top: 5rem;
  font-size: 1.4rem;
  color: ${(props) => props.theme.black};
`;
