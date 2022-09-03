import * as React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Comments from "components/comments";
import LoadingSpinner from "components/styled/loading-spinner";
import usePost from "hooks/usePost";
import Recommend from "./recommend";
import DeleteEdit from "./delete-edit";
import { useDispatch } from "react-redux";
import { setOriginalPost } from "modules/write";
import { useSession } from "next-auth/client";
import useDeletePost from "hooks/useDeletePost";
import useIncreaseViews from "hooks/useIncreaseViews";
import useComments from "hooks/useComments";
import Content from "./content";

interface PostProps {}

const Post: React.FunctionComponent<PostProps> = ({}) => {
  const router = useRouter();
  const [session, loading] = useSession();
  const postID = typeof router.query?.id === "string" ? router.query.id : "";
  const dispatch = useDispatch();

  const { mutate } = useIncreaseViews();
  const deleteMutation = useDeletePost(postID);

  useEffect(() => {
    mutate({ id: postID });
  }, []);

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

    const onEdit = async () => {
      await dispatch(
        setOriginalPost({
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
        })
      );
      router.push("/write/add-post");
    };

    const onRemove = async () => {
      try {
        await deleteMutation.mutate();
        router.push(`/`);
      } catch (e: any) {
        console.log(e);
      }
    };

    const ownPost = (session && session.user?.email) === email;

    return (
      <ContentsContianer>
        <ContentsLayout>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>

          <DetailContainer>
            <Content
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

            {ownPost && <DeleteEdit onEdit={onEdit} onRemove={onRemove} />}

            <Comments
              data={commentsData}
              isLoading={commentsIsLoading}
              isError={commentsIsError}
              isSuccess={commentsIsSuccess}
              postID={postID}
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

const ContentsContianer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
`;

const ContentsLayout = styled.div`
  border-radius: 0.4rem;
  margin: 1rem 0 0;
  border-top: 6px solid ${(props) => props.theme.black};
  color: ${(props) => props.theme.black};
`;

const TitleContainer = styled.div`
  display: flex;
  padding: 2.5rem 4rem 0px;
  overflow: hidden;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    padding: 2.5rem 2rem 0px;
  }
`;

const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 600;
`;

const DetailContainer = styled.div`
  padding: 2rem 4rem;

  @media only screen and (max-width: ${(props) =>
      props.theme.responsive.phone}) {
    padding: 2rem 2rem;
  }
`;

const PriceAndCategoryContainer = styled.span`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
`;

const Price = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const Category = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

const Feature = styled(Category)``;

const StoreName = styled(Category)`
  margin-left: 1.5rem;
`;

const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 2.2rem;
  margin: 1.2rem 0 0rem;
  padding: 0.8rem 0;
  justify-content: space-between;
  font-size: 2.2rem;

  & + & {
    margin: 0;
  }
`;

const UserNameInformation = styled.span`
  padding-left: 0.5rem;
  font-size: 1.4rem;
`;

const FlexContainer = styled.span`
  display: flex;
  align-items: center;
`;

const Count = styled.span`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  font-size: 1.6rem;
  font-weight: 400;

  &.no-padding-left {
    padding-left: 0;
  }
`;

const CountNumber = styled.span`
  font-size: 1.4rem;
  padding-left: 0.2rem;
`;

const InformationMidDot = styled.span`
  padding-left: 0.8rem;
`;

const ProductURLContainer = styled.div`
  display: flex;
  padding: 0.8rem 0;
  margin-bottom: 3rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const LightWeight = styled.span`
  font-weight: 400;
`;

const MobileDateInfo = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  @media screen and (min-width: 680px) {
    display: none;
  }
`;

const DateInfo = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  @media screen and (max-width: 680px) {
    display: none;
  }
`;

const PostContent = styled.div`
  font-family: auto;
  font-size: 1.3125rem;
  color: #333130;
`;
