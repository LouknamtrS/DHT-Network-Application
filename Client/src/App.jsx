import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Home from "./Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline text-center text-red-500">
        Hello world!
      </h1> */}
      <Home/>
    </>
  );
}

export default App;