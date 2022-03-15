import { createAction, handleActions } from "redux-actions";
import { HYDRATE } from "next-redux-wrapper";
import produce from "immer";

const INITIALIZE = "comments/INITIALIZE";
const CHANGE_FIELD = "comments/CHANGE_FIELD";
const COMMENTS_POST = "comments/comments_POST"

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: any) => ({
    key,
    value,
  })
);
export const commentsPost = createAction(
  COMMENTS_POST,
  ({ contents, replyToggle }: any) => ({
    contents, 
    replyToggle
  })
)

const initialState = {
  contents: "",
  replyToggle: { _id: '', toggle: false }
}

const comment = handleActions(
  {
    [HYDRATE]: (state: any, { payload: hydrate }) => ({ ...state, hydrate }),
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }: any) => ({
      ...state,
      [key]: value,
    }),
  },
  initialState
)

export default comment;
