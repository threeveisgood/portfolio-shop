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
        <LinearButton>취소</LinearButton>
        <LinearButton>입력</LinearButton>
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

const CommentName = styled.div`
  margin-bottom: 1.2rem;
  font-size: 1.4rem;
  font-weight: 600;  
`

const CommentTextArea = styled.textarea`
  ${InputStyle}
  width: 100%;
  resize: none;
  border-bottom: 1px solid #403f3b;      

  &:focus {
    ~ ${StyledLabel} {
      position: absolute;
      top: 0;
      display: block;
      color: black;
    }    
    border-width: 2px;
  }  
`

const CommentLabel = styled(StyledLabel)`
  top: 38px; 
  font-size: 1.4rem;
  color: black;
`

const TextArea = styled.textarea`
  resize: none;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  height: 68px;

  &:focus {
    outline: none;
    border: 2px solid #61605c;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`
const SumbitButton = styled.button`

`