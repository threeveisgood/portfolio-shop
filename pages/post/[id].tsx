import { getPost } from "api/getPost";
import Post from "components/post";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { dehydrate, QueryClient } from "react-query";

const Index: React.FunctionComponent = () => {
  return (
    <>
      <Post />
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getPost", id], () => getPost(id));

  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
