import "./App.scss";
import Add from "./Container/Add";
import ToDo from "./Container/ToDo";
import React from "react";
import Completed from "./Container/Completed";

function App() {
  return (
    <div className="App">
      <Add />
      <ToDo />
      <Completed />
    </div>
  );
}

export default App;
