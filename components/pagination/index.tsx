import * as React from "react";
import { useRouter } from "next/router";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import {
  PaginateUl,
  PaginateLi,
  PaginateArrowButton,
} from "./pagination.styled";

interface PaginationProps {
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  pathName: string;
  isSearch?: boolean;
  isCategory?: boolean;
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

              if (isSearch || isCategory) {
                router.push({
                  pathname: pathName,
                  query: { page: 1, value: value },
                });
              } else {
                router.push({
                  pathname: pathName,
                  query: { page: 1 },
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

              if (isSearch || isCategory) {
                router.push({
                  pathname: pathName,
                  query: { page: currentPage - 1, value: value },
                });
              } else {
                router.push({
                  pathname: pathName,
                  query: { page: currentPage - 1 },
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

              if (isSearch || isCategory) {
                router.push({
                  pathname: pathName,
                  query: { page: number, value: value },
                });
              } else {
                router.push({
                  pathname: pathName,
                  query: { page: number },
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

              if (isSearch || isCategory) {
                router.push({
                  pathname: pathName,
                  query: { page: currentPage + 1, value: value },
                });
              } else {
                router.push({
                  pathname: pathName,
                  query: { page: currentPage + 1 },
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

            if (isSearch || isCategory) {
              router.push({
                pathname: pathName,
                query: { page: pageDivider, value: value },
              });
            } else {
              router.push({
                pathname: pathName,
                query: { page: pageDivider },
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
