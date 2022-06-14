import React, { useReducer, useState } from "react";
import "./App.css";

// useReducer is used to take in the current state and it returns a new state. "return opposite"
function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        //We are able to abstract this logic to the useReducer hook and allow this syntax to be simpler.
        onChange={toggle}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

export default App;
