import styled, { css } from "styled-components";

interface PaginateLiProps {
  readonly page?: any;
  readonly currentPage?: any;
}

export const PaginateUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
`;

export const PaginateLi = styled.li<PaginateLiProps>`
  color: ${(props) => props.theme.black};
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.1rem 0.6rem;
  margin: 0.1rem 0.3rem;
  text-align: center;
  ${(props) =>
    props.page === props.currentPage &&
    css`
      border-bottom: 1px solid gray;
      pointer-events: none;
      border-radius: 2px;
      background: ${(props) => props.theme.black};
      color: white;
    `}
`;

export const PaginateArrowButton = styled(PaginateLi)`
  padding-top: 0.35rem;
`;
