import React, { ReactElement, useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import dynamic from "next/dynamic";
import * as yup from "yup";
import { useAddPost } from "hooks/useAddPost";

import Container from "components/styled/container";
import { StyledButton } from "components/styled/button";

import FilesUpload from "components/upload/files-upload";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

import "react-quill/dist/quill.snow.css";

interface Props {}

const validationSchema = yup.object().shape({
  name: yup.string().max(100).required("Required"),
  price: yup.string().max(50),
  imgUrl: yup.mixed().required(),
  recommended: yup.number(),
  color: yup.array().of(yup.string()),
  size: yup.array().of(yup.string()),
  details: yup.string(),
  brand: yup.string(),
  link: yup.string()
})

export default function AddPost({}: Props): ReactElement {
  const { mutate } = useAddPost()

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      imgUrl: [],
      recommended: 0,
      color: [],
      size: [],
      details: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      mutate(values)
    },
  });

  return (
    <Container>      
      <PostForm onSubmit={formik.handleSubmit} autoComplete="off">
        <FormField>
          <StyledInput
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <StyledLabel htmlFor="name">name</StyledLabel>
        </FormField>

        <FormField>
          <StyledInput
            type="text"
            id="price"
            name="price"
            placeholder="price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          <StyledLabel htmlFor="price">price</StyledLabel>
        </FormField>

        <FormField>
          <StyledInput
            type="text"
            id="imgUrl"
            name="imgUrl"
            placeholder="imgUrl"
            onChange={formik.handleChange}
          />
          <StyledLabel htmlFor="imgUrl">imgUrl</StyledLabel>
        </FormField>

        <FormField>
          <StyledInput
            type="text"
            id="color"
            name="color"
            placeholder="color"
            onChange={formik.handleChange}
          />
          <StyledLabel htmlFor="color">color</StyledLabel>
        </FormField>

        <FormField>
          <StyledInput
            type="text"
            id="size"
            name="size"
            placeholder="size"
            onChange={formik.handleChange}
          />
          <StyledLabel htmlFor="size">size</StyledLabel>
        </FormField>

        <FieldContainer>
          <FilesUpload />
        </FieldContainer>

        <FieldContainer>
          <QuillNoSSRWrapper
            theme="snow"
            value={formik.values.details}
            onChange={formik.handleChange}
          />
        </FieldContainer>

        <FormField>
          <StyledInput
            type="text"
            id="link"
            name="link"
            placeholder="link"
            onChange={formik.handleChange}
          />
          <StyledLabel htmlFor="link">link</StyledLabel>
        </FormField>

        <FormSubmitButton type="submit">submit</FormSubmitButton>
      </PostForm>
    </Container>
  );
}

const PostForm = styled.form``;

const FormField = styled.div`
  position: relative;
  padding: 15px 0 0;

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: gray;
`;

const FieldContainer = styled.div`
  margin-top: 3rem;
`;

const StyledInput = styled.input`
  width: 30rem;
  border: 0;
  border-bottom: 2px solid grey;
  border-image: linear-gradient(to right, #1553cf 0%, #4dcfcb 100%);
  border-image-slice: 1;
  outline: 0;
  font-size: 1.5rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${StyledLabel} {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ ${StyledLabel} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #1553cf;
      font-weight: 500;
    }
    padding-bottom: 6px;
    font-weight: 500;
    border-width: 3px;
    border-image: linear-gradient(to right, #1553cf 0%, #4dcfcb 100%);
    border-image-slice: 1;
  }
`;

const FormSubmitButton = styled(StyledButton)`
  margin-top: 4rem;
`;
