import { createAction, handleActions } from "redux-actions";
import { HYDRATE } from "next-redux-wrapper";
import produce from "immer";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD";
const SET_IMAGE_LINKS = "write/SET_IMAGE_LINKS";
const WRITE_POST = "write/WRITE_POST"

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
  ({ title, body, price, productURL, imageLinks, shipping, store, category }: any) => ({
    title,
    body,
    price,
    productURL,
    imageLinks,
    shipping,
    store,
    category
  })
)

const initialState = {
  title: "",
  body: "",
  price: "",
  productURL: "",
  imageLinks: [],
  username: "",
  shipping: "",
  store: "",
  category: ""
}

const write = handleActions(
  {
    [HYDRATE]: (state: any, { payload: hydrate }) => ({ ...state, hydrate }),
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state: any, { payload: { key, value } }: any) => ({
      ...state,
      [key]: value,
    }),
    [SET_IMAGE_LINKS]: (state: any, { payload }) =>
      produce(state, (draft: any) => {
        draft.imageLinks = [...payload];
      }),
  },
  initialState
)

export default write;
