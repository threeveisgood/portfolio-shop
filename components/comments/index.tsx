import * as React from "react";
import AddComments from "./add-comment";
import CommentsList from "./comments-list";

const bson = require('bson');

interface CommentsProps {
  postID: string;
  commentsData: any;
  commentsIsLoading: any;
  commentsIsError: any;
  commentsIsSuccess: any;
}

const Comments: React.FunctionComponent<CommentsProps> = ({
  postID,
  commentsData,
  commentsIsLoading,
  commentsIsError,
  commentsIsSuccess,  
}) => {
  const _id = bson.ObjectId();

  return (
    <div>
      <CommentsList
        commentsData={commentsData}
        commentsIsLoading={commentsIsLoading}
        commentsIsError={commentsIsError}
        commentsIsSuccess={commentsIsSuccess}
      />
      <AddComments postID={postID} apiURL="comments" _id={_id} />
    </div>
  );
};

export default Comments;
