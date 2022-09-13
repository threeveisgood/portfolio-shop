import React, { useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "modules/write";
import Container from "components/styled/container";
import {
  Field,
  StyledInput,
  StyledLabel,
  FieldContainer,
} from "components/styled/form";
import FilesUpload from "components/upload/files-upload";
import {
  EditorBlock,
  TitleInput,
  QuillWrapper,
  CategorySelect,
} from "./editor.styled";
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
  const dispatch = useDispatch();

  const {
    title,
    body,
    price,
    productURL,
    shipping,
    store,
    category,
    originalPostId,
  } = useSelector(({ write }: any) => ({
    title: write.title,
    body: write.body,
    price: write.price,
    productURL: write.productURL,
    shipping: write.shipping,
    store: write.store,
    category: write.category,
    originalPostId: write.originalPostId,
  }));

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  const onChangeFiel = (payload: string) => changeField(payload);

  const handleChange = (key: string) => {
    return (e: any) => onChangeField({ key: key, value: e.target.value });
  };

  const onChangeText = (text: any) => {
    onChangeField({ key: "body", value: text });
  };

  const onChangeCategory = (category: any) => {
    onChangeField({ key: "category", value: category.value });
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
          onChange={handleChange("title")}
          value={title}
        />

        <Field>
          <CategorySelect
            defaultValue={{
              label: !!originalPostId ? category : "카테고리를 선택해주세요",
              value: !!originalPostId ? category : "카테고리를 선택해주세요",
            }}
            onChange={onChangeCategory}
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
            onChange={handleChange("price")}
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
            onChange={handleChange("productURL")}
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
            onChange={handleChange("store")}
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
            onChange={handleChange("shipping")}
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
            onChange={onChangeText}
            defaultValue={!!originalPostId ? body : ``}
          />
        </QuillWrapper>
      </EditorBlock>
    </Container>
  );
};

export default Editor;
