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
} from "components/styled/comments-list";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "modules/comment";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { BsReplyFill } from "react-icons/bs";
import AddReply from "./add-reply";


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
          <CtCard key={data._id}>
            <CtInfo>
              <CtUsername>{data.username}</CtUsername>
              <CtDate>
                <CtDot>&#183;</CtDot>
                {dayjs().to(dayjs(data.date))}{" "}
              </CtDate>
            </CtInfo>
            <CtContents dangerouslySetInnerHTML={{ __html: data.comment }} />
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
                &nbsp;답답글
              </CtReplyButton>
            </CtSub>
            <CtReply>
              <AddReply
                apiURL="reply"
                _id={data.postID}
                repliedName={data.username}
              />
            </CtReply>
          </CtCard>
        );
      })}
    </>
  );
};

export default RepliesList;
