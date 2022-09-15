interface Write {
  title: string;
  body: string;
  price: string;
  productURL: string;
  imageLinks: string[];
  store: string;
  shipping: string;
  category: string;
}

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

export interface WritePublish extends Write {
  username: string;
  _id: string;
}

export interface writeEdit extends Write {
  originalPostId: string;
}
