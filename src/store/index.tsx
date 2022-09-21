import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    counter
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;