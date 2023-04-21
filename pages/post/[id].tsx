import { fetchPosts } from "api-codes/fetchPosts";
import { getPost } from "api-codes/getPost";
import Post from "components/post";
import PostList from "components/post-list";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { dehydrate, QueryClient } from "react-query";

const Index: React.FunctionComponent = () => {
  return (
    <>
      <Post />
      <PostList />
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  const page = (context.params?.page as string) || "1";
  const pageNumber = Number(page);
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getPost", id], () => getPost(id));

  await queryClient.prefetchQuery(["posts", pageNumber], () =>
    fetchPosts(Number(page))
  );

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
