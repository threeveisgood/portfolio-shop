import * as React from "react";
import { CtVoteButton, CtVoteCount } from "components/styled/comments-list";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { useSession } from "next-auth/client";
import useCommentRecommend from "hooks/useCommentRecommend";
import { toast } from "react-hot-toast";

interface IRecommendProps {
  _id: string;
  postID: string;
  upVote: number;
  likeUsers: any;
}

const Recommend: React.FunctionComponent<IRecommendProps> = ({
  upVote,
  likeUsers,
  _id,
  postID,
}) => {
  const [session, loading] = useSession();
  let isAlready;
  let isPlus;

  const { mutate } = useCommentRecommend(postID);

  const handleUpVoteClick = (e: any) => {
    e.preventDefault();

    if (session) {
      if (likeUsers.indexOf(session?.user?.email) > -1) {
        isPlus = true;
        isAlready = true;
        mutate({ id: _id, isAlready, isPlus });
      } else {
        isPlus = true;
        isAlready = false;
        mutate({ id: _id, isAlready, isPlus });
      }
    } else {
      toast("추천을 하시려면 로그인 해주세요!");
    }
  };

  const handleDownVoteClick = (e: any) => {
    e.preventDefault();

    if (session) {
      if (likeUsers.indexOf(session?.user?.email) > -1) {
        isPlus = false;
        isAlready = true;
        mutate({ id: _id, isAlready, isPlus });
      } else {
        isPlus = false;
        isAlready = false;
        mutate({ id: _id, isAlready, isPlus });
      }
    } else {
      toast("추천을 하시려면 로그인 해주세요!");
    }
  };

  return (
    <>
      <CtVoteButton className="up-vote" onClick={handleUpVoteClick}>
        <BiUpvote />
      </CtVoteButton>
      <CtVoteCount>{upVote}</CtVoteCount>
      <CtVoteButton className="down-vote" onClick={handleDownVoteClick}>
        <BiDownvote />
      </CtVoteButton>
    </>
  );
};

export default Recommend;
