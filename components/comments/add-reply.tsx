import { Field } from "components/styled/form";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { useMutation } from "react-query";
import axios from "axios";
import {  
  ButtonBox,
  SubmitButton,
  CommentTextArea,
  CommentLabel,
} from "components/styled/comment";
import { BsReplyFill } from "react-icons/bs";

interface AddCommentsProps {
  postID: string;
  apiURL: string;
  _id: string;
  repliedName?: string;
}

const CommentSchema = Yup.object().shape({
  comment: Yup.string()
    .min(2, "2글자 이상 입력해주세요.")
    .max(500, "500자 제한을 초과하였습니다.")
    .required("내용을 입력해주세요."),
});

const AddReply: React.FunctionComponent<AddCommentsProps> = ({
  postID,
  apiURL,
  _id,
  repliedName,
}) => {
  const mutation = useMutation(
    (comment: any) => axios.post(`/api/${apiURL}/${_id}`, comment),
    {
      onError: () => {},
      onSuccess: (data: any) => {},
    }
  );

  const [onCancel, setOnCancel] = useState(false);

  const handleClick = () => {
    setOnCancel(!onCancel);
  };

  return (
    <>              
        <Formik
          initialValues={{
            comment: "",
          }}
          validationSchema={CommentSchema}
          onSubmit={async (values: any, actions: any) => {
            const comment = values.comment;
            mutation.mutate({ comment, postID, _id, repliedName });

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
                name="comment"
                component="textarea"
              />
              <CommentLabel>답글 입력</CommentLabel>
            </Field>
            <ButtonBox>
              <SubmitButton type="reset">취소</SubmitButton>
              <SubmitButton type="submit">입력</SubmitButton>
            </ButtonBox>
          </Form>
        </Formik>      
    </>
  );
};

export default AddReply;