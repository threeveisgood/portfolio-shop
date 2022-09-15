import { useFormik } from "formik";
import router from "next/router";
import * as yup from "yup";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchForm, SearchInput, SearchButton } from "./search.styeld";
import { searchValidationSchema } from "lib/yup";

interface SearchProps {
  isMobile?: boolean;
  searchToggle?: boolean;
}

export const Search = ({ isMobile, searchToggle }: SearchProps) => {
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: searchValidationSchema,
    onSubmit: (values) => {
      router.push({
        pathname: `/search`,
        query: { value: `${values.search}` },
      });
    },
  });

  return (
    <SearchForm
      isMobile={isMobile}
      searchToggle={searchToggle}
      onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <SearchInput
        name="search"
        type="text"
        value={formik.values.search}
        onChange={formik.handleChange}
      />
      <SearchButton type="submit">
        <AiOutlineSearch />
      </SearchButton>
    </SearchForm>
  );
};
