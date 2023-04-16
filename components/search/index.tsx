import { useFormik } from "formik";
import router from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import { searchValidationSchema } from "lib/yup";
import { SearchForm, SearchInput, SearchButton } from "./search.styeld";

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
      <SearchButton title="검색" type="submit">
        <AiOutlineSearch />
      </SearchButton>
    </SearchForm>
  );
};
