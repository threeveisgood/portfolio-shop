import axios from "axios";
import Contents from "components/post/contents";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useRouter } from 'next/router'
import { dehydrate, QueryClient, useQuery } from "react-query";

const fetchPost = (id: string) =>
  axios.get(`api/post/${id}`).then(({ data }) => data);


const Post: React.FunctionComponent = (props) => {
  const router = useRouter();
  const postID = typeof router.query?.id === "string" ? router.query.id : "";

  const { isSuccess, data, isLoading, isError } = useQuery(
    ["getPost", postID],
    () => fetchPost(postID),
    {
      enabled: postID.length > 0,
      staleTime: Infinity
    }
  )
  
  return (
    <>
      <Contents />
    </>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();


  await queryClient.prefetchQuery(["getPost", id], () => fetchPost(id));

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
