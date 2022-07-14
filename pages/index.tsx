import React from "react";
import { NextPage } from "next";
import List from "components/post/list";
import MainContainer from "components/styled/main-container";

const Index: NextPage = () => {
  return (
    <MainContainer>
      <>
        <List isSearch={false} listTitle="최신 핫딜" />
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
