import * as React from "react";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

interface PaginationProps {  
  totalPosts: number;
  paginate: any;
  currentPage: number;
  pathName: string;
  isSearch?: boolean;
  isCategory?: boolean;
}

interface PaginateLiProps {
  readonly page?: any;
  readonly currentPage?: any;
}

const Pagination: React.FunctionComponent<PaginationProps> = ({  
  totalPosts,
  paginate,
  currentPage,
  pathName,
  isSearch,
  isCategory,
}) => {
  const router = useRouter();
  const { value } = router.query; 
  const pageNumbers = [];
  const postsPerPage = 20;

  const pageDivider = Math.ceil(totalPosts / postsPerPage);

  if (currentPage > 7 && currentPage === pageDivider) {
    for (let i = currentPage - 7; i <= pageDivider; i++) {
      pageNumbers.push(i);
    }
  } else if (currentPage > 7 && currentPage != pageDivider) {
    for (let i = currentPage - 3; i <= currentPage + 3; i++) {
      if (i <= pageDivider) pageNumbers.push(i);
    }
  } else {
    for (let i = currentPage; i <= currentPage + 6; i++) {
      if (i <= pageDivider) pageNumbers.push(i);
    }
  }

  const pageNumbersLastValue = pageNumbers[pageNumbers.length - 1];

  return (
    <nav>
      <PaginateUl>
        <PaginateArrowButton
          key="first"
          onClick={() => {
            if (currentPage != 1) {
              paginate(1);
              
              if(isSearch || isCategory) {
                router.push({
                  pathname: pathName,
                  query: { page: 1, value: value},
                });
              } else {
                router.push({
                  pathname: pathName,
                  query: { page: 1}
                });
              }     
            }
          }}
          page={null}
        >
          <FiChevronsLeft />
        </PaginateArrowButton>
        <PaginateArrowButton
          key="back"
          onClick={() => {
            if (currentPage != 1) {
              paginate(currentPage - 1);

              if(isSearch || isCategory) {
                router.push({
                  pathname: pathName,
                  query: { page: currentPage - 1, value: value},
                });
              } else {
                router.push({
                  pathname: pathName,
                  query: { page: currentPage - 1 }
                });
              }   
            }
          }}
          page={null}
        >
          <FiChevronLeft />
        </PaginateArrowButton>

        {pageNumbers.map((number) => (
          <PaginateLi
            key={number}
            onClick={() => {
              paginate(number);

              if(isSearch || isCategory) {
                router.push({
                  pathname: pathName,
                  query: { page: number, value: value},
                });
              } else {
                router.push({
                  pathname: pathName,
                  query: { page: number }
                });
              }   
            }}
            page={number}
            currentPage={currentPage}
          >
            {number}
          </PaginateLi>
        ))}
        <PaginateArrowButton
          key="forward"
          onClick={() => {
            if (currentPage < pageNumbersLastValue) {
              paginate(currentPage + 1);

              if(isSearch || isCategory) {
                router.push({
                  pathname: pathName,
                  query: { page: currentPage + 1, value: value},
                });
              } else {
                router.push({
                  pathname: pathName,
                  query: { page: currentPage + 1 }
                });
              }   
            }
          }}
          page={null}
        >
          <FiChevronRight />
        </PaginateArrowButton>
        <PaginateArrowButton
          key="last"
          onClick={() => {
            paginate(pageDivider);

            if(isSearch || isCategory) {
              router.push({
                pathname: pathName,
                query: { page: pageDivider, value: value},
              });
            } else {
              router.push({
                pathname: pathName,
                query: { page: pageDivider }
              });
            }   
          }}
          page={null}
        >
          <FiChevronsRight />
        </PaginateArrowButton>
      </PaginateUl>
    </nav>
  );
};

export default Pagination;

const PaginateUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
`;

const PaginateLi = styled.li<PaginateLiProps>`
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

const PaginateArrowButton = styled(PaginateLi)`
  padding-top: 0.35rem;
`;
