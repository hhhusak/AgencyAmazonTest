import { configureStore } from '@reduxjs/toolkit';
import performanceReducer from './performanceSlice';

const store = configureStore({
  reducer: {
    performance: performanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
