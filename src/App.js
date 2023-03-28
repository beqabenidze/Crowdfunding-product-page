import "./App.css";
import { useState } from "react";
import Project from "./project.js";
import Select from "./select.js";
import Thanks from "./thanks.js";

function App() {
  const [toSelect, setToSelect] = useState(false);
  const [toThanks, setToThanks] = useState(false);

  return (
    <div className="App">
      {toSelect ? (
        toThanks ? (
          <Thanks />
        ) : (
          <Select setToThanks={setToThanks} />
        )
      ) : (
        <Project setToSelect={setToSelect} />
      )}
    </div>
  );
}

export default App;
