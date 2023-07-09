import { Field } from "components/common/form";
import React, { useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import {
  ButtonBox,
  SubmitButton,
  CommentTextArea,
} from "components/common/comment";
import { addCommentSchema } from "lib/yup";
import useAddReply from "hooks/useAddReply";
import { CommentFormData } from "types/comments";
import useCommentStateActions from "hooks/state/useCommentStateActions";
import useCommentState from "hooks/state/useCommentState";
import { useSession } from "next-auth/client";
import { toast } from "react-hot-toast";

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
  const [session] = useSession();

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
        toggle: replyToggle.toggle,
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

          if (!session) {
            toast("댓글을 입력하시려면 로그인 해주세요!");
          }

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
