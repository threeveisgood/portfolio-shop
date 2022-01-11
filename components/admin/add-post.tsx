import React, { ReactElement, useState } from "react";
import { useFormik } from "formik";
import dynamic from "next/dynamic";
import * as yup from "yup";
import { useAddPost } from "hooks/useAddPost";
import { useSelector } from 'react-redux'

import Container from "components/styled/container";
import { FormField, StyledInput, StyledLabel, FieldContainer, FormSubmitButton } from "components/styled/form";

import FilesUpload from "components/upload/files-upload";

import "react-quill/dist/quill.snow.css";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

interface Props {}

const validationSchema = yup.object().shape({
  name: yup.string().max(100).required("Required"),
  price: yup.string().max(50),
  imgUrl: yup.mixed().required(),
  recommended: yup.number(),
  // color: yup.array().of(yup.string()),
  // size: yup.array().of(yup.string()),
  details: yup.string(),
  // brand: yup.string(),
  // link: yup.string()
})

export default function AddPost({}: Props): ReactElement {
  const { mutate } = useAddPost()
  const ThumbnailLinks = useSelector((state: any) => state.addPost.imageLinks)
  console.log("add-post value: " + ThumbnailLinks)

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      imgUrl: [],
      recommended: 0,
      // color: [],
      // size: [],
      details: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      mutate(values)
    }
  });

  return (
    <Container>      
      <form onSubmit={formik.handleSubmit} autoComplete="off">
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
            value={ThumbnailLinks}
            onChange={formik.handleChange}
          />
          <StyledLabel htmlFor="imgUrl">imgUrl</StyledLabel>
        </FormField>

        {/* <FormField>
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
        </FormField> */}

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

        {/* <FormField>
          <StyledInput
            type="text"
            id="link"
            name="link"
            placeholder="link"
            onChange={formik.handleChange}
          />
          <StyledLabel htmlFor="link">link</StyledLabel>
        </FormField> */}

        <FormSubmitButton type="submit">submit</FormSubmitButton>
      </form>
    </Container>
  );
}

