import React, { ReactElement, useState, useEffect, useCallback } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { GetStaticProps } from "next";
import { fetchPosts } from "hooks/usePosts";
import List from "components/post/list";

export default function posts(): ReactElement | string {
  return (
    <>
     <List isSearch={false}/>
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
