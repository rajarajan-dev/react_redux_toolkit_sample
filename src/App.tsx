import { useState } from "react";
import { RootState } from "./store";
import { addCustomNumber, decrement, increment } from "./appstate/counterSlice";
import { useAppDispatch, useAppSelector } from "./appstate/store";

function App() {
  const counter = useAppSelector((state: RootState) => state.counter.value); // Get the counter value
  const dispatch = useAppDispatch(); // Get the dispatch function

  const [customNumber, setCustomNumber] = useState<number>(0); // State for custom number input

  const handleAddCustomNumber = () => {
    dispatch(addCustomNumber(customNumber)); // Dispatch the addCustomNumber action
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())} disabled={counter === 0}>
          Decrement
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          value={customNumber}
          onChange={(e) => setCustomNumber(Number(e.target.value))}
          placeholder="Enter a number"
        />
        <button onClick={handleAddCustomNumber}>Add Custom Number</button>
      </div>
    </div>
  );
}

export default App;
