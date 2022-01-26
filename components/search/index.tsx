import { useFormik } from "formik"
import styled from "styled-components"
import router from "next/router"
import * as yup from "yup"

import { AiOutlineSearch } from "react-icons/ai"

const validationSchema = yup.object({
  search: yup.string().max(50).required("Required"),
});

export const Search = () => {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      router.push({
        pathname: `/search`,
        query: { value: `${values.search}` },
      });
    },
  });

  return (
    <>
      <SearchForm onSubmit={formik.handleSubmit} autoComplete="off">
        <SearchInput
          id="search"
          name="search"
          type="text"
          value={formik.values.search}
          onChange={formik.handleChange}
          placeholder="&nbsp;검색"
        />
        <SearchButton type="submit">
          <AiOutlineSearch />
        </SearchButton>
      </SearchForm>
    </>
  );
};

const SearchForm = styled.form`
  flex: 0 0 30%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    order: 1;
    flex: 0 0 100%;    
  }
`;

const SearchInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: white;
  border: none;
  width: 90%;  
  border: 0.2rem solid #333030;
  color: #333030;
  transition: all 0.2s;
  padding: 1rem;
  margin-right: -3.25rem;
  border-radius: 2.5rem;  

  &:focus {
    outline: none;
    width: 100%;
  }
`;

const SearchButton = styled.button`
  font-size: 1.9rem;
  border: none;
  background-color: inherit;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(2px);
  }
`;
