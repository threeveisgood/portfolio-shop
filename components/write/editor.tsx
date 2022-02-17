import React, { useRef, useEffect, useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { useFormik } from "formik";
import * as yup from "yup";
import Responsive from "components/styled/responsive";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "modules/write";
import Container from "components/styled/container";
import {
  FormField,
  StyledInput,
  StyledLabel,
  FieldContainer,
  FormSubmitButton,
} from "components/styled/form";
import FilesUpload from "components/upload/files-upload";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    return ({ forwardedRef, ...props }: any) => (
      <RQ ref={forwardedRef} {...props} />
    );
  },
  {
    ssr: false,
  }
);

async function addPost(
  name: any,
  price: any,
  imgUrl: any,
  recommended: any,
  details: any,
  link: any,
  comments: any,
  shopName: any
) {
  const response = await fetch("/api/write/add-post", {
    method: "POST",
    body: JSON.stringify({
      name,
      price,
      imgUrl,
      recommended,
      details,
      link,
      comments,
      shopName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

const Editor: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const quillRef = useRef<any>(null);

  const thumbnailLinks = useSelector((state: any) => state.addPost.imageLinks);

  const { title, body, price, productURL } = useSelector(({ write }: any) => ({
    title: write.title,
    body: write.body,
    price: write.price,
    productURL: write.productURL
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  const onChangeTitle = (e: any) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  const onChangeText = (text: any) => {
    onChangeField({ key: "body", value: text });
  };

  const onChangePrice = (e: any) => {
    onChangeField({ key: "price", value: e.target.value })
  }

  const onChangeProductURL = (e: any) => {
    onChangeField({ key: "productURL", value: e.target.value })
  }

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block", "link", "image"],
    ],
  };

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      recommended: 0,
      details: "",
      link: "",
      shopName: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      const enteredName = values.name;
      const enteredPrice = values.price;
      const enteredImageUrl = thumbnailLinks;
      const enteredRecommended = values.recommended;
      const enteredDetail = values.details;
      const enteredLink = values.link;
      const enteredComments = "";
      const enteredShopName = values.shopName;

      try {
        const result = await addPost(
          enteredName,
          enteredPrice,
          enteredImageUrl,
          enteredRecommended,
          enteredDetail,
          enteredLink,
          enteredComments,
          enteredShopName
        );
      } catch (error) {
        console.log(error);
      }

      //router.push('/')

      setSubmitting(false);
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <EditorBlock>
          <TitleInput
            placeholder="제목을 입력하세요"
            onChange={onChangeTitle}
            value={title}
          />
          <FormField>
            <StyledInput
              type="text"
              id="price"
              name="price"
              placeholder="가격"
              value={price}
              onChange={onChangePrice}
            />
            <StyledLabel htmlFor="price">가격</StyledLabel>
          </FormField>
          
          <FormField>
            <StyledInput
              type="text"
              id="realtedURL"
              name="realtedURL"
              placeholder="상품 관련 URL"
              value={productURL}
              onChange={onChangeProductURL}
            />
            <StyledLabel htmlFor="realtedURL">상품 관련 URL</StyledLabel>
          </FormField>
          <QuillWrapper>
            <ReactQuill
              theme="snow"
              placeholder="내용을 입력하세요"
              modules={modules}
              forwardedRef={quillRef}
              onChange={onChangeText}
            />
          </QuillWrapper>
        </EditorBlock>

        <FieldContainer>
          <FilesUpload />
        </FieldContainer>

        <FormSubmitButton type="submit">Submit</FormSubmitButton>
      </form>
    </Container>
  );
};

export default Editor;

const EditorBlock = styled(Responsive)`
  padding: 3rem 0 1rem;
`;

const TitleInput = styled.input`
  background: inherit;
  font-size: 2.3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid gray;
  margin-bottom: 1rem;
  width: 100%;
`;

const QuillWrapper = styled.div`
  background: #f7f7f7;
  margin-top: 3rem;
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;
