import React, { useState } from "react";
import "./App.css";
import PrimaryButton from "./components/Button";
import SelectAlgorithm from "./components/Select";
import ArrayElement from "./components/ArrayElement";

function App() {
  const [array, setArray] = useState(
    Array.from({ length: 17 }, () => Math.floor(Math.random() * 100 + 1))
  );

  const [algorithmType, setAlgorithmType] = useState(1);

  return (
    <div className="App">
      <h1 className="title">Sorting Algorithm Visualizer</h1>
      <div className="form-container">
        <PrimaryButton
          buttonVariant="contained"
          buttonColor="primary"
          buttonText="Visualize"
          array={array}
          algorithm={algorithmType}
          setArray={setArray}
        />
        <SelectAlgorithm
          algorithmType={algorithmType}
          setAlgorithmType={setAlgorithmType}
        />{" "}
      </div>
      <div className="array-container">
        {array.map((value, index) => (
          <ArrayElement key={index} value={value} />
        ))}
      </div>
    </div>
  );
}

export default App;
