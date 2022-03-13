import { LinearButton } from "components/styled/button";
import {
  Field,
  InputStyle,
  StyledInput,
  StyledLabel,
} from "components/styled/form";
import React from "react";
import { Formik, Field as FormikField, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useMutation } from "react-query";
import axios from "axios";

const bson = require('bson');

interface AddCommentsProps {
  postID: string;
}

const CommentSchema = Yup.object().shape({
  comment: Yup.string()
    .min(2, "2글자 이상 입력해주세요.")
    .max(500, "500자 제한을 초과하였습니다.")
    .required("내용을 입력해주세요."),
});

const AddComments: React.FunctionComponent<AddCommentsProps> = ({ postID }) => {  
  const _id = bson.ObjectId()  

  const mutation = useMutation(
    (comment: any) => axios.post(`/api/comments/${_id}`, comment),
    {
      onError: () => {},
      onSuccess: (data: any) => {
        
      }
    }
  );

  return (
    <AddCommentContainer>
      <Formik
        initialValues={{
          comment: "",
        }}
        validationSchema={CommentSchema}
        onSubmit={async (values: any, actions: any) => {
          const comment = values.comment                    
          mutation.mutate({ comment, postID, _id })

          actions.resetForm({
            values: {
              comment: '',
            }
          });
        }}
      >
        <Form>
          <Field>
            <CommentTextArea id="comment" name="comment" component="textarea" />
            <CommentLabel>댓글 입력</CommentLabel>
          </Field>
          <ButtonBox>
            <SubmitButton type="reset">취소</SubmitButton>
            <SubmitButton type="submit">입력</SubmitButton>
          </ButtonBox>
        </Form>
      </Formik>
    </AddCommentContainer>
  );
};

export default AddComments;

const AddCommentContainer = styled.div`
  display: flex;
  flex-direction: column;      
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled(LinearButton)`
  display: flex;
  color: ${(props) => props.theme.black};
  background-image: none;
  background: none;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background: ${(props) => props.theme.primary};
  }
`;

const CommentTextArea = styled(FormikField)`
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

const CommentLabel = styled(StyledLabel)`
  top: 3.7rem;
  font-size: 1.4rem;
  color: ${(props) => props.theme.black};
`;
