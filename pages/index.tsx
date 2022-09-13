import React from "react";
import { NextPage } from "next";
import PostList from "components/post-list";
import MainContainer from "components/styled/main-container";

const Index: NextPage = () => {
  return (
    <MainContainer>
      <>
        <PostList isSearch={false} listTitle="최신 핫딜" />
      </>
    </MainContainer>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Index;
