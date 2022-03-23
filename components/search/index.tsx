import { useFormik } from "formik"
import styled from "styled-components"
import router from "next/router"
import * as yup from "yup"

import { AiOutlineSearch } from "react-icons/ai"

interface SearchProps {
  isMobile: boolean
}

interface SearchStyledProps {
  readonly isMobile?: boolean; 
}

const validationSchema = yup.object({
  search: yup.string().max(50).required("Required"),
});

export const Search = ({ isMobile }: SearchProps) => {
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
      <SearchForm isMobile={isMobile} onSubmit={formik.handleSubmit} autoComplete="off">
        <SearchInput
          id="search"
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

const SearchForm = styled.form<SearchStyledProps>`
  flex: 0 0 24%;  
  display: ${props => props.isMobile ? 'none' : 'flex'};
  position: relative;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${(props) => props.theme.responsive.phoneLg}) {
    
  }
  @media only screen and (max-width: ${(props) => props.theme.responsive.phone}) {    
      display: ${props => props.isMobile ? 'flex' : 'none'};
      margin-bottom: 0.7rem;
  }
`;

const SearchInput = styled.input`
  background: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  font-family: inherit;
  font-size: inherit;
  color: #fff;
  border: none;
  width: 90%;      
  transition: all 0.2s;
  padding: 1rem;  
  border-radius: 2.6rem;  
  height: 1.5rem;

  &:focus {
    outline: none;
    width: 100%;    

    @media only screen and (min-width: ${(props) => props.theme.responsive.phone}) {
    & + button {
        right: 2%;
    }
  }
    @media only screen and (max-width: ${(props) => props.theme.responsive.phone}) {    
      width: 90%;      
    }
  }
`;

const SearchButton = styled.button`
  position: absolute;
  font-size: 1.9rem;
  border: none;
  background-color: inherit;
  cursor: pointer;
  right: 5%;

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(2px);
  }
`;
