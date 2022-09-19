import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Container from "components/common/container";
import {
  Field,
  StyledInput,
  StyledLabel,
  FieldContainer,
} from "components/common/form";
import FilesUpload from "components/upload/files-upload";
import {
  EditorBlock,
  TitleInput,
  QuillWrapper,
  CategorySelect,
} from "./editor.styled";
import useWriteStateActions from "hooks/state/useWriteStateActions";
import useWriteState from "hooks/state/useWriteState";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const options = [
  { value: "식품", label: "식품" },
  { value: "PC제품", label: "PC제품" },
  { value: "S/W", label: "S/W" },
  { value: "가전제품", label: "가전제품" },
  { value: "화장품", label: "화장품" },
  { value: "패션", label: "패션" },
];

const Editor: React.FunctionComponent = () => {
  const {
    initialize,
    setTitle,
    setCategory,
    setPrice,
    setProductURL,
    setStore,
    setShipping,
    setQuillBody,
  } = useWriteStateActions();

  const {
    title,
    body,
    price,
    productURL,
    shipping,
    store,
    category,
    originalPostId,
  } = useWriteState();

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // //react-select에서 가져다 쓸 타입을 아직 모릅니다.(any로 선언되있음), 확인 후 수정 필요
  const handleChangeCategory = (category: any) => {
    setCategory(category.value);
  };

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleChangeProductURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductURL(e.target.value);
  };

  const handleChangeStore = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStore(e.target.value);
  };

  const handleChangeShipping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping(e.target.value);
  };

  const handleChangeQuillBody = (text: string) => {
    setQuillBody(text);
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
      initialize();
    };
  }, [initialize]);

  return (
    <Container>
      <EditorBlock>
        <TitleInput
          placeholder="제목을 입력하세요"
          onChange={handleChangeTitle}
          value={title}
        />

        <Field>
          <CategorySelect
            defaultValue={{
              label:
                originalPostId != "" ? category : "카테고리를 선택해주세요",
              value:
                originalPostId != "" ? category : "카테고리를 선택해주세요",
            }}
            onChange={handleChangeCategory}
            options={options}
            placeholder="카테고리 선택"
          />
        </Field>

        <Field>
          <StyledInput
            type="text"
            id="price"
            name="price"
            placeholder="가격"
            autoComplete="off"
            value={price}
            onChange={handleChangePrice}
          />
          <StyledLabel htmlFor="price">가격</StyledLabel>
        </Field>

        <Field>
          <StyledInput
            type="text"
            id="realtedURL"
            name="realtedURL"
            placeholder="상품 관련 URL"
            autoComplete="off"
            value={productURL}
            onChange={handleChangeProductURL}
          />
          <StyledLabel htmlFor="realtedURL">상품 관련 URL</StyledLabel>
        </Field>

        <Field>
          <StyledInput
            type="text"
            id="store"
            name="store"
            placeholder="쇼핑몰"
            autoComplete="off"
            value={store}
            onChange={handleChangeStore}
          />
          <StyledLabel htmlFor="realtedURL">쇼핑몰</StyledLabel>
        </Field>

        <Field>
          <StyledInput
            type="text"
            id="shipping"
            name="shipping"
            placeholder="배송비"
            autoComplete="off"
            value={shipping}
            onChange={handleChangeShipping}
          />
          <StyledLabel htmlFor="realtedURL">배송비</StyledLabel>
        </Field>

        <FieldContainer>
          <FilesUpload />
        </FieldContainer>

        <QuillWrapper>
          <ReactQuill
            theme="snow"
            placeholder="내용을 입력하세요"
            modules={modules}
            onChange={handleChangeQuillBody}
            defaultValue={originalPostId != "" ? body : ``}
          />
        </QuillWrapper>
      </EditorBlock>
    </Container>
  );
};

export default Editor;
