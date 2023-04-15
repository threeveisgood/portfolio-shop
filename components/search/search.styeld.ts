import styled from "styled-components";

interface SearchStyledProps {
  readonly isMobile?: boolean;
  readonly searchToggle?: boolean;
}

export const SearchForm = styled.form<SearchStyledProps>`
  flex: 0 0 24%;
  display: ${(props) => (props.isMobile ? "none" : "flex")};
  position: relative;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    display: ${(props) => (props.isMobile ? "flex" : "none")};
    margin-bottom: 0.7rem;

    display: ${(props) => (props.searchToggle ? "flex" : "none")};
  }
`;

export const SearchInput = styled.input`
  background: ${(props) => props.theme.black};
  font-family: inherit;
  font-size: inherit;
  color: #fff;
  border: none;
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
  transition: all 0.2s;
  border-radius: 2.6rem;
  height: 1.5rem;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  position: absolute;
  font-size: 1.9rem;
  border: none;
  background-color: inherit;
  color: #fff;
  cursor: pointer;
  right: 1.5rem;

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(2px);
  }
`;
