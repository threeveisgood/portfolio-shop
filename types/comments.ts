interface Comment {
  _id: string;
  comment: string;
  postID: string;
  username: string;
  email: string;
  date: Date;
  isDeleted: boolean;
  upVote: number;
  likeUsers: string[];
  replies: replies;
}

interface replies extends Comment {
  repliedName: string;
}
[];

export interface Comments {
  comments: ReadonlyArray<Comment>;
}

export interface CommentState {
  comment: {
    contents: string;
    replyToggle: {
      _id: string;
      toggle: boolean;
    };
  };
}
