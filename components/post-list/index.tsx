import Card from "components/post-list/card";
import React, { ReactElement, useState, useEffect, useCallback } from "react";
import Pagination from "components/pagination";
import { useSearch } from "hooks/useSearch";
import { useRouter } from "next/router";
import usePosts from "hooks/usePosts";
import LoadingSpinner from "components/common/loading-spinner";
import useCategory from "hooks/useCategory";
import ListTitle from "./list-title";
import { MainContainer, CardUl } from "./post-list.styled";

interface ListProps {
  isSearch?: boolean;
  isCategory?: boolean;
  listTitle?: string;
}

function PostList({
  isSearch,
  isCategory,
  listTitle,
}: ListProps): ReactElement {
  const router = useRouter();
  const { value } = router.query;
  const valueString = String(value);
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = useCallback(
    (pageNumber: number) => {
      setCurrentPage(pageNumber);
    },
    [currentPage]
  );

  useEffect(() => {
    if (router && router.query) {
      setCurrentPage(Number(router.query.page) || 1);
    }
  }, []);

  const { isLoading, isError, data, isFetching } = isSearch
    ? useSearch(valueString, currentPage)
    : isCategory
    ? useCategory(valueString, currentPage)
    : usePosts(currentPage);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <div>Error: {isError}</div>
      ) : (
        <MainContainer>
          <ListTitle title={listTitle} />
          <CardUl>
            {data.result &&
              data.result.map((data: any) => {
                return (
                  <Card
                    key={data._id}
                    id={data._id}
                    title={data.title}
                    imageLinks={data.imageLinks}
                    price={data.price}
                    shipping={data.shipping}
                    store={data.store}
                    username={data.username}
                    likeCount={data.likeCount}
                    repliesCount={data.repliesCount}
                  />
                );
              })}
          </CardUl>
          <div>
            <Pagination
              totalPosts={data.count}
              paginate={paginate}
              currentPage={currentPage}
              pathName={isSearch ? "search" : isCategory ? "category" : ``}
              isSearch={isSearch}
              isCategory={isCategory}
            />
          </div>
          {isFetching ? <span></span> : null}
        </MainContainer>
      )}
    </>
  );
}

export default PostList;
