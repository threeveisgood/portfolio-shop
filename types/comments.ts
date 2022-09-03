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
}

interface replies extends Comment {
  repliedName: string;
}
[];

export interface Comments extends Comment {
  replies: replies;
}
[];
