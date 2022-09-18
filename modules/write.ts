import { createAction, handleActions } from "redux-actions";
import { HYDRATE } from "next-redux-wrapper";
import produce from "immer";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD";
const SET_IMAGE_LINKS = "write/SET_IMAGE_LINKS";
const WRITE_POST = "write/WRITE_POST";
const SET_ORIGINAL_POST = "write/SET_ORIGINAL_POST";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: any) => ({
    key,
    value,
  })
);
export const setImageLinks = createAction(SET_IMAGE_LINKS);
export const writePost = createAction(
  WRITE_POST,
  ({
    title,
    body,
    price,
    productURL,
    imageLinks,
    shipping,
    store,
    category,
  }: any) => ({
    title,
    body,
    price,
    productURL,
    imageLinks,
    shipping,
    store,
    category,
  })
);
export const setOriginalPost = createAction(
  SET_ORIGINAL_POST,
  (post: any) => post
);

const initialState = {
  title: "",
  body: "",
  price: "",
  productURL: "",
  imageLinks: [],
  username: "",
  shipping: "",
  store: "",
  category: "",
  originalPostId: null,
};

const write = handleActions(
  {
    [HYDRATE]: (state: any, { payload: hydrate }) => ({ ...state, hydrate }),
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state: any, { payload: { key, value } }: any) => ({
      ...state,
      [key]: value,
    }),
    [SET_IMAGE_LINKS]: (state: any, { payload }) =>
      produce(state, (draft: any) => {
        draft.imageLinks = [...payload];
      }),
    [SET_ORIGINAL_POST]: (state: any, { payload: post }) => ({
      ...state,
      title: post.title,
      body: post.body,
      price: post.price,
      productURL: post.productURL,
      imageLinks: post.imageLinks,
      username: post.username,
      shipping: post.shipping,
      store: post.store,
      category: post.category,
      originalPostId: post._id,
    }),
  },
  initialState
);

export default write;
