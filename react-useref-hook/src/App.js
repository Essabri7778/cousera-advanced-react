import "./App.css";
import { useRef } from "react";

function App() {
  const formInputRef = useRef(null);

  const focusInput = () => {
    formInputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Using useRef to access underlying DOM</h1>
      <input ref={formInputRef} type="text" />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
}

export default App;
