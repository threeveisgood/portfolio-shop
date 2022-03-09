import { LinearButton } from "components/styled/button";
import { Field, InputStyle, StyledInput, StyledLabel } from "components/styled/form";
import * as React from "react";
import styled from "styled-components";

interface AddCommentsProps {}

const AddComments: React.FunctionComponent<AddCommentsProps> = (props) => {
  
  return (
    <AddCommentContainer>            
      <Field>
      <CommentTextArea />      
      <CommentLabel>댓글 입력</CommentLabel>
      </Field>
      <ButtonBox>
        <SubmitButton>취소</SubmitButton>
        <SubmitButton>입력</SubmitButton>
      </ButtonBox>
    </AddCommentContainer>
  );
};

export default AddComments;

const AddCommentContainer = styled.div`
  display: flex;  
  flex-direction: column;
  border-top: 1px solid #d6d6d6;
  margin: 1rem 0 0;
  padding-top: 2rem;  
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`

const SubmitButton = styled(LinearButton)`
  display: flex;
  color: ${props => props.theme.black};
  background-image: none;
  background: none;
`

const CommentTextArea = styled.textarea`
  ${InputStyle}
  width: 100%;
  resize: none;
  border-bottom: 1px solid ${props => props.theme.black};      

  &:focus {
    ~ ${StyledLabel} {
      position: absolute;
      top: 0;
      display: block;
      color: ${props => props.theme.black};
    }   

    border-width: 2px;
  }
`

const CommentLabel = styled(StyledLabel)`
  top: 38px; 
  font-size: 1.4rem;
  color: black;
`