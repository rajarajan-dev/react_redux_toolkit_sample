import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./store";

function App() {
  // Correctly return the counter value from the selector function
  const counter = useSelector((state: AppState) => state.counter);
  const error = useSelector((state: AppState) => state.error); // Get the error state

  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {counter}</h1>
      {error && ( // Display error message if error exists
        <div style={{ color: "red", margin: "10px 0" }}>
          {error}
          <button
            onClick={() => dispatch({ type: "CLEAR_ERROR" })}
            style={{ marginLeft: "10px" }}
          >
            Dismiss
          </button>
        </div>
      )}
      <div className="card">
        <div className="button-container">
          <button
            onClick={() => {
              dispatch({ type: "INC" });
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatch({ type: "DEC" });
            }}
          >
            Decrement
          </button>
          <button
            onClick={() => {
              dispatch({ type: "ADD", payload: 10 });
            }}
          >
            Add By
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
