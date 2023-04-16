import * as React from "react";
import { useRouter } from "next/router";
import CommentsFeature from "components/comments";
import LoadingSpinner from "components/common/loading-spinner";
import usePost from "hooks/usePost";
import Recommend from "components/post/recommend";
import { useSession } from "next-auth/client";
import Contents from "components/post/contents";
import useComments from "hooks/useComments";
import DeleteEdit from "./delete-edit";
import {
  ContentsContianer,
  ContentsLayout,
  TitleContainer,
  Title,
  DetailContainer,
} from "./post.styled";

interface PostProps {}

const Post: React.FunctionComponent<PostProps> = ({}) => {
  const router = useRouter();
  const [session] = useSession();
  const postID = typeof router.query?.id === "string" ? router.query.id : "";

  const { isSuccess, data, isLoading, isError } = usePost(postID);
  const {
    isSuccess: commentsIsSuccess,
    data: commentsData,
    isLoading: commentsIsLoading,
    isError: commentsIsError,
  } = useComments(postID);

  if (isSuccess) {
    const {
      title,
      price,
      category,
      shipping,
      store,
      date,
      username,
      productURL,
      imageLinks,
      body,
      viewsCount,
      likeCount,
      likeUsers,
      repliesCount,
      email,
      _id,
    } = data.result;

    const ownPost = (session && session.user?.email) === email;

    return (
      <ContentsContianer>
        <ContentsLayout>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>

          <DetailContainer>
            <Contents
              price={price}
              category={category}
              shipping={shipping}
              store={store}
              date={date}
              username={username}
              viewsCount={viewsCount}
              repliesCount={repliesCount}
              productURL={productURL}
              imageLinks={imageLinks}
              body={body}
            />

            <Recommend likeCount={likeCount} likeUsers={likeUsers} />

            {ownPost && (
              <DeleteEdit
                postID={postID}
                title={title}
                price={price}
                category={category}
                shipping={shipping}
                store={store}
                productURL={productURL}
                imageLinks={imageLinks}
                body={body}
                _id={_id}
              />
            )}

            <CommentsFeature
              postID={postID}
              isSuccess={commentsIsSuccess}
              data={commentsData}
              isLoading={commentsIsLoading}
              isError={commentsIsError}
            />
          </DetailContainer>
        </ContentsLayout>
      </ContentsContianer>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>오류가 발생하였습니다.</div>;
  }

  return <></>;
};

export default Post;
