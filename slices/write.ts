import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    changeField(state, action: PayloadAction<{ key: string; value: any }>) {
      state[action.payload.key] = action.payload;
    },
    setImageLinks(state, action: PayloadAction<string[]>) {
      state.imageLinks = [...state.imageLinks, ...action.payload];
    },
    setOriginalPost(state, action: PayloadAction<WriteState>) {
      state.title = action.payload.title;
      state.body = action.payload.body;
      state.price = action.payload.price;
      state.productURL = action.payload.productURL;
      state.imageLinks = action.payload.imageLinks;
      state.username = action.payload.username;
      state.shipping = action.payload.shipping;
      state.store = action.payload.store;
      state.category = action.payload.category;
      state.originalPostId = action.payload.originalPostId;
    },
  },
});

export const { initialize, setImageLinks, setOriginalPost } =
  writeSlice.actions;

export default writeSlice.reducer;
