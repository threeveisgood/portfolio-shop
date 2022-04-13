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
import AddComments from "./add-comment";
import Recommend from "./recommend";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface CommentsListProps {
  data: any;
  isLoading: any;
  isError: any;
  isSuccess: any;
  postID: any;
}

const Comments: React.FunctionComponent<CommentsListProps> = ({
  data,
  isLoading,
  isError,
  isSuccess,
  postID,
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

  if (isSuccess) {
    const list = data.comments;

    return (
      <div>
        <ListBox>
          {list &&
            list.map((data: any) => {
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
                    <CtContents
                      dangerouslySetInnerHTML={{ __html: data.comment }}
                    />
                    <CtSub>
                      <Recommend _id={data._id} postID={data.postID} upVote={data.upVote} likeUsers={data.likeUsers} />
                      <CtReplyButton onClick={onChangeToggle(data._id)}>
                        <CtReplyIcon />
                        &nbsp;답글
                      </CtReplyButton>
                    </CtSub>
                    <CtReply>
                      <AddReply
                        _id={data._id}
                        postID={data.postID}
                        repliedName={data.username}
                      />
                    </CtReply>
                    <RepliesList repliedId={data._id} replies={data.replies} />
                  </CtCard>
                </div>
              );
            })}
        </ListBox>
        <AddComments postID={postID} />
      </div>
    );
  }

  if (isLoading) {
    return <div></div>;
  }

  if (isError) {
    return <div>오류가 발생하였습니다...</div>;
  }
  return <></>;
};

export default Comments;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;  
  font-size: 1.3rem;
`;
