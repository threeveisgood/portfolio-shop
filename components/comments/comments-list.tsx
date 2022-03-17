import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  CtCard,
  CtInfo,
  CtUsername,
  CtDate,
  CtContents,
  CtDot,
  CtSub,
  CtVoteButton,
  CtVoteCount,
  CtReplyButton,
  CtReplyIcon,
  CtReply,
} from "components/styled/comments-list";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import AddReply from "./add-reply";
import RepliesList from "./replies-list";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "modules/comment";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface CommentsListProps {
  commentsData: any;
  commentsIsLoading: any;
  commentsIsError: any;
  commentsIsSuccess: any;
}

const CommentsList: React.FunctionComponent<CommentsListProps> = ({
  commentsData,
  commentsIsLoading,
  commentsIsError,
  commentsIsSuccess,
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

  if (commentsIsSuccess) {
    const list = commentsData.comments;

    return (
      <ListBox>
        {list && list.map((data: any) => {          
          return (
            <div key={data._id}>
            <CtCard>
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
              <RepliesList replies={data.replies} />
            </CtCard>
          </div>
          );
        })}
      </ListBox>
    );
  }

  if (commentsIsLoading) {
    return <div>로딩 중...</div>;
  }

  if (commentsIsError) {
    return <div>오류가 발생하였습니다...</div>;
  }
  return <></>;
};

export default CommentsList;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d6d6d6;
  margin-top: 3.5rem;
  font-size: 1.3rem;
`;