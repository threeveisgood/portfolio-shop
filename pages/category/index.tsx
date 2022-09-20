import React, { ReactElement } from "react";
import PostList from "components/post-list";
import { dehydrate, QueryClient } from "react-query";
import { GetStaticProps } from "next";
import { fetchPosts } from "api/fetchPosts";

export default function category(): ReactElement {
  return (
    <>
      <PostList isCategory={true} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const page = (context.params?.page as string) || "1";
  const pageNumber = Number(page);
  const value = String(context.params?.value);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["category", value, pageNumber], () =>
    fetchPosts(Number(page))
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
