import { createSlice } from '@reduxjs/toolkit';

const ecosSlice = createSlice({
  name: 'ecos',
  initialState: { sessionActive: false, scenarioId: null },
  reducers: {
    sessionStarted: (state, action) => {
      state.sessionActive = true;
      state.scenarioId = action.payload;
    },
    sessionEnded: (state) => {
      state.sessionActive = false;
      state.scenarioId = null;
    },
  },
});

export const { sessionStarted, sessionEnded } = ecosSlice.actions;
export default ecosSlice.reducer;
