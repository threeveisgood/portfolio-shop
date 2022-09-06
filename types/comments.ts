export interface Comment {
  _id: string;
  comment: string;
  postID: string;
  username: string;
  email: string;
  date: Date;
  isDeleted: boolean;
  upVote: number;
  likeUsers: string[];
  replies: Replies;
}

export interface Reply {
  _id: string;
  comment: string;
  postID: string;
  username: string;
  email: string;
  date: Date;
  isDeleted: boolean;
  repliedName: string;
}

export interface Replies extends Reply {}
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

export interface CommentFormData {
  comment: string;
}

export interface AddReply {
  _id: string;
  comment: string;
  postID: string;
  repliedName?: string;
  replyID: string;
}