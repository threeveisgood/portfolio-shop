import * as React from "react";
import { CtVoteButton, CtVoteCount } from "components/styled/comments-list";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { useMutation, useQueryClient } from "react-query";
import { useSession } from 'next-auth/client';
import axios from "axios";

interface IRecommendProps {
  _id: any;
  postID: any;
  upVote: any;
  likeUsers?: any;
}

const ReplyRecommend: React.FunctionComponent<IRecommendProps> = ({ upVote, likeUsers, _id, postID }) => {
  const queryClient = useQueryClient();
  const [session, loading] = useSession();
  let isAlready;
  let isPlus;

  const mutation = useMutation(
    (mutate: any) => axios.patch(`/api/recommend/reply/${_id}`, mutate),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getComments", postID]);
      },
    }
  );

  const handleUpVoteClick = (e: any) => {
    e.preventDefault();

    if (session) {      
        if (likeUsers.indexOf(session?.user?.email) > -1) {          
          isPlus = true;
          isAlready = true;
          mutation.mutate({ isAlready, isPlus, postID });
        } else {
          isPlus = true;
          isAlready = false;
          mutation.mutate({ isAlready, isPlus, postID });
        }      
      } else {
        alert('추천을 하시려면 로그인 해주세요!');
      }    
  }

  const handleDownVoteClick = (e: any) => {
    e.preventDefault();

    if (session) {      
        if (likeUsers.indexOf(session?.user?.email) > -1) {
          isPlus = false;
          isAlready = true;
          mutation.mutate({ isAlready, isPlus, postID });
        } else {
          isPlus = false;
          isAlready = false;
          mutation.mutate({ isAlready, isPlus, postID });
        }      
      } else {
        alert('추천을 하시려면 로그인 해주세요!');
      }    
  }

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

export default ReplyRecommend;
