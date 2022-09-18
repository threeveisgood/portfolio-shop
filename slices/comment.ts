import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommentState {
  contents: string;
  replyToggle: {
    _id: string;
    toggle: boolean;
  };
}

const initialState: CommentState = {
  contents: "",
  replyToggle: { _id: "", toggle: false },
};

const commentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {
    initialize: () => initialState,
    changeReplyToggle(
      state,
      action: PayloadAction<{ _id: string; toggle: boolean }>
    ) {
      state.replyToggle._id = action.payload._id;
      state.replyToggle.toggle = !action.payload.toggle;
    },
  },
});

export const { initialize, changeReplyToggle } = commentSlice.actions;

export default commentSlice.reducer;
