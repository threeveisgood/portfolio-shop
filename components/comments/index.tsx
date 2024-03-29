import React, { useEffect } from "react";
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
  CtReplyButton,
  CtReplyIcon,
  CtReply,
  CtDeleteIcon,
} from "components/common/comments-list";
import { CommentCt, ListBox } from "components/comments/comments.styled";
import RepliesList from "components/comments/replies-list";
import AddComments from "components/comments/add-comment";
import Recommend from "components/comments/recommend";
import useCommentState from "hooks/state/useCommentState";
import useCommentStateActions from "hooks/state/useCommentStateActions";
import useDeleteComment from "hooks/useDeleteComment";
import { useSession } from "next-auth/client";
import { toast } from "react-hot-toast";
import AddReply from "./add-reply";
import { Comments } from "types/comments";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface CommentsListProps {
  postID: string;
  isSuccess: boolean;
  data: Comments | undefined;
  isLoading: boolean;
  isError: boolean;
}

const CommentsFeature: React.FunctionComponent<CommentsListProps> = ({
  postID,
  isSuccess,
  data,
  isLoading,
  isError,
}) => {
  const [session] = useSession();
  const { replyToggle } = useCommentState();
  const { initialize, changeReplyToggle } = useCommentStateActions();
  const isOwnComment = session && session.user?.email;

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

  const { mutate } = useDeleteComment(postID);

  if (isLoading) {
    return <div></div>;
  }

  if (isSuccess) {
    return (
      <CommentCt>
        <ListBox>
          {data &&
            data.comments.map((data) => {
              return (
                !data.isDeleted && (
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
                        <Recommend
                          _id={data._id}
                          postID={data.postID}
                          upVote={data.upVote}
                          likeUsers={data.likeUsers}
                          isReply={false}
                        />
                        <CtReplyButton onClick={() => onChangeToggle(data._id)}>
                          <CtReplyIcon />
                          &nbsp;답글
                        </CtReplyButton>
                        {isOwnComment === data.email && (
                          <CtReplyButton onClick={() => mutate(data._id)}>
                            <CtDeleteIcon />
                            &nbsp;삭제
                          </CtReplyButton>
                        )}
                      </CtSub>
                      <CtReply>
                        <AddReply
                          _id={data._id}
                          postID={data.postID}
                          repliedName={data.username}
                        />
                      </CtReply>
                      <RepliesList
                        repliedId={data._id}
                        replies={data.replies}
                        postID={data.postID}
                      />
                    </CtCard>
                  </div>
                )
              );
            })}
        </ListBox>
        <AddComments postID={postID} />
      </CommentCt>
    );
  }

  if (isError) {
    return <div>오류가 발생하였습니다...</div>;
  }
  return <></>;
};

export default CommentsFeature;
