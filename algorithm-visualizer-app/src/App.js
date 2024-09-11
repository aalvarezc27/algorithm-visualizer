import logo from "./logo.svg";
import "./App.css";
import PrimaryButton from "./components/Button";
import SelectAlgorithm from "./components/Select";

function App() {
  return (
    <div className="App">
      <h1 className="title">Sorting Algorithm Visualizer</h1>
      <div className="form-container">
        <PrimaryButton
          buttonVariant="contained"
          buttonColor="primary"
          buttonText="Visualize"
        ></PrimaryButton>
        <SelectAlgorithm></SelectAlgorithm>
      </div>
      <div className="array-container"></div>
    </div>
  );
}

export default App;
