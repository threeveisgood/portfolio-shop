import React, { ReactElement } from "react";
import { dehydrate, QueryClient } from "react-query";
import { GetStaticProps } from "next";
import { fetchPosts } from "api-codes/fetchPosts";
import PostList from "components/post-list";

export default function posts(): ReactElement {
  return (
    <>
      <PostList isSearch={false} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const page = (context.params?.page as string) || "1";
  const pageNumber = Number(page);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts", pageNumber], () =>
    fetchPosts(Number(page))
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
