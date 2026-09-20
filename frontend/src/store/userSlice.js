import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { current: null, token: null },
  reducers: {
    setUser: (state, action) => {
      state.current = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.current = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
