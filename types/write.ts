export interface WriteState {
  write: {
    title: string;
    body: string;
    price: string;
    productURL: string;
    imageLinks: string[];
    username: string;
    shipping: string;
    store: string;
    category: string;
    originalPostId: string;
  };
}

export interface Write {
  title: string;
  body: string;
  price: string;
  productURL: string;
  imageLinks: string[];
  username: string;
  shipping: string;
  store: string;
  category: string;
  _id: string;
}
