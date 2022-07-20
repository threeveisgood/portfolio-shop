import { FlexBox } from "components/styled/flexbox";
import * as React from "react";
import styled from "styled-components";
import { MdThumbUpOffAlt } from "react-icons/md";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

interface IRecommendProps {
  likeCount: any;
  likeUsers: any;
}

const Recommend: React.FunctionComponent<IRecommendProps> = ({
  likeCount,
  likeUsers,
}) => {
  const queryClient = useQueryClient();
  const [session, loading] = useSession();
  const router = useRouter();
  const postID = typeof router.query?.id === "string" ? router.query.id : "";
  let isAlready;

  const mutation = useMutation(
    (isAlready: any) => axios.patch(`/api/recommend/${postID}`, isAlready),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getPost", postID]);
      },
    }
  );

  const handleClick = (e: any) => {
    e.preventDefault();

    if (session) {
      if (likeUsers.indexOf(session?.user?.email) > -1) {
        isAlready = true;
        mutation.mutate({ isAlready });
      } else {
        isAlready = false;
        mutation.mutate({ isAlready });
      }
    } else {
      alert("추천을 하시려면 로그인 해주세요!");
    }
  };

  return (
    <FlexBoxColumn>
      <RcButton onClick={handleClick}>
        <RcLikeCount>{likeCount}</RcLikeCount>
        <RcIcon>
          <MdThumbUpOffAlt />
        </RcIcon>
      </RcButton>
    </FlexBoxColumn>
  );
};

export default Recommend;

const FlexBoxColumn = styled(FlexBox)`
  margin-top: 5rem;
  padding-bottom: 2.2rem;
`;

const RcButton = styled.button`
  color: ${(props) => props.theme.white};
  background: transparent;
  padding: 0.3rem 0rem;
  border-radius: 0.4rem;
  border: none;
  background: ${(props) => props.theme.black};
  min-width: 38px;
  cursor: pointer;
`;

const RcIcon = styled.div`
  font-size: 1.6rem;
  padding-top: 0.3rem;
`;

const RcLikeCount = styled.div`
  font-size: 1.2rem;
  padding-top: 0.5rem;
`;
