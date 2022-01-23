import React, { ReactElement, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import Container from "components/styled/container";
import {
  FormField,
  StyledInput,
  StyledLabel,
  FieldContainer,
  FormSubmitButton,
} from "components/styled/form";

import FilesUpload from "components/upload/files-upload";

// import dynamic from "next/dynamic";
// import "react-quill/dist/quill.snow.css";

// const QuillNoSSRWrapper = dynamic(import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>,
// });

interface Props {}

async function addPost(
  name: any,
  price: any,
  imgUrl: any,
  recommended: any,
  details: any
) {
  const response = await fetch("/api/admin/add-post", {
    method: "POST",
    body: JSON.stringify({ name, price, imgUrl, recommended, details }),
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

const validationSchema = yup.object().shape({
  name: yup.string().max(100).required("Required"),
  price: yup.string().max(50),  
  recommended: yup.number(),
  details: yup.string(),
});

export default function AddPost({}: Props): ReactElement {
  const thumbnailLinks = useSelector((state: any) => state.addPost.imageLinks);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      //imgUrl: [],
      recommended: 0,
      details: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const enteredName = values.name;
      const enteredPrice = values.price;
      const enteredImageUrl = thumbnailLinks;
      const enteredRecommended = values.recommended;
      const enteredDetail = values.details;

      try {
        const result = await addPost(
          enteredName,
          enteredPrice,
          enteredImageUrl,
          enteredRecommended,
          enteredDetail
        );
      } catch (error) {
        console.log(error);
      }

      setSubmitting(false);
    },
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

        {/* <FormField>
          <StyledInput
            type="text"
            id="imgUrl"
            name="imgUrl"
            placeholder="imgUrl"
            value={thumbnailLinks}
            onChange={formik.handleChange}
          />
          <StyledLabel htmlFor="imgUrl">imgUrl</StyledLabel>
        </FormField> */}

        <FieldContainer>
          <FilesUpload />
        </FieldContainer>

        <FormField>
          <h5>details</h5>
          <textarea
            id="details"
            name="details"
            value={formik.values.details}
            onChange={formik.handleChange}
          />
        </FormField>

        <FormSubmitButton type="submit">submit</FormSubmitButton>
      </form>
    </Container>
  );
}
