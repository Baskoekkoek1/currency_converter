import React from "react";
import "./App.css";
import Converter from "./Components/Converter/Converter";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Converter />
    </div>
  );
}

export default App;
