import React from "react";
import { NextPage } from "next";
import PostList from "components/post-list";
import MainContainer from "components/common/main-container";
import { GetStaticProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import { fetchPosts } from "api-codes/fetchPosts";

const Index: NextPage = () => {
  return (
    <MainContainer>
      <>
        <PostList isSearch={false} listTitle="최신 핫딜" />
      </>
    </MainContainer>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageNumber = 1;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts", pageNumber], () =>
    fetchPosts(pageNumber)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Index;
