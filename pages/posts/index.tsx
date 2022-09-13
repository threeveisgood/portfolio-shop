import React, { ReactElement } from "react";
import { dehydrate, QueryClient } from "react-query";
import { GetStaticProps } from "next";
import { fetchPosts } from "hooks/usePosts";
import PostList from "components/post-list";

export default function posts(): ReactElement | string {
  return (
    <>
      <PostList isSearch={false} />
    </>
  );
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
