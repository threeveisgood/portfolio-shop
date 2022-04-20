import React, { useEffect, useCallback } from "react";
import {
  CtCard,
  CtContents,
  CtDate,
  CtDot,
  CtInfo,
  CtUsername,
  CtSub,
  CtReplyButton,
  CtReplyIcon,
  CtReply,
  CtDeleteIcon,
} from "components/styled/comments-list";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "modules/comment";
import AddReply from "./add-reply";
import styled from "styled-components";
import { useMutation, useQueryClient } from "react-query";
import ReplyRecommend from "./reply-recommend";
import axios from "axios";

interface IRepliesListProps {
  repliedId: any;
  replies: any;
  postID: string;
}

const RepliesList: React.FunctionComponent<IRepliesListProps> = ({
  repliedId,
  replies,
  postID
}) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

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

  const { mutate } = useMutation(
    (_id: string) => {
      return axios.patch(`/api/reply/delete/${_id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getComments", postID]);
      },
    }
  );

  return (
    <>
      {replies &&
        replies.map((data: any) => {
          return (
            !data.isDeleted && (
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
                  <CtContents
                    dangerouslySetInnerHTML={{ __html: data.comment }}
                  />
                </div>
                <CtSub>
                  <ReplyRecommend
                    _id={data._id}
                    postID={data.postID}
                    upVote={data.upVote}
                    likeUsers={data.likeUsers}
                  />
                  <CtReplyButton onClick={onChangeToggle(data._id)}>
                    <CtReplyIcon />
                    &nbsp;답글
                  </CtReplyButton>
                  <CtReplyButton onClick={() => mutate(data._id)}>
                    <CtDeleteIcon />
                    &nbsp;삭제
                  </CtReplyButton>
                </CtSub>
                <CtReply>
                  <AddReply
                    _id={repliedId}
                    toggleID={data._id}
                    postID={data.postID}
                    repliedName={data.username}
                  />
                </CtReply>
              </CtCard>
            </RepliesBox>
            )
          );
        })}
    </>
  );
};

export default RepliesList;

const RepliesBox = styled.div`
  margin-left: 2.2rem;
`;

const CtRepliedName = styled.span`
  margin-right: 0.5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.gold};
  font-weight: 700;
`;
