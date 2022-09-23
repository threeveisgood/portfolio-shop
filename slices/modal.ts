import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  visible: boolean;
}

const initialState: ModalState = {
  visible: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    initialize: () => initialState,
    visibleToggle(state, action: PayloadAction<ModalState>) {
      state.visible = !action.payload.visible;
    },
  },
});

export const { initialize, visibleToggle } = modalSlice.actions;

export default modalSlice.reducer;
