import React, { ReactElement } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import * as yup from "yup";

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
    onSubmit: () => {
      
    },
  });

  return (
    <>
      <PostForm onSubmit={formik.handleSubmit} autoComplete="off">
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label htmlFor="price">price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label htmlFor="imgUrl">imgUrl</label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label htmlFor="recommended">recommended</label>
          <input
            type="number"
            id="recommended"
            name="recommended"
            value={formik.values.recommended}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label htmlFor="color">color</label>
          <input
            type="text"
            id="color"
            name="color"
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label htmlFor="size">size</label>
          <input
            type="text"
            id="size"
            name="size"
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label htmlFor="details">details</label>
          <input
            type="text"
            id="details"
            name="details"
            value={formik.values.details}
            onChange={formik.handleChange}
          />
        </div>

        <div>
          <label htmlFor="link">name</label>
          <input
            type="text"
            id="link"
            name="link"
            onChange={formik.handleChange}
          />
        </div>

        <button type="submit">submit</button>
      </PostForm>
    </>
  );
}

const PostForm = styled.form``;
