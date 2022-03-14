import * as React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import AddComments from "./add-comment";

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
  commentsIsSuccess
}) => {  
  if (commentsIsSuccess) {
  const list = commentsData.comments;

  return (
    <ListBox>
      {list.map((data: any) => {
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
              <CtVoteCount>0</CtVoteCount>
              <CtVoteButton className="down-vote">
                <BiDownvote />
              </CtVoteButton>
            </CtSub>
            <div>
              <AddComments postID={data._id} apiURL="reply" _id={data._id} repliedName={data.username} />
            </div>
          </CtCard>
        );      
      })}    
    </ListBox>
  );
 }

 if (commentsIsLoading) {
   return <div>로딩 중...</div>
 }

 if (commentsIsError) {
   return <div>오류가 발생하였습니다...</div>
 }
 return <></>
};

export default CommentsList;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d6d6d6;
  margin-top: 3.5rem;
  font-size: 1.3rem;
`;

const CtCard = styled.div`
  padding: 1rem 1rem;
`;

const CtInfo = styled.div`
  margin-bottom: 1rem;
`;

const CtUsername = styled.span`
  font-weight: 700;
  font-size: 1.4rem;
  color: ${(props) => props.theme.black};
`;

const CtDate = styled.span`
  margin-left: 0.7rem;
  font-size: 1.1rem;
  color: ${(props) => props.theme.gray};
`;

const CtContents = styled.span``;

const CtDot = styled.span`
  font-size: 1.4rem;
  margin-right: 0.7rem;
`;

const CtSub = styled.div`
  display: flex;
  margin-top: 1.1rem;
`;

const CtVoteButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 2rem;

  &.up-vote {
    color: ${props => props.theme.gold};
  }

  &.down-vote {
    color: #909191;
    opacity: 0.8;
  }
`;

const CtVoteCount = styled.span`
  margin: 0 0.3rem;
`;
