import { LinearButton } from "components/styled/button";
import { Field, InputStyle, StyledLabel } from "components/styled/form";
import React from "react";
import { Formik, Field as FormikField, Form } from "formik";
import styled from "styled-components";
import useAddComment from "hooks/useAddComment";
import { addCommentSchema } from "lib/yup";
import { CommentFormData } from "types/comments";

const bson = require("bson");

interface AddCommentsProps {
  postID: string;
}

const AddComments: React.FunctionComponent<AddCommentsProps> = ({ postID }) => {
  const _id = bson.ObjectId();

  const { mutate } = useAddComment(postID);

  return (
    <AddCommentContainer>
      <Formik
        initialValues={{
          comment: "",
        }}
        validationSchema={addCommentSchema}
        onSubmit={async (values: CommentFormData, actions) => {
          const comment = values.comment;
          mutate({ comment, postID, _id });

          actions.resetForm({
            values: {
              comment: "",
            },
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
  font-size: 1.3rem;

  &:hover {
    color: #fff;
    background: ${(props) => props.theme.black};
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
