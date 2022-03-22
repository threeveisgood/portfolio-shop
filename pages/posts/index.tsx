import React, { ReactElement, useState, useEffect } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { GetStaticProps } from "next";
import { fetchPosts, usePosts } from "hooks/usePosts";
import List from "components/post/list";

interface Props {}

export default function posts({}: Props): ReactElement | string {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const { isLoading, isError, data, isSuccess } = usePosts(currentPage);  

  if (isSuccess) {
    const { count, result } = data;

    return (
      <List
        result={result}
        count={count}
        paginate={paginate}
        currentPage={currentPage}
      />
    );
  }

  if (isLoading) {
    return "로딩 중...";
  }

  if (isError) return "An isError has occurred: " + isError;

  return <div></div>;
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const page = (context.params?.page as string) || "1";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts", page], () => fetchPosts(page));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

