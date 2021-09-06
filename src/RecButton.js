import React from "react";
import { useState } from "react";

export default function RecButton(props) {
  const [showMode, setShowMode] = useState(false);
  return (
    <>
      <button onClick={() => setShowMode(!showMode)}>
        {" "}
        Покажи/скрой след шаг
      </button>
      <br />
      {showMode ? <RecButton /> : null}
    </>
  );
}
