import { createAction, handleActions } from "redux-actions";
import { HYDRATE } from "next-redux-wrapper";
import produce from 'immer'

const SETIMAGELINKS = "addPost/SETIMAGELINKS";

export const setImageLinks = createAction(SETIMAGELINKS);

const initialState: any = {
  imageLinks: [],
};

const addPost = handleActions(
  {
    [HYDRATE]: (state: any, { payload: hydrate }) => ({ ...state, hydrate }),
    [SETIMAGELINKS]: (state: any, { payload }) => 
        produce(state, (draft: any) => {
            draft.imageLinks.push(payload)
        }),
  },
  initialState
);

export default addPost;
