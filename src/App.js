import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Ian");
  const [greeting, setGreeting] = useState("Hi");

  return (
    <div className="App">
      <h1>
        {greeting} {name} Welcome
      </h1>
      <button onClick={() => setName("Benny")}>CHANGE NAME</button>
      <button onClick={() => setGreeting("Hello")}>CHANGE GREETING</button>
    </div>
  );
}

export default App;
