import React, { ReactElement } from "react";
import { dehydrate, QueryClient } from "react-query";
import { GetStaticProps } from "next";
import PostList from "components/post-list";
import { fetchCategory } from "hooks/useCategory";

export default function category(): ReactElement | string {
  return (
    <>
      <PostList isCategory={true} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const page = (context.params?.page as string) || "1";
  const value = context.params?.value;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["category", value, page], () =>
    fetchCategory(value, page)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
