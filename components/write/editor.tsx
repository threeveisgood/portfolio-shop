import React, { useRef, useEffect, useCallback, useState } from "react";
import dynamic from "next/dynamic";
import Responsive from "components/styled/responsive";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/client"
import { changeField, initialize } from "modules/write";
import Container from "components/styled/container";
import {
  Field,
  StyledInput,
  StyledLabel,
  FieldContainer,  
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

const Editor: React.FunctionComponent = () => {  
  const [session, loading] = useSession()
  const dispatch = useDispatch();
  const quillRef = useRef<any>(null);

  const { title, body, price, productURL } = useSelector(({ write }: any) => ({
    title: write.title,
    body: write.body,
    price: write.price,
    productURL: write.productURL,
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
    onChangeField({ key: "price", value: e.target.value });
  };

  const onChangeProductURL = (e: any) => {
    onChangeField({ key: "productURL", value: e.target.value });
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block", "link"],
    ],
  };

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return (
    <Container>
        <EditorBlock>
          <TitleInput
            placeholder="제목을 입력하세요"
            onChange={onChangeTitle}
            value={title}
          />
          <Field>
            <StyledInput
              type="text"
              id="price"
              name="price"
              placeholder="가격"
              value={price}
              onChange={onChangePrice}
            />
            <StyledLabel htmlFor="price">가격</StyledLabel>
          </Field>

          <Field>
            <StyledInput
              type="text"
              id="realtedURL"
              name="realtedURL"
              placeholder="상품 관련 URL"
              value={productURL}
              onChange={onChangeProductURL}
            />
            <StyledLabel htmlFor="realtedURL">상품 관련 URL</StyledLabel>
          </Field>

          <FieldContainer>
            <FilesUpload />
          </FieldContainer>

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
