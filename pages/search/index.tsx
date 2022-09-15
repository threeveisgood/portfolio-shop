import React, { ReactElement } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { GetStaticProps } from "next";
import { fetchSearch } from "hooks/useSearch";
import PostList from "components/post-list";

export default function search(): ReactElement | string {
  return (
    <>
      <PostList isSearch={true} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const page = (context.params?.page as string) || "1";
  const value = context.params?.value;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["search", value, page], () =>
    fetchSearch(value, page)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
