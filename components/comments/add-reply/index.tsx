import { Field } from "components/common/form";
import React, { useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import {
  ButtonBox,
  SubmitButton,
  CommentTextArea,
  CommentLabel,
} from "components/common/comment";
import { addCommentSchema } from "lib/yup";
import useAddReply from "hooks/useAddReply";
import { CommentFormData } from "types/comments";
import useCommentStateActions from "hooks/state/useCommentStateActions";
import useCommentState from "hooks/state/useCommentState";

const bson = require("bson");

interface AddCommentsProps {
  _id: string;
  postID: string;
  repliedName?: string;
  toggleID?: string;
}

const AddReply: React.FunctionComponent<AddCommentsProps> = ({
  _id,
  repliedName,
  postID,
  toggleID,
}) => {
  const replyID = bson.ObjectId();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const { replyToggle } = useCommentState();
  const { initialize, changeReplyToggle } = useCommentStateActions();

  const { mutate } = useAddReply(postID);

  useEffect(() => {
    return () => {
      initialize();
    };
  }, [initialize]);

  const onChangeToggle = (id: string) => {
    return () =>
      changeReplyToggle({
        _id: id,
        toggle: !replyToggle.toggle,
      });
  };

  return replyToggle._id &&
    (replyToggle._id === "" ||
      replyToggle._id === (toggleID ? toggleID : _id)) &&
    replyToggle.toggle === true ? (
    <div>
      <Formik
        initialValues={{
          comment: "",
        }}
        validationSchema={addCommentSchema}
        onSubmit={async (values: CommentFormData, actions) => {
          const comment = values.comment;
          mutate(
            { _id, comment, postID, repliedName, replyID },
            {
              onSuccess: () => {
                cancelRef?.current?.click();
              },
            }
          );

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
            <CommentLabel>답글 입력</CommentLabel>
          </Field>
          <ButtonBox>
            <SubmitButton
              ref={cancelRef}
              onClick={onChangeToggle(toggleID ? toggleID : _id)}
            >
              취소
            </SubmitButton>
            <SubmitButton type="submit">입력</SubmitButton>
          </ButtonBox>
        </Form>
      </Formik>
    </div>
  ) : (
    <div></div>
  );
};

export default AddReply;
