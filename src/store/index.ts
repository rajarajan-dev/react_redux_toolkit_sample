import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState = { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter + 1;
    },
    decrement(state, action) {
      state.counter - 1;
    },
    addBy(state, action) {
      state.counter + action.payload;
    },
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
