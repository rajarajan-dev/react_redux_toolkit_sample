import { createStore, Action } from "redux";

export interface AppState {
  counter: number;
  error: string | null; // Add an error field to the state
}

const initialState: AppState = {
  counter: 0,
  error: null, // Initialize error as null
};

// Define a new action type with a payload
interface AddCustomNumberAction extends Action<string> {
  payload: number;
}

const reducerFn = (
  state: AppState = initialState,
  action: AddCustomNumberAction
): AppState => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1, error: null }; // Reset error on increment
    case "DEC":
      if (state.counter > 0) {
        return { ...state, counter: state.counter - 1, error: null }; // Reset error on valid decrement
      } else {
        return { ...state, error: "Counter cannot go below 0!" }; // Set error message
      }
    case "ADD":
      if (state.counter + action.payload > 0) {
        return {
          ...state,
          counter: state.counter + action.payload,
          error: null,
        }; // Reset error on valid decrement
      } else {
        return {
          ...state,
          error: "Counter cannot add " + action.payload + "!",
        }; // Set error message
      }
    case "CLEAR_ERROR":
      return { ...state, error: null }; // Clear the error
    default:
      return state;
  }
};

const store = createStore(reducerFn);

export default store;
