import React, { useEffect } from "react";
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
} from "components/common/comments-list";
import dayjs from "dayjs";
import AddReply from "components/comments/add-reply";
import Recommend from "components/comments/recommend";
import useCommentState from "hooks/state/useCommentState";
import useCommentStateActions from "hooks/state/useCommentStateActions";
import useDeleteReply from "hooks/useDeleteReply";
import { Replies, Reply } from "types/comments";
import { useSession } from "next-auth/client";
import { toast } from "react-hot-toast";
import { RepliesBox, CtRepliedName } from "./replies-list.styled";

interface IRepliesListProps {
  repliedId: string;
  replies: Replies;
  postID: string;
}

const RepliesList: React.FunctionComponent<IRepliesListProps> = ({
  repliedId,
  replies,
  postID,
}) => {
  const [session] = useSession();
  const { replyToggle } = useCommentState();
  const { initialize, changeReplyToggle } = useCommentStateActions();
  const isOwnReply = session && session.user?.email;

  useEffect(() => {
    return () => {
      initialize();
    };
  }, [initialize]);

  const onChangeToggle = (id: string) => {
    if (session) {
      changeReplyToggle({
        _id: id,
        toggle: replyToggle.toggle,
      });
    } else {
      toast("답글을 입력하시려면 로그인 해주세요!");
    }
  };

  const { mutate } = useDeleteReply(postID);

  return (
    <>
      {replies &&
        replies instanceof Array &&
        replies.map((data: Reply) => {
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
                    <Recommend
                      _id={data._id}
                      postID={data.postID}
                      upVote={data.upVote}
                      likeUsers={data.likeUsers}
                      isReply={true}
                    />
                    <CtReplyButton onClick={() => onChangeToggle(data._id)}>
                      <CtReplyIcon />
                      &nbsp;답글
                    </CtReplyButton>
                    {isOwnReply === data.email && (
                      <CtReplyButton onClick={() => mutate(data._id)}>
                        <CtDeleteIcon />
                        &nbsp;삭제
                      </CtReplyButton>
                    )}
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
