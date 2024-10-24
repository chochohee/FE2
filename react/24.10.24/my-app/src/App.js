import React from "react";
import "./App.css";

function App() {
  const array = [1, 2, 3, 4, 5];

  return array.map((item, index) => {
    return <React.Fragment key={index}>
      <h1>hello</h1>
      <h2>world</h2>
    </React.Fragment>;
  });
}
export default App;
