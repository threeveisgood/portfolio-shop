import React, { ReactElement } from "react";
import { dehydrate, QueryClient } from "react-query";
import { GetStaticProps } from "next";
import List from "components/post/list";
import { fetchCategory } from "hooks/useCategory";

export default function category(): ReactElement | string {
  return (
    <>
      <List isCategory={true} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context: any) => {
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
