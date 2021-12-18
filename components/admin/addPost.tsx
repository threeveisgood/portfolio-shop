import React, { ReactElement, useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import * as yup from "yup";

import Container from "components/styled/container";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;
import "react-quill/dist/quill.snow.css";

interface Props {}

const validationSchema = yup.object().shape({
  name: yup.string().max(100).required("Required"),
  price: yup.string().max(50).required("Required"),
  imgUrl: yup.mixed().required(),
  recommended: yup.number(),
  color: yup.array().of(yup.string()),
  size: yup.array().of(yup.string()),
  details: yup.string(),
  brand: yup.string(),
  link: yup.string().required("Required"),
});

export default function AddPost({}: Props): ReactElement {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      imgUrl: [],
      recommended: 0,
      color: [],
      size: [],
      details: "",
      link: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
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

        <RichTextContainer>
          <ReactQuill
            theme="snow"
            value={formik.values.details}
            onChange={formik.handleChange}
          />
        </RichTextContainer>

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

        <StyledButton type="submit">submit</StyledButton>
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

const RichTextContainer = styled.div`
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

const StyledButton = styled.button`
  margin-top: 4rem;
  border-radius: 0.2rem;
  background-image: linear-gradient(to bottom, #1553cf 0%, #4dcfcb 100%);
  border: 0;
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;
  //line-height: 2.8rem;
  padding: 1rem 1.25rem;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: none;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
    padding: 0.8rem 1.1rem;
    line-height: 2.2rem;
  }
`;
