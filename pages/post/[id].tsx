import axios from "axios";
import Post from "components/post";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";

const fetchAxios = (id: string, document: string) =>
  axios.get(`/api/${document}/${id}`).then(({ data }) => data);


const Index: React.FunctionComponent = () => {
  const router = useRouter();
  const postID = typeof router.query?.id === "string" ? router.query.id : "";

  const { isSuccess, data, isLoading, isError } = useQuery(
    ["getPost", postID],
    () => fetchAxios(postID, "post"),
    {
      enabled: postID.length > 0,
      staleTime: Infinity,
    }
  );

  const {
    isSuccess: commentsIsSuccess,
    data: commentsData,
    isLoading: commentsIsLoading,
    isError: commentsIsError,
  } = useQuery(["getComment", postID], 
    () => fetchAxios(postID, "comments"), {
    enabled: postID.length > 0,
    staleTime: Infinity,
  });

  if (isSuccess) {
    const result = data.result;    

    return (
      <>
        <Post
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
          postID={postID}
          commentsData={commentsData}
          commentsIsLoading={commentsIsLoading}
          commentsIsError={commentsIsError}
          commentsIsSuccess={commentsIsSuccess}
        />
      </>
    );
  }

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>오류가 발생하였습니다.</div>;
  }

  return <></>;
};

export default Index;

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getPost", id], () => fetchAxios(id, 'post'));

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
