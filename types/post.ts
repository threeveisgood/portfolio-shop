export interface Post {
  message: string;
  result: {
    body: string;
    category: string;
    _id: string;
    title: string;
    price: string;
    productURL: string;
    imageLinks: string[];
    username: string;
    store: string;
    shipping: string;
    email: string;
    date: Date;
    likeCount: number;
    likeUsers: string[];
    viewsCount: number;
    repliesCount: number;
  };
}

export interface OriginalPost {
  title: string;
  body: string;
  price: string;
  productURL: string;
  imageLinks: string[];
  shipping: string;
  store: string;
  category: string;
  originalPostId: string;
}
