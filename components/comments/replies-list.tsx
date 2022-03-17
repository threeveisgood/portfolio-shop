import React, { useEffect, useCallback } from "react";
import {
  CtCard,
  CtContents,
  CtDate,
  CtDot,
  CtInfo,
  CtUsername,
  CtSub,
  CtVoteButton,
  CtVoteCount,
  CtReplyButton,
  CtReplyIcon,
  CtReply,
  CtReplyTailIcon,
} from "components/styled/comments-list";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "modules/comment";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import AddReply from "./add-reply";
import styled from 'styled-components';

interface IRepliesListProps {
  replies: any;
}

const RepliesList: React.FunctionComponent<IRepliesListProps> = ({
  replies,
}) => {
  const dispatch = useDispatch();

  const { replyToggle } = useSelector(({ comment }: any) => ({
    replyToggle: comment.replyToggle,
  }));

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  const onChangeToggle = (id: any) => {
    return (e: any) =>
      onChangeField({
        key: "replyToggle",
        value: { _id: id, toggle: !replyToggle.toggle },
      });
  };

  return (
    <>
      {replies && replies.map((data: any) => {
        return (
          <RepliesBox>
          <CtCard key={data._id}>            
            <CtInfo>              
              <CtUsername>{data.username}</CtUsername>
              <CtDate>
                <CtDot>&#183;</CtDot>
                {dayjs().to(dayjs(data.date))}{" "}
              </CtDate>
            </CtInfo>
            <div>
            <CtRepliedName>@{data.repliedName}</CtRepliedName>
            <CtContents dangerouslySetInnerHTML={{ __html: data.comment }} />
            </div>
            <CtSub>
              <CtVoteButton className="up-vote">
                <BiUpvote />
              </CtVoteButton>
              <CtVoteCount>{data.upVote}</CtVoteCount>
              <CtVoteButton className="down-vote">
                <BiDownvote />
              </CtVoteButton>
              <CtReplyButton onClick={onChangeToggle(data._id)}>
                <CtReplyIcon />
                &nbsp;답글
              </CtReplyButton>
            </CtSub>
            <CtReply>
              <AddReply
                apiURL="reply"
                _id={data._id}
                postID={data.postID}
                repliedName={data.username}                
              />
            </CtReply>
          </CtCard>
          </RepliesBox>
        );
      })}
    </>
  );
};

export default RepliesList;

const RepliesBox = styled.div`
  margin-left: 2.2rem;
`;

const TailBox = styled.span`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`

const RepliesCtCard = styled.span`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
`;

const CtRepliedName = styled.span`  
  margin-right: 0.5rem;
  font-size: 1.2rem;
  color: ${props => props.theme.gold};
  font-weight: 700;
`