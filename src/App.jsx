import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Body from "./components/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Body />
    </div>
  );
}

export default App;
