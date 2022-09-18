import { createAction, handleActions } from "redux-actions";
import { HYDRATE } from "next-redux-wrapper";
import { CommentState } from "types/comments";
import { PayloadComment } from "types/redux-state";

const INITIALIZE = "comments/INITIALIZE";
const CHANGE_FIELD = "comments/CHANGE_FIELD";
const COMMENTS_POST = "comments/comments_POST";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: PayloadComment) => ({
    key,
    value,
  })
);
export const commentsPost = createAction(
  COMMENTS_POST,
  ({ contents, replyToggle }: CommentState) => ({
    contents,
    replyToggle,
  })
);

const initialState: CommentState = {
  contents: "",
  replyToggle: { _id: "", toggle: false },
};

const comment = handleActions(
  {
    [HYDRATE]: (state, { payload: hydrate }) => ({ ...state, hydrate }),
    [INITIALIZE]: () => initialState,
    [CHANGE_FIELD]: (state, { key,value }: any) => ({
      ...state,
      [key]: value,
    }),
  },
  initialState
);

export default comment;
