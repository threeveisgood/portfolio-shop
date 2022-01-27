import React, { ReactElement } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import axios from "axios";

interface Props {}

interface Group {
  id?: any | null,
  title: string,
  description: string,
  published?: boolean,
}

const getPosts = () => {
  return fetch("api/posts").then((res: any) => res.json());
};

export default function posts({}: Props): ReactElement | string {
  const { isLoading, error, data, isFetching } = useQuery<Group[], Error>("posts", getPosts)
  
  if (isLoading) { return "로딩 중..." }

  if (error) return "An error has occurred: " + error.message
  
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


//닉네임, 제목, 내용(리치 텍스트), 쇼핑몰, 링크, 추천 수, 덧글, 이미지 링크 