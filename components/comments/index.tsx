import * as React from 'react';
import AddComments from './add-comment';
import CommentsList from './comments-list';

interface CommentsProps {
  commentsData: any;
  postID: string;
}

const Comments: React.FunctionComponent<CommentsProps> = ({ commentsData, postID }) => {
  return (
      <div>
        <CommentsList commentsData={commentsData} />
        <AddComments postID={postID} />
      </div>
  )
};

export default Comments;
