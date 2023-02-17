import * as React from "react";
import { MdThumbUpOffAlt } from "react-icons/md";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { toast } from "react-hot-toast";
import usePostRecommend from "hooks/usePostRecommend";
import {
  FlexBoxColumn,
  RcButton,
  RcIcon,
  RcLikeCount,
} from "./recommend.styled";

interface IRecommendProps {
  likeCount: number;
  likeUsers: string[];
}

const Recommend: React.FunctionComponent<IRecommendProps> = ({
  likeCount,
  likeUsers,
}) => {
  const [session, loading] = useSession();
  const router = useRouter();
  const postID = typeof router.query?.id === "string" ? router.query.id : "";
  let isAlready;
  const isPost = true;

  const { mutate } = usePostRecommend(postID);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (session) {
      if (likeUsers.indexOf(String(session?.user?.email)) > -1) {
        isAlready = true;
        mutate({ id: postID, isAlready, isPost });
      } else {
        isAlready = false;
        mutate({ id: postID, isAlready, isPost });
      }
    } else {
      toast("추천을 하시려면 로그인 해주세요!");
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
