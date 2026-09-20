import { createSlice } from '@reduxjs/toolkit';

const fsrsSlice = createSlice({
  name: 'fsrs',
  initialState: { dueCount: 0 },
  reducers: {
    setDueCount: (state, action) => {
      state.dueCount = action.payload;
    },
  },
});

export const { setDueCount } = fsrsSlice.actions;
export default fsrsSlice.reducer;
