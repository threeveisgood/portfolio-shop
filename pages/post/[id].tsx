import axios from "axios";
import Contents from "components/post/contents";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useRouter } from 'next/router'
import { dehydrate, QueryClient, useQuery } from "react-query";

const fetchPost = (id: string) =>
  axios.get(`/api/post/${id}`).then(({ data }) => data);


const Post: React.FunctionComponent = () => {
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

  if (isSuccess) {
    const result = data.result

    return (
      <>
      <Contents
        title={result.title}
        body={result.body}
        price={result.price}
        productURL={result.productURL}
        imageLinks={result.imageLinks}
        username={result.username}
        shipping={result.shipping}
        store={result.store}
        date={result.date}
        category={result.category}
      />      
      {/* <Comments 
        id={postID}
      /> */}
      </>
    )
  }

  if (isLoading) {
    return <div>로딩 중...</div>
  }
  
  if (isError) {
    return (
      <div>오류가 발생하였습니다.</div>
    )
  }

  return (
    <>      
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
