import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter", // Name of the slice
  initialState: initialState, // Initial state
  reducers: {
    // Reducer to increment the counter
    increment: (state) => {
      state.value += 1;
    },
    // Reducer to decrement the counter
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    // Reducer to add a custom number to the counter
    addCustomNumber: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export the actions
export const { increment, decrement, addCustomNumber } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
