import React from "react";
import { NextPage } from "next";
import MainSlidesFavorite from "components/swiper/main-slides-favorite";

const Index: NextPage = () => {
  return (
    <>
      <MainSlidesFavorite />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Index;
