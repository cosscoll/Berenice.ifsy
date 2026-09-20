import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
import fsrsReducer from './fsrsSlice.js';
import ecosReducer from './ecosSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    fsrs: fsrsReducer,
    ecos: ecosReducer,
  },
});
