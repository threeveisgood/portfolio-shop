import Card from "components/post/card";
import React, { ReactElement, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Pagination from "components/pagination";
import { useSearch } from "hooks/useSearch";
import { useRouter } from "next/router";
import { usePosts } from "hooks/usePosts";
import LoadingSpinner from "components/styled/loading-spinner";

interface ListProps {
  isSearch?: boolean;
}

function List({ isSearch }: ListProps): ReactElement {
  const router = useRouter();
  const { value } = router.query;
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

  const { isLoading, isError, data, isFetching } = isSearch ? useSearch(
    value,
    currentPage
  ) : usePosts(currentPage);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <div>Error: {isError}</div>
      ) : (
        <MainContainer>
          <CardUl>
            {data && data.result.map((data: any) => {
              return (
                <Card
                  key={data._id}
                  title={data.title}
                  imageLinks={data.imageLinks}
                  price={data.price}
                  shipping={data.shipping}
                  store={data.store}
                  username={data.username}
                />
              );
            })}
          </CardUl>
          <div>
            <Pagination
              totalPosts={data.count}
              paginate={paginate}
              currentPage={currentPage}
              pathName={``}
              isSearch={isSearch}
            />
          </div>
          {isFetching ? <span></span> : null}
        </MainContainer>
      )}
    </>
  );
}

export default List;

const MainContainer = styled.div`
  max-width: 1330px;
  margin: 0 auto;
`;

const CardUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  gap: ${(props) => props.theme.gap.card};

  justify-content: center;
`;
