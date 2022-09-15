import * as React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Comments from "components/comments";
import LoadingSpinner from "components/common/loading-spinner";
import usePost from "hooks/usePost";
import Recommend from "components/post/recommend";
import DeleteEdit from "./delete-edit";
import { useSession } from "next-auth/client";
import useIncreaseViews from "hooks/useIncreaseViews";
import Contents from "components/post/contents";
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

  const { mutate } = useIncreaseViews();

  useEffect(() => {
    mutate({ id: postID });
  }, []);

  const { isSuccess, data, isLoading, isError } = usePost(postID);

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
                date={date}
                username={username}
                productURL={productURL}
                imageLinks={imageLinks}
                body={body}
                viewsCount={viewsCount}
                likeCount={likeCount}
                likeUsers={likeUsers}
                repliesCount={repliesCount}
                email={email}
                _id={_id}
              />
            )}

            <Comments postID={postID} />
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
