import { Field, StyledInput, StyledLabel } from "components/styled/form";
import * as React from "react";
import styled from "styled-components";

interface AddCommentsProps {}

const AddComments: React.FunctionComponent<AddCommentsProps> = (props) => {
  return (
    <AddCommentContainer>            
      <Field>
      <CommentInput placeholder="서로 배려하는 코멘트를 적어주세요." />      
      <CommentLabel>댓글 입력</CommentLabel>
      </Field>
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

const CommentInput = styled.textarea`
  width: 100%;
  resize: none;
  border: 0;
  border-bottom: 1px solid #403f3b;
  background-image: linear-gradient(0deg, rgba(100,101,101,1) 0%, rgba(0,0,0,1) 54%);
  border-image-slice: 1;
  outline: 0;
  font-size: 1.5rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${StyledLabel} {
    font-size: 1.3rem;
    cursor: text;
    top: 30px;
  }

  &:focus {
    ~ ${StyledLabel} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #000000;
      font-weight: 500;
    }
    padding-bottom: 6px;
    font-weight: 500;
    border-width: 2px;
    border-image-slice: 1;
  }
`

const CommentLabel = styled(StyledLabel)`

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

const SumbitButton = styled.button`

`