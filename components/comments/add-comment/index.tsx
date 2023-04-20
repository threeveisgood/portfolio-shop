import { Field } from "components/common/form";
import React from "react";
import { Formik, Form } from "formik";
import useAddComment from "hooks/useAddComment";
import { addCommentSchema } from "lib/yup";
import { CommentFormData } from "types/comments";
import { CommentTextArea } from "components/common/comment";
import {
  AddCommentContainer,
  AddCommentTitle,
  ButtonBox,
  SubmitButton,
} from "./add-comment.styled";

const bson = require("bson");

interface AddCommentsProps {
  postID: string;
}

const AddComments: React.FunctionComponent<AddCommentsProps> = ({ postID }) => {
  const _id = bson.ObjectId();

  const { mutate } = useAddComment(postID);

  return (
    <AddCommentContainer>
      <AddCommentTitle>댓글 입력</AddCommentTitle>
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
            <CommentTextArea
              id="comment"
              aria-label="Comment"
              name="comment"
              component="textarea"
            />
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
