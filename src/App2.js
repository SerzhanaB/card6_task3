import { useState } from "react";
import React from "react";
import App3 from "./App3";

function App2(props) {
  const [showMode, setShowMode] = useState(false);

  const handlerClick = () => {
    setShowMode(!showMode);
  };

  let content = null;
  if (showMode) {
    content = <App3 />;
  }
  return (
    <div>
      <button onClick={handlerClick}> Жми</button>
      {content}
    </div>
  );
}
export default App2;
