import { Field } from "components/styled/form";
import React, { useEffect, useState, useCallback } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "modules/comment";
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

const bson = require('bson');

interface AddCommentsProps {
  _id: string;
  postID: string;
  repliedName?: string;  
  toggleID?: string;
}

const CommentSchema = Yup.object().shape({
  comment: Yup.string()
    .min(2, "2글자 이상 입력해주세요.")
    .max(500, "500자 제한을 초과하였습니다.")
    .required("내용을 입력해주세요."),
});

const AddReply: React.FunctionComponent<AddCommentsProps> = ({  
  _id,
  repliedName,
  postID,
  toggleID
}) => {  
  const replyID = bson.ObjectId();    

  const mutation = useMutation(
    (comment: any) => axios.post(`/api/reply/${_id}`, comment),
    {
      onError: () => {},
      onSuccess: (data: any) => {
        
      },
    }
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  const { replyToggle } = useSelector(({ comment }: any) => ({
    replyToggle: comment.replyToggle
  }))

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  const onChangeToggle = (id: any) => {  
    return (e: any) => onChangeField({key: "replyToggle", value: { _id: id, toggle: !replyToggle.toggle }})
  }  

  return (   
    replyToggle._id && (replyToggle._id === '' || replyToggle._id === (toggleID ? toggleID : _id) ) && (replyToggle.toggle === true) ?
    <ReplyBox>              
        <Formik
          initialValues={{
            comment: "",
          }}
          validationSchema={CommentSchema}
          onSubmit={async (values: any, actions: any) => {
            const comment = values.comment;
            mutation.mutate({ comment, postID, repliedName, replyID });

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
              <SubmitButton onClick={onChangeToggle(toggleID ? toggleID : _id)}>취소</SubmitButton>
              <SubmitButton type="submit">입력</SubmitButton>
            </ButtonBox>
          </Form>
        </Formik>      
    </ReplyBox>
    : <div></div>
   );
};

export default AddReply;

const ReplyBox = styled.div`
`