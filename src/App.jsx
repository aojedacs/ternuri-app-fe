import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ternurin from "./assets/ternuri-trabajando.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={ternurin} className="logo" alt="Vite logo" />
      </div>
      <h1>Ternuri APP</h1>

      <p className="read-the-docs">Estamos trabajando en ella ...</p>
    </>
  );
}

export default App;
