import React, { ReactElement } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import axios from "axios";

interface Props {}

const getPosts = () => {
  return fetch("api/posts").then((res: any) => res.json());
};

export default function posts({}: Props): ReactElement {
  const { isLoading, error, data, isFetching } = useQuery("posts", getPosts)
  
  return <div></div>;
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("posts", getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
