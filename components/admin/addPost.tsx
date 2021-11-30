import React, { ReactElement } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";

interface Props {
    
}

const validationSchema = yup.object({
    name: yup.string().max(100).required("Required"),
    price: yup.string().max(50).required("Required"),
    imgUrl: yup.array().of(yup.string()),
    recommended: yup.number(),
    color: yup.array().of(yup.string()),
    size: yup.array().of(yup.string()),
    details: yup.string(),
    brand: yup.string(),
    link: yup.array().of(yup.string())
  });

export default function addPost({}: Props): ReactElement {
    const formik = useFormik({
        initialValues: {
          name: "",
          price: "",
          imgUrl: [],
          recommended: 0,
          color: [],
          size: [],
          details: "",
          link: []
        },
        validationSchema: validationSchema,
        onSubmit: () => {
          
        },
      });

    return (
        <>
         <form onSubmit={formik.handleSubmit} autoComplete="off">
             <label htmlFor="name">name</label>
             <input type="text" id="name" name="name" />

             <label htmlFor="price">price</label>
             <input type="text" id="price" name="price" />

             {/* need to fix this type array */}
             <label htmlFor="imgUrl">imgUrl</label>
             <input type="text" id="imgUrl" name="imgUrl" />

             <label htmlFor="recommended">recommended</label>
             <input type="number" id="recommended" name="recommended" />

             <label htmlFor="color">color</label>
             <input type="text" id="color" name="color" />

             <label htmlFor="size">size</label>
             <input type="text" id="size" name="size" />

             <label htmlFor="details">details</label>
             <input type="text" id="details" name="details" />

             <label htmlFor="link">name</label>
             <input type="text" id="link" name="link" />

             <button type="submit">                 
             </button>
         </form>
        </>
    )
}
