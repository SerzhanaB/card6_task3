import "./App.css";
import React from "react";
import RecButton from "./RecButton";

function App(props) {
  const value = Math.random() > Math.random();
  console.log(value);
  let par = null;
  if (value) {
    par = <p>true</p>;
  } else {
    par = <p>false</p>;
  }
  return (
    <div>
      <div>Пример 1 если использовать if {par}</div>

      <div>
        Пример 2 через тернарный оператор{value ? <p>true</p> : <p>false</p>}
      </div>
      <hr />
      <p>Рекурсивная кнопка </p>
      <RecButton />
    </div>
  );
}

export default App;
