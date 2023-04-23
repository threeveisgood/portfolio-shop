import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OriginalPost } from "types/post";

export interface WriteState {
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
}

const initialState: WriteState = {
  title: "",
  body: "",
  price: "",
  productURL: "",
  imageLinks: [],
  username: "",
  shipping: "",
  store: "",
  category: "",
  originalPostId: "",
};

const writeSlice = createSlice({
  name: "write",
  initialState: initialState,
  reducers: {
    initialize: () => initialState,
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setPrice(state, action: PayloadAction<string>) {
      state.price = action.payload;
    },
    setProductURL(state, action: PayloadAction<string>) {
      state.productURL = action.payload;
    },
    setStore(state, action: PayloadAction<string>) {
      state.store = action.payload;
    },
    setShipping(state, action: PayloadAction<string>) {
      state.shipping = action.payload;
    },
    setImageLinks(state, action: PayloadAction<string[]>) {
      state.imageLinks = [...state.imageLinks, ...action.payload];
    },
    setDeleteImageLink(state, action: PayloadAction<string>) {
      state.imageLinks = state.imageLinks.filter(
        (imageLink) => imageLink !== action.payload
      );
    },
    setQuillBody(state, action: PayloadAction<string>) {
      state.body = action.payload;
    },
    setOriginalPost(state, action: PayloadAction<OriginalPost>) {
      state.title = action.payload.title;
      state.body = action.payload.body;
      state.price = action.payload.price;
      state.productURL = action.payload.productURL;
      state.imageLinks = action.payload.imageLinks;
      state.shipping = action.payload.shipping;
      state.store = action.payload.store;
      state.category = action.payload.category;
      state.originalPostId = action.payload.originalPostId;
    },
  },
});

export const {
  initialize,
  setTitle,
  setCategory,
  setPrice,
  setProductURL,
  setStore,
  setShipping,
  setImageLinks,
  setDeleteImageLink,
  setQuillBody,
  setOriginalPost,
} = writeSlice.actions;

export default writeSlice.reducer;
