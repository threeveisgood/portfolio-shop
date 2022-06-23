import React from "react";
import { NextPage } from "next";
import MainSlidesFavorite from "components/swiper/main-slides-favorite";
import List from "components/post/list";
import ListTitle from "components/post/list-title";
import MainContainer from "components/styled/main-container";

const Index: NextPage = () => {
  return (
    <MainContainer>
      <>
        <MainSlidesFavorite />
        <List isSearch={false} />
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
